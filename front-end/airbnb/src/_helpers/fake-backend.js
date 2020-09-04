// import { Role } from '../components/Permissions/permissions'

// export function configureFakeBackend() {
//     let users = [
//         { id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User', role: Role.ROLE_ADMIN },
//         { id: 2, username: 'host', password: 'host', firstName: 'Normal', lastName: 'User', role: Role.ROLE_HOST },
//         { id: 3, username: 'guest', password: 'guest', firstName: 'Normal', lastName: 'User', role: Role.ROLE_GUEST }
//     ];
//     let realFetch = window.fetch;
//     window.fetch = function (url, opts) {
//         const authHeader = opts.headers['Authorization'];
//         const isLoggedIn = authHeader && authHeader.startsWith('Bearer fake-jwt-token');
//         const roleString = isLoggedIn && authHeader.split('.')[1];
//         const role = roleString ? Role[roleString] : null;

//         return new Promise((resolve, reject) => {
//             // wrap in timeout to simulate server api call
//             setTimeout(() => {
//                 // authenticate - public
//                 if (url.endsWith('/login') && opts.method === 'POST') {
//                     const params = JSON.parse(opts.body);
//                     const user = users.find(x => x.username === params.username && x.password === params.password);
//                     if (!user) return error('Username or password is incorrect');
//                     return ok({
//                         id: user.id,
//                         username: user.username,
//                         firstName: user.firstName,
//                         lastName: user.lastName,
//                         role: user.role,
//                         token: `fake-jwt-token.${user.role}`
//                     });
//                 }

//                 // get user by id - admin or user (user can only access their own record)
//                 if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
//                     if (!isLoggedIn) return unauthorized();

//                     // get id from request url
//                     let urlParts = url.split('/');
//                     let id = parseInt(urlParts[urlParts.length - 1]);

//                     // only allow normal users access to their own record
//                     const currentUser = users.find(x => x.role === role);
//                     if (id !== currentUser.id && role !== Role.ROLE_ADMIN) return unauthorized();

//                     const user = users.find(x => x.id === id);
//                     return ok(user);
//                 }

//                 // get all users - admin only
//                 if (url.endsWith('/users') && opts.method === 'GET') {
//                     if (role !== Role.ROLE_ADMIN) return unauthorized();
//                     return ok(users);
//                 }

//                 // pass through any requests not handled above
//                 realFetch(url, opts).then(response => resolve(response));

//                 // private helper functions

//                 function ok(body) {
//                     resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) })
//                 }

//                 function unauthorized() {
//                     resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorized' })) })
//                 }

//                 function error(message) {
//                     resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) })
//                 }
//             }, 500);
//         });
//     }
// }

// array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users')) || [];
    
export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        const { method, headers } = opts;
        const body = opts.body && JSON.parse(opts.body);

        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(handleRoute, 500);

            function handleRoute() {
                switch (true) {
                    case url.endsWith('/login') && method === 'POST':
                        return authenticate();
                    case url.endsWith('/users/register') && method === 'POST':
                        return register();
                    case url.endsWith('/users') && method === 'GET':
                        return getUsers();
                    case url.match(/\/users\/\d+$/) && method === 'DELETE':
                        return deleteUser();
                    default:
                        // pass through any requests not handled above
                        return realFetch(url, opts)
                            .then(response => resolve(response))
                            .catch(error => reject(error));
                }
            }

            // route functions

            function authenticate() {
                const { username, password } = body;
                const user = users.find(x => x.username === username && x.password === password);
                if (!user) return error('Username or password is incorrect');
                return ok({
                    id: user.id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    token: 'fake-jwt-token'
                });
            }

            function register() {
                const user = body;
    
                if (users.find(x => x.username === user.username)) {
                    return error(`Username  ${user.username} is already taken`);
                }
    
                // assign user id and a few other properties then save
                user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users));

                return ok();
            }
    
            function getUsers() {
                if (!isLoggedIn()) return unauthorized();

                return ok(users);
            }
    
            function deleteUser() {
                if (!isLoggedIn()) return unauthorized();
    
                users = users.filter(x => x.id !== idFromUrl());
                localStorage.setItem('users', JSON.stringify(users));
                return ok();
            }

            // helper functions

            function ok(body) {
                resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) });
            }

            function unauthorized() {
                resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorized' })) });
            }

            function error(message) {
                resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) });
            }

            function isLoggedIn() {
                return headers['Authorization'] === 'Bearer fake-jwt-token';
            }
    
            function idFromUrl() {
                const urlParts = url.split('/');
                return parseInt(urlParts[urlParts.length - 1]);
            }
        });
    }
}
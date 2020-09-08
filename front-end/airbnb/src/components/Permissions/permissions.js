const ROLE_ADMIN = 'ROLE_ADMIN';
const ROLE_HOST = 'ROLE_HOST';
const ROLE_GUEST = 'ROLE_GUEST';

export const Role = {
  ROLE_ADMIN,
  ROLE_HOST,
  ROLE_GUEST
};

export const Permissions = {
  incident: {
    close: [ROLE_HOST],
    deleteUser: [ROLE_GUEST,ROLE_HOST, ROLE_ADMIN],
    view: [ROLE_ADMIN, ROLE_HOST],
    edit: [ROLE_ADMIN, ROLE_HOST],
    accept: [ROLE_GUEST],
    addListing: [ROLE_GUEST],
  },
};

export const isAuthorized = (resource, action, roles) => {
  const canAccessResource = roles.some((role) => {
    return Permissions[resource][action].includes(role);
  });
  return canAccessResource;
};

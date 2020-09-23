import React from 'react';
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading';

const UsersList = ({users, loading}) => {
  if(loading){
    return <Loading />
  }

  return(
    <div className="container">
      <ul className='user-list'
        style={{display: 'flex', flexDirection: 'column', padding: '0%', margin: '0%'}}>
        {users.map(user => (
          <Link to={{
            pathname: `/admin/users/${user.id}`,
            state: {
              userId: user.id
            }
          }} style={{textDecoration: 'none'}} query={user.id}>
            <li key={user.id} className="user-list-item">
            {user.username}, {user.id}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default UsersList;

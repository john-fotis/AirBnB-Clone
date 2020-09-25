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
        style={{display: 'flex', flexDirection: 'column', padding: '0%', margin: '5% 0%'}}>
        {users.map(user => (
          <li key={user.id} style={{textAlign: 'center'}} className="user-list-item">
            <Link to={{
              pathname: `/admin/users/${user.id}`,
              state: {
                userId: user.id
              }
            }} style={{textDecoration: 'none'}} query={user.id}>
              {user.username}, {user.id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersList;
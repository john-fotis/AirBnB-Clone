import React from "react";
import { Link } from 'react-router-dom';
import UserService from '../../_services/user.service';
import Loading from '../Loading/Loading';
import DeleteIcon from '@material-ui/icons/Delete';

const HostMessageList = ({messages, loading, handleDelete}) => {
  
  if(loading){
    return <Loading />
  }

  return (
    <ul style={{display: 'flex', flexDirection: 'column', padding: '0%', margin: '0%'}}>
      {messages.map(message => (
        <li key={message.id} className="host-message-list-item">
          {message.seen && (
            <Link to={{
              pathname: `/host/messages/${message.id}`,
              state: {
                id: message.id,
                guestId: message.guestId,
                listingId: message.listingId,
                guestName: message.guestName,
                text: message.text,
                date: message.sendDate
              }
            }} style={{textDecoration: 'none', color: 'green'}}>
              &#10004; {message.guestName}, {message.listingTitle}
            </Link>
          )}
          {!message.seen && (
            <Link to={{
              pathname: `/host/messages/${message.id}`,
              state: {
                id: message.id,
                guestId: message.guestId,
                listingId: message.listingId,
                guestName: message.guestName,
                text: message.text,
                date: message.sendDate
              }
            }} style={{textDecoration: 'none', color: 'blue'}}>
              {message.guestName}, {message.listingTitle}
            </Link>
          )}
          <div
            style={{float: 'right'}}
            onClick = {() => {
              UserService.hostDeleteMessage(message.id)
              .then( () => {
                handleDelete();
              });
            }}
          >
            <DeleteIcon/>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default HostMessageList;
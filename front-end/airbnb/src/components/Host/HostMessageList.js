import React from "react";
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

const HostMessageList = ({messages, loading, onClick}) => {
  
  if(loading){
    return <Loading />
  }

  return (
    <ul style={{display: 'flex', flexDirection: 'column', padding: '0%', margin: '0%'}}>
      {messages.reverse().map(message => (
        <Link to={{
          pathname: `/host/messages/${message.id}`,
          state: {
            guestId: message.guestId,
            listingId: message.listingId,
            guestName: message.guestName,
            text: message.text,
            date: message.sendDate
          }
        }} style={{textDecoration: 'none'}} query={message.id}
        onClick = {onClick}>
          {message.seen && (
            <li key={message.id} className="host-message-list-item" style={{color: 'green'}}>
            {message.guestName}, {message.listingTitle}
            </li>
          )}
          {!message.seen && (
            <li key={message.id} className="host-message-list-item" style={{color: 'blue'}}>
            {message.guestName}, {message.listingTitle}
            </li>
          )}
        </Link>
      ))}
    </ul>
  );
}

export default HostMessageList;
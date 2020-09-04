import React from 'react';

import AddIcon from '@material-ui/icons/Add';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListIcon from '@material-ui/icons/List';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import { useLocation } from 'react-router-dom';

import { Navbar, LinkButton, NavLink } from '../Navbar/Navbar';

function NavbarAdmin() {
  const location = useLocation();
  function handleLogout() {
    localStorage.clear();
    window.location.href = '/';
  }
  return (
    <Navbar>
      <NavLink to='/' activeclassname='activeLink'>
        <LinkButton
          style={location.pathname === '/' ? { color: '#FAFAFB' } : {}}
          endIcon={<ListIcon />}
          color='secondary'
        >
          <h5>Χρήστες</h5>
        </LinkButton>
      </NavLink>
      <NavLink to='/create-user' activeclassname='activeLink'>
        <LinkButton
          style={location.pathname === '/create-user' ? { color: '#FAFAFB' } : {}}
          endIcon={<AddIcon />}
          color='secondary'
        >
          <h5>Προσθήκη</h5>
        </LinkButton>
      </NavLink>
      <NavLink to='/stats' activeclassname='activeLink'>
        <LinkButton
          style={location.pathname === '/stats' ? { color: '#FAFAFB' } : {}}
          endIcon={<EqualizerIcon />}
          color='secondary'
        >
          <h5>Στατιστικά</h5>
        </LinkButton>
      </NavLink>
      <NavLink to='/incidents' activeclassname='activeLink'>
        <LinkButton
          style={
            location.pathname === '/incidents' || location.pathname.includes('/incidents')
              ? { color: '#FAFAFB' }
              : {}
          }
          endIcon={<RssFeedIcon />}
          color='secondary'
        >
          <h5>Συμβάντα</h5>
        </LinkButton>
      </NavLink>
      <LinkButton
        onClick={handleLogout}
        style={{ marginLeft: 'auto', color: '#FAFAFB' }}
        color='secondary'
        endIcon={<ExitToAppIcon />}
      >
        <h5>Αποσύνδεση</h5>
      </LinkButton>
    </Navbar>
  );
}

export default NavbarAdmin;

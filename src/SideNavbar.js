import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faList, faEnvelope, faCog } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav } from 'react-bootstrap';

import logo from './logo.png'; // Adjust the path to your logo

const SideNavbar = () => {
  const styles = {
    sideNavbar: {
      backgroundColor: '#333',
      color: '#fff',
      width: '250px',
      minHeight: '100vh',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      top: 0,
      left: 0,
    },
    logoContainer: {
      marginBottom: '20px',
      borderRadius: '50%', // Apply border-radius for a round shape
      overflow: 'hidden', // Ensure the border-radius works
      width: '70%', // Adjust the width as needed
      height: '70%', // Adjust the height as needed
      border: '5px solid #D3D3D3', // Add a border to create a double circle effect
    },
    logoImg: {
      width: '100%',
      height: 'auto',
    },
    navList: {
      listStyle: 'none',
      padding: '0',
      margin: '0',
    },
    navItem: {
      marginBottom: '15px',
    },
    navLink: {
      textDecoration: 'none',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.2rem',
    },
    icon: {
      marginRight: '10px',
    },
  };

  return (
    <Navbar style={styles.sideNavbar}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logoImg} />
      </div>
      <Nav style={styles.navList} className="flex-column">
        <Nav.Link as={Link} to="/" style={styles.navLink}>
          <FontAwesomeIcon icon={faHome} style={styles.icon} /> Home
        </Nav.Link>
        <Nav.Link as={Link} to="/search" style={styles.navLink}>
          <FontAwesomeIcon icon={faSearch} style={styles.icon} /> Search
        </Nav.Link>
        <Nav.Link as={Link} to="/products" style={styles.navLink}>
          <FontAwesomeIcon icon={faList} style={styles.icon} /> Products
        </Nav.Link>
        <Nav.Link as={Link} to="/sendemail" style={styles.navLink}>
          <FontAwesomeIcon icon={faEnvelope} style={styles.icon} /> Messages
        </Nav.Link>
        <Nav.Link as={Link} to="/settings" style={styles.navLink}>
          <FontAwesomeIcon icon={faCog} style={styles.icon} /> Settings
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default SideNavbar;

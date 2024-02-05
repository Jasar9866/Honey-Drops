// Updated Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    navbar: {
      backgroundColor: "#0B2952",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px",
    },
    title: {
      fontFamily: 'Brush Script MT, cursive',
      fontSize: '50px', // Adjusted font size
      lineHeight: '1',
      color: '#D3D3D3',
      textAlign: 'center',
      borderRadius: '8px',
      margin: '0', // Reset margin
    },
    subtitle: {
      fontFamily: 'Courier New, Monospace',
      color: "#D3D3D3",
      fontSize: "18px", // Adjusted font size
      padding: "10px", // Adjusted padding
    },
    linkContainer: {
      display: "flex",
      justifyContent: "center",
    },
    link: {
      color: "whitesmoke",
      textDecoration: "none",
      margin: "0 15px",
      fontSize: "18px",
    },
  };

  return (
    <div>
      <nav style={styles.navbar}>
        <div>
          <h4 style={styles.title}>
            Honey Drops
          </h4>
          <i style={styles.subtitle}>THE QUEEN OF TASTE</i>
        </div>
        <div style={styles.linkContainer}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
          <Link to="/sendemail" style={styles.link}>
            Contact
          </Link>
          {/* Add more links as needed */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

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
        fontSize: '100px',
        lineHeight: '0.5',
        color: '#D3D3D3',
        textAlign: 'center',
        borderRadius: '8px',
        
    
    },
    subtitle: {
      fontFamily: 'Courier New, Monospace',
      color: "#D3D3D3",
      fontSize: "30px",
      padding:"50px",
      margin: "100px auto" ,
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
            Honey Drops {'\t'}
           
          
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

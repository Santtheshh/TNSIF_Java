// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/add" style={styles.link}>Add College</Link>
            <Link to="/display" style={styles.link}>Display Colleges</Link>
         
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '1rem',
        backgroundColor: '#282c34',
        color: 'white'
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px'
    }
};

export default Navbar;

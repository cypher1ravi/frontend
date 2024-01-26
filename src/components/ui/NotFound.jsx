import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>Oops! The page you are looking for might be in another castle.</p>
      <p style={styles.text}>Return to <Link to="/" style={styles.link}>the homepage</Link>.</p>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    color: '#333',
    textAlign: 'center',
    padding: '50px',
  },
  heading: {
    color: '#e74c3c',
  },
  text: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  link: {
    color: '#3498db',
    textDecoration: 'none',
  },
};

export default NotFound;

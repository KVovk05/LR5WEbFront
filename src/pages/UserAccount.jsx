// pages/UserAccount.jsx
import React from 'react';
import { useUser } from './UserContext.jsx';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';

function UserAccount() {
  const user = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/'); 
  };

  if (!user) {
    return <p>Будь ласка, увійдіть у свій акаунт.</p>;
  }

  return (
    <div style={styles.container}>
      <h2>👤 My Account</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <button onClick={handleLogout} style={styles.button}>Logout</button>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9'
  },
  button: {
    padding: '10px 20px',
    marginTop: '15px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  }
};

export default UserAccount;

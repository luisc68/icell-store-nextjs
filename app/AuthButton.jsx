'use client'
import React from 'react';
import { useAuth, logout } from '../util/useAuth';
import { useRouter } from 'next/navigation';

const AuthButton = () => {
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push('/');
    router.refresh();
  };
  const user = useAuth();

  if (user) {
    return (
      <button style={buttonStyle} onClick={handleLogout}>
        Logout
      </button>
    );
  }

  return (
    <button style={buttonStyle} onClick={() => router.push('/login')}>
      Log in
    </button>
  );
};

// Estilos
const buttonStyle = {
  backgroundColor: '#0b76a6',
  // border radius
  borderRadius: '8px',
  border: 'none',
  color: 'white',
  padding: '6px 14px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '14px',
  margin: '4px 2px',
  cursor: 'pointer',
};

export default AuthButton;

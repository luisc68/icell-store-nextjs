import * as React from 'react';
import Form from './Form';

const LoginPage = () => {
  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>Login Page</h3>
      <Form />
    </div>
  );
}

// Estilos
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
}

const titleStyle = {
  fontSize: '24px',
  marginBottom: '20px',
}

export default LoginPage;

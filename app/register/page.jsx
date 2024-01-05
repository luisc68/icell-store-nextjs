import React from 'react';
import RegisterForm from '../register/Form';

const LoginPage = () => {
  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>Register Page</h3>
      <RegisterForm />
    </div>
  );
};

// Estilos
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start', // Alinear el contenido en la parte superior
  height: '100vh',
  
};

const titleStyle = {
  fontSize: '24px',
  marginBottom: '20px',
  
};

export default LoginPage;

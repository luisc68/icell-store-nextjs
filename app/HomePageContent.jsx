'use client'
import React, { useEffect, useState } from 'react';
import PocketBase from 'pocketbase';
import { useRouter } from 'next/navigation';
import AuthButton from './AuthButton';

const pb = new PocketBase('http://127.0.0.1:8090');

const HomePageContent = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const handleRegister = () => {
    router.push('/register');
  };
  const handleLogin = () => {
    router.push('/login');
  };
  const handleContents = () => {
    router.push('/contents');
  };

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await pb.authStore.model;
      setUser(userData);
    };

    fetchUser();
  }, []);

  if (user) {
    const { name, image } = user;

    return (
      <div style={containerStyle}>
        <h1 style={welcomeStyle}>Bienvenido, {name}</h1>
        <p>Bienvenido a nuestra tienda de celulares y accesorios. Aquí encontrarás una amplia selección de los últimos modelos de celulares y una variedad de accesorios para complementar tus dispositivos.</p>
        <p>Te invitamos a registrarte e iniciar sesión para aprovechar las ofertas especiales y recibir recomendaciones personalizadas.</p>
        <img src={image} width={100} height={100} alt="Avatar del usuario" style={avatarStyle} />
        <button onClick={handleContents} style={buttonStyle}>Productos</button>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h1 style={welcomeStyle}>Bienvenido a nuestra tienda de celulares y accesorios</h1>
      <p>Te invitamos a registrarte e iniciar sesión para aprovechar las ofertas especiales y recibir recomendaciones personalizadas.</p>
      <div style={buttonContainerStyle}>
        <button onClick={handleRegister} style={buttonStyle}>Register</button>
        <button onClick={handleLogin} style={buttonStyle}>Login</button>
      </div>
    </div>
  );
};


// Estilos
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
}

const welcomeStyle = {
  fontSize: '32px',
  marginBottom: '8px',
  fontFamily: 'sans-serif',
}

const avatarStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  marginBottom: '20px',
  
}

const buttonContainerStyle = {
  marginTop: '10px',
};

const buttonStyle = {
  backgroundColor: '#0b76a6',
  borderRadius: '10px',
  border: 'none',
  color: 'white',
  padding: '6px 15px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '15px',
  margin: '4px 2px',
  cursor: 'pointer',
}

export default HomePageContent;

'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar el registro de usuario a PocketBase
      const user = {
        username,
        email,
        password,
        passwordConfirm,
        name,
        image,
      };

      // Utilizar el método create de la colección 'users' para crear el registro
      await pb.collection('users').create(user);

      console.log('Usuario registrado:', user);
      alert(`¡Gracias por registrarte!`);
      router.push('/login');
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      alert(`Error al registrar el usuario: ${error.message}`);
    }
  };

  return (
    <div>
      <hr />
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ ...inputStyle, marginTop: '15px' }} // Ajuste de marginTop para los inputs
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Register</button>
      </form>
    </div>
  );
};

// Estilos
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

}

const inputStyle = {
  marginBottom: '10px',
  padding: '5px',
  width: '200px',
  borderRadius: '10px',
}

const buttonStyle = {
  backgroundColor: '#0b76a6',
  borderRadius: '10px',
  border: 'none',
  color: 'white',
  padding: '8px 17px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px 2px',
  cursor: 'pointer',
}

export default RegisterForm;

'use client'
import * as React from 'react';
import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

const Form = () => {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authData = await pb.collection('users').authWithPassword(
      user,
      password,
    );
    if (authData) {
      router.push('/contents');
      router.refresh();
    }
  }

  return (
    <div>
      <hr />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={user} onChange={e => setUser(e.target.value)} style={inputStyle} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={inputStyle} />
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
}

// Estilos
const inputStyle = {
  marginBottom: '50px',
  padding: '5px',
  width: '200px',
  borderRadius: '10px',
  // border: 'solid 1px red',
}

const buttonStyle = {
  backgroundColor: '#0b76a6',
  borderRadius: '10px',
  border: 'none',
  color: 'white',
  padding: '6px 15px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px 2px',
  cursor: 'pointer',
  // border: 'solid 1px red'
}

export default Form;

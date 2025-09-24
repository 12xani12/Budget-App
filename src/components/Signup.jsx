import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    // TODO: send signup to backend
    alert('Signup is a placeholder. Implement backend to create users and send confirmation emails.');
    navigate('/');
  };
  return (
    <div className="card">
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <label>Email<input value={email} onChange={e=>setEmail(e.target.value)} required /></label>
        <label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} minLength={8} required /></label>
        <button type="submit">Create account</button>
      </form>
    </div>
  );
}

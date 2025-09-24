import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Login(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();
    // TODO: call backend auth
    alert('This demo does not authenticate. Implement server-side login.');
  };
  return (
    <div className="card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email<input value={email} onChange={e=>setEmail(e.target.value)} required /></label>
        <label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required /></label>
        <button type="submit">Login</button>
      </form>
      <p>Don’t have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
}

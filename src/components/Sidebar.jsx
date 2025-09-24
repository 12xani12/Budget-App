import React from 'react';

export default function Sidebar({accounts, toggleAccount}){
  return (
    <aside className="sidebar">
      <h3>Accounts</h3>
      <ul>
        {accounts.map(a=>(
          <li key={a.id}>
            <label>
              <input type="checkbox" defaultChecked onChange={()=>toggleAccount(a.id)} /> {a.name}
            </label>
          </li>
        ))}
      </ul>
      <hr/>
      <div>
        <button onClick={()=>alert('Connect to CommBank - placeholder. Implement OAuth server flow.')}>Connect CommBank</button>
      </div>
    </aside>
  );
}

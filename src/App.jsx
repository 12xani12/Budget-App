import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

export default function App(){
  const [accounts, setAccounts] = useState([
    {id: 'spend', name: 'Spending Account', balance: 1200},
    {id: 'save', name: 'Savings Account', balance: 4200},
    {id: 'other', name: 'Other Account', balance: 300}
  ]);
  const [visibleIds, setVisibleIds] = useState(['spend','save','other']);
  const toggleAccount = (id) => {
    setVisibleIds(prev => prev.includes(id) ? prev.filter(x=>x!==id) : [...prev,id]);
  };
  return (
    <div className="app">
      <Sidebar accounts={accounts} toggleAccount={toggleAccount} />
      <main className="main">
        <Outlet />
        <Dashboard accounts={accounts.filter(a=>visibleIds.includes(a.id))} />
      </main>
    </div>
  );
}

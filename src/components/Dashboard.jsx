import React from 'react';
import { format } from './utils';

function SpendingPanel({account}){
  // simple "left to spend" calculation demo
  const budget = 1500;
  const left = account.balance - (budget - 0);
  return (
    <div className="panel">
      <h4>{account.name}</h4>
      <p>Balance: ${account.balance.toFixed(2)}</p>
      <p>Left to spend (vs ${budget} budget): ${left.toFixed(2)}</p>
    </div>
  );
}

function SavingsPanel({account}){
  // trend: mock average monthly deposit
  const avgDeposit = 250;
  const monthsToGoal = Math.ceil((10000 - account.balance) / avgDeposit);
  return (
    <div className="panel">
      <h4>{account.name}</h4>
      <p>Balance: ${account.balance.toFixed(2)}</p>
      <p>Avg monthly save: ${avgDeposit}</p>
      <p>Est months to $10,000: {monthsToGoal}</p>
    </div>
  );
}

export default function Dashboard({accounts}){
  return (
    <section>
      <h2>Dashboard</h2>
      <div className="grid">
        {accounts.map(a=> a.id==='spend' ? <SpendingPanel key={a.id} account={a} /> : <SavingsPanel key={a.id} account={a} />)}
      </div>
    </section>
  );
}

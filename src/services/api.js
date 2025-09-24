// Mock API service: replace with secure backend calls.
// DO NOT call bank APIs directly from client-side code.
export async function fetchAccounts(){
  // Replace with: fetch('/api/accounts') -> backend handles CDR/OAuth with CommBank
  return [
    {id: 'spend', name: 'Spending Account', balance: 1200},
    {id: 'save', name: 'Savings Account', balance: 4200}
  ];
}

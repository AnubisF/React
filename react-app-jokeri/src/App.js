import './App.css';
import Number from './Number';
import uuid from 'react-uuid';

function App() {
  const numbers = [];
  for (let i = 1; i<=7; i++) {
    numbers.push(Math.floor(Math.random() * 10));
  }

  const items = numbers.map((number) => 
    <Number key={uuid()} number={number} />
  );


  return (
    <>
      {items}
    </>
  );
}

export default App;

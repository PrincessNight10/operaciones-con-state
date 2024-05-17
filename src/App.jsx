import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [r, setR] = useState(null);

  const handleSum = () => {
    setR(parseFloat(n1) + parseFloat(n2));
  };

  const handleSubtract = () => {
    setR(parseFloat(n1) - parseFloat(n2));
  };

  const handleMultiply = () => {
    setR(parseFloat(n1) * parseFloat(n2));
  };

  const handleDivide = () => {
    setR(parseFloat(n1) / parseFloat(n2));
  };

  return (
    <>
      <h2>Operaciones</h2>
      <p>Resultado: {r}</p>
      <input 
        type="text" 
        value={n1}
        onChange={(e) => setN1(e.target.value)}
        placeholder="Número 1"
      />
      <input 
        type="text" 
        value={n2}
        onChange={(e) => setN2(e.target.value)}
        placeholder="Número 2"
      />
      <button type="button" onClick={handleSum}>Suma</button>
      <button type="button" onClick={handleSubtract}>Resta</button>
      <button type="button" onClick={handleMultiply}>Multiplicación</button>
      <button type="button" onClick={handleDivide}>División</button>
    </>
  );
}

export default App;


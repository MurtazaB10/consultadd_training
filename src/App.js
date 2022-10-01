import {useState} from 'react';
import "./App.css";

const input = {
  name: "INR",
  value: 0
};
const output = {
  name: "INR",
  value: 0
};

function App() {
  const [inp, setInp] = useState(input);
  const [out, setOut] = useState(output);
  const calculate = () => {
    const url = `https://api.exchangerate.host/latest?base=${inp.name}`;
    fetch(url).then(res => res.json()).then(json => {
      setOut({...out, value: inp.value * json.rates[out.name]});
    });
  }
  return (
    <div className="App">
      <section className="calculator">
        <div className="outer">
          <div className="input">
            <h2>Select Input Currency:</h2>
            <select className="dropdown" defaultValue={inp.name} onChange={(e) => setInp({...inp, name: e.target.value})}>
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="JPY">JPY</option>
              <option value="GBP">GBP</option>
            </select>
            <input type="number" value={inp.value} onChange={(e) => setInp({...inp, value: e.target.value})} required />
          </div>
          <div className="output">
            <h2>Select Output Currency:</h2>
            <select className="dropdown" defaultValue={out.name} onChange={(e) => setOut({...out, name: e.target.value})}>
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="JPY">JPY</option>
              <option value="GBP">GBP</option>
            </select>
            <input type="number" value={out.value} onChange={(e) => setOut({...out, value: e.target.value})} disabled />
          </div>
        </div>
        <button onClick={calculate}>Calculate</button>
      </section>
    </div>
  );
}

export default App;

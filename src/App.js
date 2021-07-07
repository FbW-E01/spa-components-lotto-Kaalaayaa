import './App.css';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import GeneratedNumbers from './components/GeneratedNumbers';

function App() {
  return (
    <div className="App">
      <div className="container" className="font-face-tf">
        <h1>Lotto 6 / 49</h1>
        <p>Generating lucky numbers</p>
        <GeneratedNumbers />
      </div>
    </div>
  );
}

export default App;

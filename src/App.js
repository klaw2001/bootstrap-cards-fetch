import logo from './logo.svg';
import './App.css';
import APIWithUseEffect from './components/APIWithUseEffect';
import CardComp from './components/CardComp';

function App() {
  return (
    <div className="App">
      <h1>Users</h1>
      <div className='parent'>
      <APIWithUseEffect/>
      <CardComp/>
      </div>
    </div>
  );
}

export default App;

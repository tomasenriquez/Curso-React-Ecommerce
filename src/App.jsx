import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import Navbar from './Components/Navbar';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <ItemListContainer greetings='Aqui van lo Productos' />
    </div>
  );
}

export default App;

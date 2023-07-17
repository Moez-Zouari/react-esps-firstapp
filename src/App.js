
import './App.css';

import Client from './Client';
import Article from './Article';
import Compteur from './Compteur';

function App() {
  return (
    <div className="App">
      <h1>Bienvenu Dans Notre Site</h1>
      <Client />
      <Article />
      <Compteur />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import MainArea from './components/MainArea'

/**
 * IPFS Store
 * Shop without a centralized server
 * List-items are stored on blockchain
 * @author imestin
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Header is currently empty*/}
      </header>

      <nav>
        <ul>
          <li><a href="#" >Shop</a></li>
          <li><a href="#" >About</a></li>
        </ul>
      </nav>

      <MainArea />
        {/*This is where content is loaded*/}

      <footer>
        This is the footer.
      </footer>
    </div>
  );
}

export default App;

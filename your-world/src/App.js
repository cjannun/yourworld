import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form className="customization-form">
          <label> select character
            <input type="radio"/>
          </label>

          <label> select background
            <input type="radio"/>
          </label>

          <label> select weather
            <input type="radio"/>
          </label>

          <input type="submit" value="update world"/>
        </form>
      </header>
    </div>
  );
}

export default App;

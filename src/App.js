
import './App.css';
import Weather from './Weather';


function App( ) {
  return (
    <div className="App">
      <header className="App-header">
        <ul >
          <li><a href="/">Lisbon</a></li>
          <li><a href="/">Paris</a> </li>
          <li><a href="/">Sydney</a></li>
          <li><a href="/">San fransico</a></li>
        </ul>
        <form>
          <input type="search" placeholder='enter a city' />
          <button>search</button>
          <button className="current">current</button>
        </form>
        
        <h1>
          Hello world we are here today
        </h1>
    
       <Weather city="Lagos"/>
      </header>
    </div>
  );
}
export default App;
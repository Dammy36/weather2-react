import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
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
        <div>
          <h1>Lagos</h1>          
        <p>Saturday 23:00         
            <div className='weather-clouds'>Clouds</div>          
         </p>
        </div>
        <div className='weather-today'>15</div>
          <span className='weather-today2'>°C</span>
       <Weather city="Lagos"/>
      </header>
    </div>
  );
}
export default App;
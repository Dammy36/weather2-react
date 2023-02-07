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
        <p className='weather-clouds'>Saturday 23:00         
            <div>Clouds</div>          
         </p>
        </div>
        <div className='row'>
          <div className='col-sm-6'> 
            
            <div className='weather-today'>
                                       
            15</div>          
            <span className='weather-today2'>°C</span>
          </div>
          <div className='col-sm-6'>
             <div className='weather-clouds'>
            Prescipitation:
              15%
            </div>
            <div className='weather-clouds'>Wind:11km/h</div>
          </div>
        </div>
        <div className='row forcast-day' >
          <div className='col-sm-2'> Mon</div>
          <div className='col-sm-2'>Tue</div>
          <div className='col-sm-2'>Wed</div>
          <div className='col-sm-2'>Thur</div>
          <div className='col-sm-2'>Fri</div>

        </div>
        <div className='row forcast-temp'>
          <div className='col-sm-2'>21°</div>
          <div className='col-sm-2'>19°</div>
          <div className='col-sm-2'>15°</div>
          <div className='col-sm-2'>21°</div>
          <div className='col-sm-2'>20°</div>
        </div>

       <Weather city="Lagos"/>
      </header>
    </div>
  );
}
export default App;
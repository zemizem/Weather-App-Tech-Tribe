import { useState, useEffect, useCallback } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherData from './components/WeatherData';
import { getWeatherData } from './services/WeatherService';


const title = "Weather App";
function App() {
  const persistedLocation = localStorage.getItem('searchTerm');
  const [searchTerm, setSearchTerm] = useState(persistedLocation || 'Washington,DC');
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState(false);
  const [city, setCity] = useState(searchTerm);
  const fetchDataCallback = useCallback(async () => {
    try {
      setLoading(true);
    const response = await getWeatherData(city);
    console.log(response.data.list);
    setWeatherData(response.data.list);
    setLoading(false);
    } catch{
      setError(true);
      setLoading(false);
    } 
  }, [city]);
  function handleChange(event) {
    setSearchTerm(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setCity(searchTerm);
  }
  useEffect(() => {
    localStorage.setItem('searchTerm', searchTerm );
  }, [searchTerm]);  
  useEffect(() => {
    fetchDataCallback();
  }, [fetchDataCallback]);

  return (
    <div className="app-container">
     <div className="container">
        <h1>{title}</h1>
        {/* Search Bar Component */}
        <SearchBar handleSubmit={handleSubmit} searchTerm={searchTerm} handleChange={handleChange} id={'search-city'}>
          <strong>Search City: {searchTerm}</strong>
        </SearchBar>
        {error && <p>There was an error loading your data</p>}
        {/* Iterating through array */}
        {loading ? <p>Data Loading</p> :(
           <WeatherData list={weatherData}/>
        )}       
      </div>
    </div>
  );
}

export default App;


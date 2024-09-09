import { useState } from 'react';
import { Container, Typography, Box, Tabs, Tab } from '@mui/material';
import cloudRain from './assets/rain-cloud.png';
import './App.css';

function App() {
  const [weather, setWeather] = useState({
    city: 'Philadelphia',
    temperature: '22',
    condition: 'Raining',
    highTemp: '25',
    lowTemp: '18',
  });

  // Tab state
  // Default is precipitation
  const [tabIndex, setTabIndex] = useState(1); 

  const forecastData = {
    temperature: [
      { time: '12PM', temp: '22°'},
      { time: '1PM', temp: '24°'},
      { time: '2PM', temp: '25°'},
      { time: '3PM', temp: '23°'},
    ],
    precipitation: [
      { time: '12PM', precip: '60%' },
      { time: '1PM', precip: '50%' },
      { time: '2PM', precip: '30%' },
      { time: '3PM', precip: '30%' },
    ],
    wind: [
      { time: '12PM', wind: '4 km/h' },
      { time: '1PM', wind: '4 km/h' },
      { time: '2PM', wind: '3 km/h' },
      { time: '3PM', wind: '1 km/h' },
    ],
  };

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const renderForecast = () => {
    if (tabIndex === 0) {
      return forecastData.temperature.map((item, index) => (
        <Box key={index} sx={{ textAlign: 'center', padding: '3px' }}>
          <Typography sx={{ fontSize: '0.85rem' }}>{item.time}</Typography>  {/* Time with smaller font */}
          <Typography sx={{ fontSize: '0.85rem' }}>{item.temp}</Typography>  {/* Temperature */}
        </Box>
      ));
    } else if (tabIndex === 1) {
      return forecastData.precipitation.map((item, index) => (
        <Box key={index} sx={{ textAlign: 'center', padding: '3px' }}>
          <Typography sx={{ fontSize: '0.85rem' }}>{item.time}</Typography>  {/* Time with smaller font */}
          <Typography sx={{ fontSize: '0.85rem' }}>{item.precip}</Typography>  {/* Precipitation Percentage */}
        </Box>
      ));
    } else if (tabIndex === 2) {
      return forecastData.wind.map((item, index) => (
        <Box key={index} sx={{ textAlign: 'center', padding: '3px' }}>
          <Typography sx={{ fontSize: '0.85rem' }}>{item.time}</Typography>  {/* Time with smaller font */}
          <Typography sx={{ fontSize: '0.85rem' }}>{item.wind}</Typography>  {/* Wind Speed */}
        </Box>
      ));
    }
  };
  
  const dailyForecast = [
    { day: 'Mon', emoji: '☀️', high: '30°', low: '20°' },
    { day: 'Tue', emoji: '🌧️', high: '28°', low: '18°' },
    { day: 'Wed', emoji: '⛅', high: '27°', low: '19°' },
  ];
  
  const renderDailyForecast = () => {
    return dailyForecast.map((item, index) => (
      <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', padding: '5px 10px' }}>
        <Typography sx={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{item.day}</Typography>
        <Typography sx={{ fontSize: '1.2rem' }}>{item.emoji}</Typography>
        <Typography sx={{ fontSize: '0.9rem' }}>H: {item.high}</Typography>
        <Typography sx={{ fontSize: '0.9rem' }}>L: {item.low}</Typography>
      </Box>
    ));
  };

  return (
    <Container
      sx={{
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '96vh',
        textAlign: 'center',
        padding: '20px',
        border: '10px solid #000',
        borderRadius: '50px',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
        margin: '0 auto',
        position: 'relative',
        backgroundImage: 'linear-gradient(to bottom, #444f75, #6ca0e9)',
        color: 'white',
      }}
    >

      <Box
        sx={{
          position: 'absolute',
          top: '13px',
          width: '86%',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'white',
          color: '#333',
          borderRadius: '15px',
          padding: '12px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)',
          textAlign: 'center',
          zIndex: 2,
        }}
      >
        <Typography variant="body1" sx={{ fontSize: '0.88rem', fontWeight: '500' }}>
         ☂️ Raining day - remember to bring your umbrella!
        </Typography>
      </Box>

      <Box sx={{ 
        width: '100%',
        height: '33%',
        position: 'absolute',
        top: 40,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
      }}>
        <img src={cloudRain} alt="Cloud with rain" style={{ height: '100%', objectFit: 'contain' }} />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '32%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'flex-start',
            justifyContent: 'center', 
          }}
        >

          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: '4.5rem', 
                margin: 0,  
                padding: 0, 
                fontWeight: 'bold',
              }}
            >
              {weather.temperature}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'Roboto, sans-serif',
                marginLeft: '2px',
                fontSize: '2rem',
                paddingBottom: '0.4rem',
              }}
            >
              °C
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              textAlign: 'left',
              height: '4rem',
              marginLeft: '20px',
            }}
          >

            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
              }}
            >
              {weather.city}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                marginTop: '2px',
              }}
            >
              {weather.condition}
            </Typography>

            <Typography
              variant="body2"
            >
              H: {weather.highTemp}° L: {weather.lowTemp}°
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '44.5%',
          width: '80%',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '10px',
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', 
        }}
      >
        <Typography variant="body1" sx={{ color: '#255255255', display: 'flex', alignItems: 'center' }}>
          ⚠️ Rain Alert: Don’t forget your umbrella!
        </Typography>
      </Box>
      
      <Box
        sx={{
          position: 'absolute',
          top: '53%',
          width: '85.4%',
          borderRadius: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', 
        }}
      >
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          centered
          scrollButtons="auto"
          variant="scrollable"
          sx={{
            '& .MuiTabs-indicator': { backgroundColor: 'white', bottom: '3px' },  // Indicator color
            '& .MuiTab-root': { 
              color: 'white',
              fontWeight: 'bold',
              minWidth: 0,
              padding: '12px',
            },
          }}
        >
          <Tab label="Temperature" />
          <Tab label="Precipitation" />
          <Tab label="Wind" />
        </Tabs>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            borderRadius: '10px',
            padding: '10px',
            marginTop: '-6px',
          }}
        >
          {renderForecast()}
        </Box>
      </Box>
      
      <Box
        sx={{
          position: 'absolute',
          top: '69.8%',
          width: '81.5%',
          borderRadius: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          padding: '8px',
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', 
        }}
      >
        <Typography variant="h6" sx={{ textAlign: 'center', marginTop: '4px', marginBottom: '6px', fontSize: '1rem', fontWeight: 'bold' }}>
          Daily Forecast
        </Typography>

        <Box sx={{ borderBottom: '1px solid white', width: '94%', margin: '8px auto', marginTop: '8px', marginBottom: '10px' }}></Box>

        {renderDailyForecast()}
      </Box>

    </Container>
  );
}

export default App

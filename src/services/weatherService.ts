import axios from 'axios';

const openWeatherMapApiKey = 'your-openweathermap-api-key-here'; // Replace with your API key

// Function to fetch weather data by city name
export const getWeatherByCityName = async (cityName: string): Promise<any> => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${openWeatherMapApiKey}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
};

// Function to fetch weather data by latitude and longitude
export const getWeatherByCoordinates = async (
  latitude: number,
  longitude: number
): Promise<any> => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openWeatherMapApiKey}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
};

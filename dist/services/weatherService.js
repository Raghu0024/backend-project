var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
const openWeatherMapApiKey = 'your-openweathermap-api-key-here'; // Replace with your API key
// Function to fetch weather data by city name
export const getWeatherByCityName = (cityName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${openWeatherMapApiKey}`);
        return response.data;
    }
    catch (error) {
        throw new Error('Error fetching weather data');
    }
});
// Function to fetch weather data by latitude and longitude
export const getWeatherByCoordinates = (latitude, longitude) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openWeatherMapApiKey}`);
        return response.data;
    }
    catch (error) {
        throw new Error('Error fetching weather data');
    }
});

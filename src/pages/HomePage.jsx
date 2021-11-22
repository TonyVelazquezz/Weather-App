import React from 'react';
import ErrorMessage from '../components/ErrorMessage';
import HeroWeather from '../components/HeroWeather';
import TimeWeather from '../components/TimeWeather';
import WeatherBox from '../components/WeatherBox';
import useFetch from '../hooks/useFetch';
import useForm from '../hooks/useForm';

const HomePage = () => {
	//CustomHooks
	const [userInput, handleInputChange, reset] = useForm({ city: '' });
	const { city } = userInput;
	const KEY = import.meta.env.VITE_API_KEY;
	const { data, loader, handleFetchData } = useFetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`
	);

	const handleWeatherData = e => {
		e.preventDefault();
		if (city.trim().length > 0) {
			handleFetchData();
			reset();
		}
	};
	return (
		<div className="bg-gradient-to-b from-gray_blue via-gray-300 to-dark_blue h-screen overflow-auto w-full">
			<HeroWeather
				city={city}
				handleInputChange={handleInputChange}
				handleWeatherData={handleWeatherData}
			/>

			{data?.cod !== 200 ? (
				<>
					{data !== null && (
						<ErrorMessage message={data?.message} error={data?.cod} />
					)}
				</>
			) : null}

			<WeatherBox loader={loader} {...data} />

			<TimeWeather />
		</div>
	);
};

export default HomePage;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MoonLoader from 'react-spinners/MoonLoader';
import useWeatherIcons from '../hooks/useWeatherIcons';

import WeatherMainBox from '../components/WeatherMainBox';
import Forecast from '../components/Forecast';
import { BackgroundImage } from '../components/backgroundImage';

const WeatherPage = () => {
	const [weatherData, setWeatherData] = useState(null);
	const [loader, setLoader] = useState(false);

	const { name } = useParams();
	const KEY = import.meta.env.VITE_WEATHER_KEY;

	const handleWeatherData = async () => {
		setWeatherData(null);
		setLoader(true);

		const weatherResponse = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${KEY}&units=metric`
		);
		const weatherResult = await weatherResponse.json();
		setWeatherData(weatherResult);
		setLoader(false);
	};

	useEffect(() => {
		handleWeatherData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { icon } = useWeatherIcons(weatherData?.weather[0].id);

	return (
		<section className="min-h-screen relative">
			<BackgroundImage icon={icon} />

			<div className="flex justify-center relative px-2">
				{loader ? (
					<div className="absolute flex justify-center items-center w-full h-screen z-30">
						<MoonLoader color={'#FFFFFF'} loading={loader} size={75} />
					</div>
				) : (
					<div className="flex flex-wrap w-full justify-center py-5 gap-5">
						<WeatherMainBox data={weatherData} name={name} icon={icon} />

						<Forecast {...weatherData} />
					</div>
				)}
			</div>
		</section>
	);
};

export default WeatherPage;

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MoonLoader from 'react-spinners/MoonLoader';
import useWeatherIcons from '../hooks/useWeatherIcons';
import useFetch from '../hooks/useFetch';
import BackgroundImage from '../components/backgroundImage';
import WeatherMainBox from '../components/WeatherMainBox';

const WeatherPage = () => {
	const { name } = useParams();

	const KEY = import.meta.env.VITE_WEATHER_KEY;

	const { data, loader, handleFetchData } = useFetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${KEY}&units=metric`
	);

	const { icon } = useWeatherIcons(data?.weather[0].id);

	useEffect(() => {
		handleFetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	console.log(data);

	return (
		<section className="min-h-screen relative">
			<BackgroundImage icon={icon} />

			<div className="flex justify-center relative py-5 px-2">
				{loader ? (
					<div className="absolute flex justify-center w-full h-full z-30">
						<MoonLoader color={'#2B4D7D'} loading={loader} size={75} />
					</div>
				) : (
					<WeatherMainBox data={data} name={name} icon={icon} />
				)}
			</div>
		</section>
	);
};

export default WeatherPage;

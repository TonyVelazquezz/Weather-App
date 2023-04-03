import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sunny from '../assets/Sunny.mp4';
import WeatherIconsBox from '../components/WeatherIconsBox';
import MoonLoader from 'react-spinners/MoonLoader';
import useWeatherIcons from '../hooks/useWeatherIcons';
import useFetch from '../hooks/useFetch';

const WeatherPage = () => {
	const { name } = useParams();
	const KEY = import.meta.env.VITE_API_KEY;
	const { data, loader, handleFetchData } = useFetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${KEY}&units=metric`
	);

	const { icon } = useWeatherIcons(data?.weather[0].id);
	useEffect(() => {
		handleFetchData();
	}, []);

	return (
		<div className="bg-gray-300 relative w-full h-screen">
			<video
				className="absolute object-cover object-center w-full md:w-full h-full"
				autoPlay
				loop
				muted
			>
				<source src={Sunny} type="video/mp4" />
			</video>

			<div className="filter absolute flex items-center justify-center h-screen w-full z-20">
				{loader ? (
					<div className="absolute flex items-center justify-center w-full h-full z-30">
						<MoonLoader color={'#2B4D7D'} loading={loader} size={75} />
					</div>
				) : (
					<div className="glass flex flex-col items-center justify-center py-5 px-10 rounded-md shadow-md text-shadow text-white sm:w-1/2 w-11/12">
						<h2 className="pb-2 sm:text-4xl text-3xl text-center text_shadow">{name}</h2>

						<WeatherIconsBox icon={icon} temp={data?.main.temp} />

						<div className="pt-3 text-center w-full text_shadow">
							<p className="text-5xl text-dark_blue text_shadow_white">{parseInt(data?.main.temp)}°</p>
							<p className="text-2xl capitalize">{data?.weather[0].description}</p>
							<p className="text-main_blue text-2xl">
								Humidity-
								<span className="pl-1 text-white">{data?.main.humidity}</span>
							</p>
							<p className="text-main_blue text-2xl">
								Pressure-<span className="pl-1 text-white">{data?.main.pressure}</span>
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default WeatherPage;

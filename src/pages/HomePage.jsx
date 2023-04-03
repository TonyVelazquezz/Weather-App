import { useEffect } from 'react';
import ErrorMessage from '../components/ErrorMessage';
import FormWeather from '../components/FormWeather';
import TimeWeather from '../components/TimeWeather';
import WeatherBox from '../components/WeatherBox';
import useFetch from '../hooks/useFetch';
import useForm from '../hooks/useForm';
import BackgroundImage from '../components/backgroundImage';
import useWeatherIcons from '../hooks/useWeatherIcons';

const HomePage = () => {
	const [userInput, handleInputChange, reset] = useForm({ city: '' });
	const { city } = userInput;

	const KEY = import.meta.env.VITE_API_KEY;
	const { data, loader, handleFetchData } = useFetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${
			city === '' ? 'new york' : city
		}&appid=${KEY}&units=metric`
	);

	const { icon } = useWeatherIcons(data?.weather?.[0].id);

	useEffect(() => {
		handleFetchData();
	}, []);

	const handleWeatherData = e => {
		e.preventDefault();
		if (city.trim().length > 0) {
			handleFetchData();
			reset();
		}
	};

	return (
		<div className="relative h-screen overflow-auto w-full">
			<BackgroundImage icon={icon} />

			<div className="absolute pt-10 z-20 w-full">
				<FormWeather
					city={city}
					handleInputChange={handleInputChange}
					handleWeatherData={handleWeatherData}
				/>

				{data?.cod !== 200 ? (
					<>{data !== null && <ErrorMessage message={data?.message} error={data?.cod} />}</>
				) : null}

				<WeatherBox loader={loader} {...data} />

				<TimeWeather />
			</div>
		</div>
	);
};

export default HomePage;

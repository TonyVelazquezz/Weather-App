import { useEffect } from 'react';
import ErrorMessage from '../components/ErrorMessage';
import FormWeather from '../components/FormWeather';
import TimeWeather from '../components/TimeWeather';
import WeatherBox from '../components/WeatherBox';
import useFetch from '../hooks/useFetch';
import useForm from '../hooks/useForm';
import BackgroundImage from '../components/backgroundImage';
import useWeatherIcons from '../hooks/useWeatherIcons';
import CitiesButtons from '../components/CitiesButtons';

const HomePage = () => {
	const { city, onInputChange, reset } = useForm({ city: '' });

	const KEY = import.meta.env.VITE_WEATHER_KEY;
	const { data, loader, handleFetchData } = useFetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${
			city === '' ? 'new york' : city
		}&appid=${KEY}&units=metric`
	);

	const { icon } = useWeatherIcons(data?.weather?.[0].id);

	useEffect(() => {
		handleFetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleWeatherData = e => {
		e.preventDefault();
		if (city.trim().length > 0) {
			handleFetchData();
			reset();
		}
	};

	return (
		<section className="min-h-screen relative">
			<BackgroundImage icon={icon} />

			<div className="py-5 relative">
				<CitiesButtons />

				<FormWeather city={city} onInputChange={onInputChange} handleWeatherData={handleWeatherData} />

				{data?.cod !== 200 ? (
					<>{data !== null && <ErrorMessage message={data?.message} error={data?.cod} />}</>
				) : null}

				<WeatherBox loader={loader} {...data} icon={icon} />

				<TimeWeather />
			</div>
		</section>
	);
};

export default HomePage;

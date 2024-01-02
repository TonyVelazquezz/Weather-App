import { useEffect, useState } from 'react';
import ErrorMessage from '../components/ErrorMessage';
import FormWeather from '../components/FormWeather';
import TimeWeather from '../components/TimeWeather';
import WeatherBox from '../components/WeatherBox';
import useFetch from '../hooks/useFetch';
import useForm from '../hooks/useForm';
import BackgroundImage from '../components/BackgroundImage';
import useWeatherIcons from '../hooks/useWeatherIcons';
import CitiesButtons from '../components/CitiesButtons';

const HomePage = () => {
	const { city, onInputChange, onResetForm } = useForm({ city: '' });
	const [query, setQuery] = useState('new york');
	const [unit, setUnit] = useState('metric');

	const KEY = import.meta.env.VITE_WEATHER_KEY;

	const { data, loader, handleFetchData } = useFetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${
			city === '' ? query : city
		}&appid=${KEY}&units=${unit}`
	);

	const { icon } = useWeatherIcons(data?.weather?.[0].id);

	useEffect(() => {
		handleFetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query, unit]);

	const handleWeatherData = e => {
		e.preventDefault();

		handleFetchData();
		onResetForm();
	};

	return (
		<section className="min-h-screen relative">
			<BackgroundImage icon={icon} />

			<div className="py-5 relative">
				<CitiesButtons setQuery={setQuery} />

				<FormWeather city={city} onInputChange={onInputChange} handleWeatherData={handleWeatherData} />

				{data?.cod !== 200 ? (
					<>{data !== null && <ErrorMessage message={data?.message} error={data?.cod} />}</>
				) : null}

				<WeatherBox loader={loader} {...data} icon={icon} unit={unit} setUnit={setUnit} />

				<TimeWeather />
			</div>
		</section>
	);
};

export default HomePage;

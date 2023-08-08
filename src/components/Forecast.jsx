import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import ForecastIcons from './ForecastIcons';
import { RiContrastDrop2Line } from 'react-icons/ri';

const Forecast = ({ coord }) => {
	const [forecastData, setForecastData] = useState(null);

	const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	const today = format(new Date(), 'eee');
	const todayIndex = daysOfTheWeek.indexOf(today);

	let cutOff = [];
	if (todayIndex <= 2) {
		cutOff = [...daysOfTheWeek].splice(todayIndex, 5);
	} else {
		cutOff = [...daysOfTheWeek]
			.splice(todayIndex)
			.concat([...daysOfTheWeek].slice(0, todayIndex - 2));
	}

	const forecastDays = cutOff.map(day => (day === today ? 'Today' : day));

	useEffect(() => {
		const KEY = import.meta.env.VITE_WEATHER_KEY;

		let isSubscribed = true;

		const handleForecastData = async () => {
			const forecastResponse = await fetch(
				`https://api.openweathermap.org/data/2.5/forecast?lat=${coord?.lat}&lon=${coord?.lon}&appid=${KEY}&units=metric`
			);
			const forecastResult = await forecastResponse.json();

			if (isSubscribed) setForecastData(forecastResult);
		};

		handleForecastData();

		return () => (isSubscribed = false);
	}, [coord]);

	return (
		<div className="glass p-1 text_shadow text-white rounded-md sm:p-5 w-full sm:w-3/4 lg:w-1/2">
			<h2 className="pb-2 sm:text-4xl text-3xl text-center w-full">Forecast</h2>

			<ul className="flex flex-wrap xs:flex-nowrap justify-center w-full">
				{forecastData?.list?.splice(0, 5).map((day, index) => (
					<li key={index} className="px-3 w-1/3 sm:w-auto">
						<div className="flex flex-col justify-center items-center text-shadow text-lg">
							<label>{forecastDays[index]}</label>

							<span>{day.main.temp}°</span>

							<ForecastIcons icons={day.weather[0].id} />

							<div className="flex items-center mt-2">
								<div className="bg-white rounded-full mr-1 p-[0.1rem]">
									<RiContrastDrop2Line size={20} className="text-main_blue" />
								</div>

								<p className="text-main_blue">
									<span className="text-white whitespace-nowrap">{day.main.humidity}%</span>
								</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Forecast;

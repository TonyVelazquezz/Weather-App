import React from 'react';
import HeroBg from '../assets/HeroBg.mp4';
import FormWeather from './FormWeather';

const HeroWeather = ({ city, handleInputChange, handleWeatherData }) => {
	return (
		<header className="flex flex-wrap items-center justify-center relative h-1/4">
			<video
				className="absolute object-cover object-center w-full h-full"
				autoPlay
				loop
				muted
			>
				<source src={HeroBg} type="video/mp4" />
			</video>

			<h1 className="title pt-5 font-bold text-4xl text_shadow text-white z-10">
				Weather App
			</h1>

			<FormWeather
				city={city}
				handleInputChange={handleInputChange}
				handleWeatherData={handleWeatherData}
			/>
		</header>
	);
};

export default HeroWeather;

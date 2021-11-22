import React from 'react';

const FormWeather = ({ city, handleInputChange, handleWeatherData }) => {
	return (
		<form
			onSubmit={e => handleWeatherData(e)}
			className="relative top-0 text-center w-full"
		>
			<input
				type="text"
				placeholder="Search the weather..."
				name="city"
				onChange={({ target }) => handleInputChange(target)}
				className="font-bold outline-none py-2 px-4 rounded-md shadow-md text-dark_blue md:w-1/2 w-11/12"
				value={city}
			/>
			<button
				type="submit"
				className="absolute btn md:right-[25.5%] md:top-[12.5%] right-[5%] top-[12.5%]"
			>
				Search
			</button>
		</form>
	);
};

export default FormWeather;

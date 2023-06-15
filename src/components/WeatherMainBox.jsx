import React from 'react';
import WeatherIconsBox from './WeatherIconsBox';

import { WiThermometer } from 'react-icons/wi';
import { RiContrastDrop2Line, RiArrowUpDownFill } from 'react-icons/ri';

const WeatherMainBox = ({ data, name, icon }) => {
	return (
		<div className="glass p-2 sm:p-5 rounded-md shadow-md text-shadow text-white w-full sm:w-3/4 lg: lg:w-1/2">
			<h2 className="pb-2 sm:text-4xl text-3xl text-center text_shadow w-full">{name}</h2>

			<div className="flex justify-center">
				<WeatherIconsBox icon={icon} temp={data?.main.temp} />
			</div>

			<div className="pt-3 text-center w-full text_shadow text-xl">
				<p className="text-5xl text-dark_blue text_shadow_white">{parseInt(data?.main.temp)}°</p>
				<p className="text-2xl capitalize">{data?.weather[0].description}</p>

				<div className="flex justify-center flex-wrap">
					<div className="pl-2 sm:pl-5">
						<div className="flex w-full items-center">
							<div className="bg-white rounded-full mr-1 p-[0.1rem]">
								<RiContrastDrop2Line size={20} className="text-main_blue" />
							</div>

							<p className="text-main_blue">
								Humidity
								<span className="pl-1 text-white">{data?.main.humidity}%</span>
							</p>
						</div>

						<div className="flex w-full items-center">
							<div className="bg-white rounded-full mr-1 p-[0.1rem]">
								<RiArrowUpDownFill size={20} className="text-main_blue" />
							</div>

							<p className="text-main_blue">
								Pressure
								<span className="pl-1 text-white whitespace-nowrap">{data?.main.pressure} mb</span>
							</p>
						</div>

						<div className="flex w-full items-center">
							<div className="bg-white rounded-full mr-1 p-[0.1rem]">
								<WiThermometer size={20} className="text-main_blue" />
							</div>

							<p className="text-main_blue whitespace-nowrap">
								Feels Like
								<span className="pl-1 text-white">{data?.main.feels_like}°</span>
							</p>
						</div>
					</div>

					<div className="pl-2 sm:pl-5">
						<div className="flex w-full items-center">
							<div className="bg-white rounded-full mr-1 p-[0.1rem]">
								<RiContrastDrop2Line size={20} className="text-main_blue" />
							</div>

							<p className="text-main_blue">
								Temp Max
								<span className="pl-1 text-white">{data?.main.temp_max}°</span>
							</p>
						</div>

						<div className="flex w-full items-center">
							<div className="bg-white rounded-full mr-1 p-[0.1rem]">
								<RiArrowUpDownFill size={20} className="text-main_blue" />
							</div>

							<p className="text-main_blue">
								Temp Min
								<span className="pl-1 text-white whitespace-nowrap">{data?.main.temp_min}°</span>
							</p>
						</div>

						<div className="flex w-full items-center">
							<div className="bg-white rounded-full mr-1 p-[0.1rem]">
								<WiThermometer size={20} className="text-main_blue" />
							</div>

							<p className="text-main_blue whitespace-nowrap">
								Visibility
								<span className="pl-1 text-white">{data?.visibility} km</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeatherMainBox;

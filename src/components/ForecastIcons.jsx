import React from 'react';
import useWeatherIcons from '../hooks/useWeatherIcons';
import {
	WiThunderstorm,
	WiSleet,
	WiRain,
	WiSnow,
	WiFog,
	WiDaySunny,
	WiDayFog,
} from 'react-icons/wi';

const ForecastIcons = ({ icons }) => {
	const { icon } = useWeatherIcons(icons);

	return (
		<div className="flex justify-center bg-white text-main_blue rounded-md px-3 py-2">
			{icon === 'WiThunderstorm' && <WiThunderstorm size={40} />}
			{icon === 'WiSleet' && <WiSleet size={40} />}
			{icon === 'WiRain' && <WiRain size={40} />}
			{icon === 'WiSnow' && <WiSnow size={40} />}
			{icon === 'WiFog' && <WiFog size={40} />}
			{icon === 'WiDaySunny' && <WiDaySunny size={40} />}
			{icon === 'WiDayFog' && <WiDayFog size={40} />}
		</div>
	);
};

export default ForecastIcons;

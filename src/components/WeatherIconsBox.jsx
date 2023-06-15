import {
	WiThunderstorm,
	WiSleet,
	WiRain,
	WiSnow,
	WiFog,
	WiDaySunny,
	WiDayFog,
} from 'react-icons/wi';

const WeatherIconsBox = ({ icon }) => {
	return (
		<div className="bg-white flex items-center justify-center pt-3 pb-3 rounded-md shadow text-main_blue w-52 sm:w-60">
			{icon === 'WiThunderstorm' && <WiThunderstorm size={100} />}
			{icon === 'WiSleet' && <WiSleet size={100} />}
			{icon === 'WiRain' && <WiRain size={100} />}
			{icon === 'WiSnow' && <WiSnow size={100} />}
			{icon === 'WiFog' && <WiFog size={100} />}
			{icon === 'WiDaySunny' && <WiDaySunny size={100} />}
			{icon === 'WiDayFog' && <WiDayFog size={100} />}
		</div>
	);
};

export default WeatherIconsBox;

import { useState, useEffect } from 'react';

const useWeatherIcons = id => {
	const [state, setState] = useState({
		icon: {},
	});

	useEffect(() => {
		const weatherIcons = {
			Thunderstorm: 'WiThunderstorm',
			Drizzle: 'WiSleet',
			Rain: 'WiRain',
			FreezingRain: 'WiSnow',
			Snow: 'WiSnow',
			Atmosphere: 'WiFog',
			Clear: 'WiDaySunny',
			Clouds: 'WiDayFog',
		};

		switch (true) {
			case id >= 200 && id <= 232:
				setState({
					icon: weatherIcons.Thunderstorm,
				});
				break;
			case id >= 300 && id <= 321:
				setState({
					icon: weatherIcons.Drizzle,
				});
				break;
			case (id >= 500 && id <= 504) || (id >= 520 && id <= 531):
				setState({
					icon: weatherIcons.Rain,
				});
				break;
			case id === 511:
				setState({
					icon: weatherIcons.FreezingRain,
				});
				break;
			case id >= 600 && id <= 622:
				setState({
					icon: weatherIcons.Snow,
				});
				break;
			case id >= 701 && id <= 781:
				setState({
					icon: weatherIcons.Atmosphere,
				});
				break;
			case id === 800:
				setState({
					icon: weatherIcons.Clear,
				});
				break;
			case id >= 801 && id <= 804:
				setState({
					icon: weatherIcons.Clouds,
				});
				break;

			default:
				setState({
					icon: weatherIcons.Clouds,
				});
		}
	}, [id]);

	return state;
};

export default useWeatherIcons;

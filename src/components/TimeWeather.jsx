import { useEffect, useState } from 'react';
import { format } from 'date-fns';

const TimeWeather = () => {
	//? Date
	const day = format(new Date(), 'EEEE');
	const month = format(new Date(), 'MMMM do');
	const year = format(new Date(), 'yyyy');

	//? Clock
	const [time, setTime] = useState(format(new Date(), 'hh:mm:ss'));
	const [meridian, setMeridian] = useState(format(new Date(), 'a'));

	//? Functions to update the states
	const updateTime = () => {
		setTime(format(new Date(), 'hh:mm:ss'));
		setMeridian(format(new Date(), 'a'));
	};

	useEffect(() => {
		//? AutoUpdate the states every 1 second
		const timer = setInterval(updateTime, 1000);

		//? Component did unmount
		return () => {
			clearInterval(timer);
		};
	}, [time]);

	return (
		<div className="flex items-center justify-center pt-5 text-white">
			<div className="rounded-md text-center text_shadow sm:w-1/2 w-11/12">
				<p className="font-light text-main_blue pb-3 text-5xl sm:text-7xl">
					{time}
					<span className="pl-1 text-3xl">{meridian}</span>
				</p>
				<p className="pb-3 text-4xl">{day}</p>
				<p className="pb-3 text-3xl">{month}</p>
				<p className="text-4xl">{year}</p>
			</div>
		</div>
	);
};

export default TimeWeather;

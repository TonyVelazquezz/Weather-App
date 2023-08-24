import { Link } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';

import WeatherIconsBox from '../components/WeatherIconsBox';

const WeatherBox = ({ name, main, loader, weather, icon, sys, unit, setUnit }) => {
	return (
		<div className="flex items-center justify-center pt-4">
			{main !== undefined || loader ? (
				<div className="glass p-4 rounded-md text-center sm:w-1/2 w-11/12">
					{loader ? (
						<div className="flex justify-center p-2 md:top-[45%] top-[50%] w-full">
							<ScaleLoader color={'#2B4D7D'} loading={loader} width={10} height={53} />
						</div>
					) : (
						<>
							<div className="flex justify-center items-baseline text_shadow text-white">
								<h3 className="text-6xl md:text-8xl">{parseInt(main?.temp)}°</h3>

								<span className="text-5xl">{unit === 'metric' ? 'C' : 'F'}</span>
							</div>

							<div className="flex justify-center">
								<WeatherIconsBox icon={icon} temp={main?.temp} />
							</div>

							<h3 className="text-2xl text-white text_shadow capitalize">{weather?.[0].description}</h3>
							<h3 className="text-2xl text_shadow_white">
								{name}, {sys?.country}
							</h3>
						</>
					)}

					<Link
						to={`./${name}/weather`}
						className="btn_oval block mt-2 transition ease-out duration-300"
					>
						Weather details
					</Link>
				</div>
			) : null}
		</div>
	);
};

export default WeatherBox;

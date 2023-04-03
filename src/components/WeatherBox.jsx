import { Link } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';

const WeatherBox = ({ name, main, loader, weather }) => {
	return (
		<div className="flex items-center justify-center pt-7">
			{main !== undefined || loader ? (
				<div className="glass p-4 rounded-md text-center sm:w-1/2 w-11/12">
					{loader ? (
						<div className="flex justify-center p-2 md:top-[45%] top-[50%] w-full">
							<ScaleLoader color={'#2B4D7D'} loading={loader} width={10} height={53} />
						</div>
					) : (
						<>
							<h3 className="text-8xl text-white text_shadow">{parseInt(main?.temp)}°</h3>
							<h3 className="text-2xl text-white text_shadow capitalize">{weather?.[0].description}</h3>
							<h3 className="text-2xl text_shadow_white">{name}</h3>
						</>
					)}

					<Link to={`./${name}/weather`} className="btn_oval block mt-2">
						More details
					</Link>
				</div>
			) : null}
		</div>
	);
};

export default WeatherBox;

import { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import BeatLoader from 'react-spinners/BeatLoader';

const FormWeather = ({ city, onInputChange, handleWeatherData }) => {
	const [geoData, setGeoData] = useState({});
	const [showResults, setShowResults] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(-1);
	const [isKeyPressed, setIsKeyPressed] = useState(false);

	const myHeaders = new Headers();
	myHeaders.append('apikey', import.meta.env.VITE_GEO_API_KEY);

	const requestOptions = {
		method: 'GET',
		redirect: 'follow',
		headers: myHeaders,
	};

	const handleNewText = async e => {
		e.preventDefault();

		const newCity = e.target.value;
		onInputChange({ target: { name: 'city', value: newCity } });

		if (!newCity || geoData[newCity]) return;

		setGeoData(prev => ({ ...prev, [newCity]: { results: [], loading: true } }));

		const response = await fetch(`https://api.apilayer.com/geo/city/name/${newCity}`, requestOptions);
		const apiData = await response.json();

		if (Array.isArray(apiData)) {
			const results = apiData.slice(0, 6);

			setGeoData(prev => ({ ...prev, [newCity]: { results, loading: false } }));
		}
	};

	const handleKeyPress = e => {
		const currentResults = geoData[city]?.results ?? [];

		if (e.code === 'ArrowDown') {
			setCurrentIndex(prev => Math.min(prev + 1, currentResults.length - 1));
			setIsKeyPressed(true);
		} else if (e.code === 'ArrowUp') {
			setCurrentIndex(prev => Math.max(prev - 1, 0));
			setIsKeyPressed(true);
		} else if (e.code === 'Enter') {
			const newCity = currentResults[currentIndex] ? currentResults[currentIndex].name : city;
			onInputChange({ target: { name: 'city', value: newCity } });
			setGeoData(prev => ({ ...prev, [newCity]: { results: [], loading: true } }));
			setShowResults(false);
		}
	};

	const results = geoData[city]?.results ?? [];
	const loading = geoData[city]?.loading ?? false;

	return (
		<form onSubmit={handleWeatherData}>
			<div className="flex justify-center w-full px-5">
				<div className="flex w-full sm:w-1/2">
					<input
						type="text"
						placeholder="Search City..."
						className="bg-white capitalize font-bold outline-none py-2 px-4 rounded-l-md shadow-md text-dark_blue w-full"
						name="city"
						value={city}
						onChange={handleNewText}
						onFocus={() => setShowResults(true)}
						onBlur={() => setTimeout(() => setShowResults(false), 100)}
						onKeyDown={handleKeyPress}
					/>

					<button type="submit" className="btn_submit">
						<MdSearch size={25} className="text-white" />
					</button>
				</div>

				{/* <div className="flex flex-row md:w-1/12 w-3/12 items-center justify center md:pl-5 pl-2">
					<button name="metric" className="text-xl text-white font-light text_shadow">
						°C
					</button>
					<p className="font-light text-white text_shadow px-2">|</p>
					<button name="imperial" className="text-xl text-white font-light text_shadow">
						°F
					</button>
				</div> */}
			</div>

			{showResults && loading && (
				<div className="flex justify-center w-full">
					<ul className="bg-white mt-2 shadow-md md:w-1/2 w-11/12 px-2 py-1 text-center absolute">
						<BeatLoader color="#2B4D7D" />
					</ul>
				</div>
			)}

			<div className="flex justify-center w-full">
				{showResults && results.length > 0 && (
					<ul className="bg-white mt-2 shadow-md md:w-1/2 w-11/12 absolute">
						{results.map((city, index) => (
							<li
								key={city.geo_id}
								onClick={() => onInputChange({ target: { name: 'city', value: city.name } })}
								onMouseEnter={() => setIsKeyPressed(false)}
								className={`cursor-default ${
									!isKeyPressed ? 'hover:bg-gray-200' : 'hover:bg-transparent'
								} `}
								style={{
									backgroundColor: currentIndex === index && isKeyPressed && '#E5E7EB',
								}}
							>
								<span className="mx-2">{city.name}</span>
							</li>
						))}
					</ul>
				)}
			</div>
		</form>
	);
};

export default FormWeather;

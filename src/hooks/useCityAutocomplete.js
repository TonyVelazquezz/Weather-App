import { useState } from 'react';

const useCityAutocomplete = (city, onInputChange) => {
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
			const newCity = currentResults[currentIndex];

			onInputChange({ target: { name: 'city', value: newCity.name } });
		}
	};

	const results = geoData[city]?.results ?? [];
	const loading = geoData[city]?.loading ?? false;

	return {
		city,
		currentIndex,
		geoData,
		handleKeyPress,
		handleNewText,
		isKeyPressed,
		loading,
		results,
		setCity,
		setIsKeyPressed,
		setShowResults,
		showResults,
		reset,
	};
};
export default useCityAutocomplete;

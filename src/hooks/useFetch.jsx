import { useState } from 'react';

const useFetch = API => {
	const [data, setData] = useState(null);
	const [loader, setLoader] = useState(false);

	const handleFetchData = async () => {
		setData(null);
		setLoader(true);
		const response = await fetch(API);
		const result = await response.json();
		setData(result);
		setLoader(false);
	};

	return { data, loader, handleFetchData };
};

export default useFetch;

import React from 'react';

const CitiesButtons = ({ setQuery }) => {
	const cities = [
		{
			id: 1,
			tittle: 'New York',
		},
		{
			id: 2,
			tittle: 'London',
		},
		{
			id: 3,
			tittle: 'Paris',
		},
		{
			id: 4,
			tittle: 'Tokyo',
		},
	];

	return (
		<div className="flex items-center justify-center flex-wrap md:my-5 mb-4">
			{cities.map(city => (
				<button
					onClick={() => setQuery(city.tittle)}
					className="text-white text_shadow text-lg font-medium sm:px-3 px-1 hover:bg-main_blue rounded-md transition ease-out duration-300"
					key={city.id}
				>
					{city.tittle}
				</button>
			))}
		</div>
	);
};

export default CitiesButtons;

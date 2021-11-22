import React from 'react';

const ErrorMessage = ({ message, error }) => {
	return (
		<div className="flex justify-center pt-7 w-full">
			<div className="bg-white p-4 rounded-md shadow sm:w-1/2 w-11/12">
				<div className="text-center">
					<h2 className="text-4xl text-dark_blue">{error}</h2>
					<h3 className="text-3xl text-main_blue">{message}</h3>
					<p>please make sure the city is spelled correctly.</p>
				</div>
			</div>
		</div>
	);
};

export default ErrorMessage;

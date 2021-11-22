import { useState } from 'react';

const useForm = (initialState = {}) => {
	const [values, setValues] = useState(initialState);

	const reset = () => {
		setValues(initialState);
	};

	const handleInputChange = ({ name, value }) => {
		setValues({
			...values,
			[name]: value,
		});
	};

	return [values, handleInputChange, reset];
};

export default useForm;

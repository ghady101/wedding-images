import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Protected({ children }) {
	const [pass, setPass] = useState('');

	if (pass === 'the key') return children;

	return (
		<form>
			<input
				className='protected-input'
				type='password'
				value={pass}
				placeholder='Enter the key'
				onChange={(e) => setPass(e.target.value)}
			/>
		</form>
	);
}

export default Protected;

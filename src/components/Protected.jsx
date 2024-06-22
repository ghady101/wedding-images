import { useEffect, useRef } from 'react';
import { useKey } from '../context/KeyContext';

function Protected({ children }) {
	const { key, setKey } = useKey();
	const inputRef = useRef(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	if (key === '123') return children;

	return (
		<form>
			<input
				ref={inputRef}
				className='protected-input'
				type='password'
				value={key}
				placeholder='Enter the key'
				onChange={(e) => setKey(e.target.value)}
			/>
		</form>
	);
}

export default Protected;

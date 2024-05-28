import { useKey } from '../context/KeyContext';

function Protected({ children }) {
	const { key, setKey } = useKey();

	if (key === '123') return children;

	return (
		<form>
			<input
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

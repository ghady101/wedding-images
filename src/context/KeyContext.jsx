import { createContext, useContext, useState } from 'react';

const KeyContext = createContext();

const KeyProvider = ({ children }) => {
	const [key, setKey] = useState('');

	return (
		<KeyContext.Provider value={{ key, setKey }}>
			{children}
		</KeyContext.Provider>
	);
};

function useKey() {
	const context = useContext(KeyContext);

	if (context === undefined) throw new Error('Key is Used outside its scope');
	return context;
}

export { KeyProvider, useKey };

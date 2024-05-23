import { useState } from 'react';
import Display from './components/Display';
import Upload from './components/Upload';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

const App = () => {
	const [toUpload, setToUpload] = useState(true);

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 60 * 1000, // 1 minute
				// staleTime: 0,
			},
		},
	});

	return (
		<QueryClientProvider client={queryClient}>
			<div>
				<div>
					<button onClick={() => setToUpload(true)} disabled={toUpload}>
						Upload
					</button>
					<button onClick={() => setToUpload(false)} disabled={!toUpload}>
						Display
					</button>
				</div>
				{toUpload ? <Upload /> : <Display />}
			</div>
			<Toaster
				position='top-center'
				gutter={12}
				containerStyle={{ margin: '8px' }}
				toastOptions={{
					success: {
						duration: 3000,
					},
					error: {
						duration: 5000,
					},
					style: {
						fontSize: '16px',
						maxWidth: '500px',
						padding: '16px 24px',
						background: '#333',
						color: '#fff',
					},
				}}
			/>
		</QueryClientProvider>
	);
};

export default App;

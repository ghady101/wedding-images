import { Suspense } from 'react';
import Display from './components/Display';
import Upload from './components/Upload';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SpinnerFullPage from './components/loading/SpinnerFullPage';
import AppLayout from './components/AppLayout';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Protected from './components/Protected';

const App = () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 60 * 1000, // 1 minute
			},
		},
	});

	return (
		<QueryClientProvider client={queryClient}>
			{/* <ReactQueryDevtools initialIsOpen={false} /> */}
			<BrowserRouter>
				<Suspense fallback={<SpinnerFullPage />}>
					<Routes>
						<Route element={<AppLayout />}>
							<Route index element={<Navigate replace to='upload' />} />

							<Route index path='upload' element={<Upload />} />
							<Route
								index
								path='display'
								element={
									<Protected>
										<Display />
									</Protected>
								}
							/>
						</Route>
					</Routes>

					<Toaster
						position='top-center'
						gutter={12}
						containerStyle={{ margin: '8px' }}
						toastOptions={{
							success: {
								duration: 3000,
							},
							error: {
								duration: 3000,
							},
							style: {
								fontSize: '16px',
								maxWidth: '500px',
								padding: '16px 24px',
								background: '#252525',
								color: '#fff',
							},
						}}
					/>
				</Suspense>
			</BrowserRouter>
		</QueryClientProvider>
	);
};

export default App;

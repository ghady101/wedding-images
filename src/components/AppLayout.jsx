import { useState } from 'react';
import { HiArrowUpOnSquare, HiCamera } from 'react-icons/hi2';
import { Outlet, useNavigate } from 'react-router-dom';

function AppLayout() {
	const [flip, setFlip] = useState(false);
	const navigate = useNavigate();

	return (
		<div className='app'>
			<Outlet />

			<footer className='footer'>
				{flip ? (
					<HiArrowUpOnSquare
						style={{ cursor: 'pointer' }}
						size={'36px'}
						color='#73AD21'
						onClick={() => {
							setFlip((prev) => !prev);
							navigate('upload');
						}}
					/>
				) : (
					<HiCamera
						style={{ cursor: 'pointer ' }}
						size={'36px'}
						color='#73AD21'
						onClick={() => {
							setFlip((prev) => !prev);
							navigate('display');
						}}
					/>
				)}
			</footer>
		</div>
	);
}

export default AppLayout;

import { useGet } from '../hooks/useGet';
import SpinnerFullPage from './loading/SpinnerFullPage';
import { saveAs } from 'file-saver';

function Display() {
	const { data, error, isLoading } = useGet();
	if (isLoading) return <SpinnerFullPage />;

	if (error) return <div>{error.message}</div>;

	function handleClick(url) {
		// TODO
		// const extension = url.split('.')[1];
		// const image = name.concat('jpg');
		const indexOfDash = url.indexOf('-');
		const image = url.substring(indexOfDash + 1);
		saveAs(url, image);
	}

	return (
		<div className='display'>
			<div className='card-container'>
				{data.map((image, i) => {
					if (image.type === 'image')
						return (
							<div key={i} className='card'>
								<img src={image?.url} />
								<button
									className='download'
									onClick={() => handleClick(image?.url)}
								>
									download
								</button>
							</div>
						);
					if (image.type === 'video')
						return (
							<div key={i} className='card'>
								<video src={image?.url} controls />
								<button
									className='download'
									onClick={() => handleClick(image?.url)}
								>
									download
								</button>
							</div>
						);
				})}
			</div>
		</div>
	);
}

export default Display;

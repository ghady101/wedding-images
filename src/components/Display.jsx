import { useGet } from '../hooks/useGet';

function Display() {
	const { data, error, isLoading } = useGet();
	const numbers = Array.from({ length: 10 }, (_, index) => index + 1);
	if (isLoading) return <div>loading...</div>;

	if (error) return <div>{error.message}</div>;

	return (
		<div className='display'>
			<div className='card-container'>
				{data.map((image, i) => {
					if (image.type === 'image')
						return (
							<div key={i} className='card'>
								<img src={image?.url} />
								<button className='download'>download</button>
							</div>
						);
					if (image.type === 'video')
						return (
							<div key={i} className='card'>
								<video src={image?.url} />
								<button className='download'>download</button>
							</div>
						);
				})}
			</div>
		</div>
	);
}

export default Display;

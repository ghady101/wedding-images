import { useGet } from '../hooks/useGet';

function Display() {
	const { data, error, isLoading } = useGet();
	if (isLoading) return <div>loading...</div>;
	if (error) return <div>{error.message}</div>;
	return (
		<div>
			{data?.map((image, i) => {
				if (image.type === 'image')
					return <img src={image?.url} key={i} width={500} height={500} />;

				if (image.type === 'video')
					return <video src={image?.url} key={i} width={500} height={500} />;
			})}
		</div>
	);
}

export default Display;

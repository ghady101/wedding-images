import { useGet } from '../hooks/useGet';

function Display() {
	const { data, error, isLoading } = useGet();
	if (isLoading) return <div>loading...</div>;
	if (error) return <div>{error.message}</div>;
	return (
		<div>
			{data?.map((image, i) => (
				<img src={image?.image_url} key={i} width={500} height={500} />
			))}
		</div>
	);
}

export default Display;

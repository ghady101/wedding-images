import { useQuery } from '@tanstack/react-query';
import { getFiles } from '../service/uploadApi';

export function useGet() {
	const { isLoading, error, data } = useQuery({
		queryKey: ['files'],
		queryFn: getFiles,
	});
	console.log(data);
	return { data, error, isLoading };
}

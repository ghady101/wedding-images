import { useMutation } from '@tanstack/react-query';
import { uploadFileApi } from '../service/uploadApi';
import toast from 'react-hot-toast';

export function useUploadFiles() {
	// const queryClient = useQueryClient();

	const { mutateAsync: UploadFiles, isLoading } = useMutation({
		mutationFn: ({ images }) => uploadFileApi({ images }),
		onSuccess: () => {
			// toast.success('Thank you for sharing your memory with us!!');
			// queryClient.invalidateQueries({ queryKey: ['files'] });
		},
		onError: (err) => toast.error(err.message),
	});

	return { UploadFiles, isLoading };
}

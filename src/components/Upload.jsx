import { useState } from 'react';
import { useUploadFiles } from './useUploadFiles';
import toast from 'react-hot-toast';

function Upload() {
	const { UploadFiles, isLoading } = useUploadFiles();
	const [images, setImages] = useState([]);

	const handleClick = (e) => {
		e.preventDefault();
		toast.promise(UploadFiles({ images }), {
			loading: 'Uploading...',
			success: <b>Thank you for sharing your memory with us!!</b>,
			error: <b>Could not upload files.</b>,
		});
		// console.log(images);
		// if (images.length > 0) UploadFiles({ images });
	};

	return (
		<div>
			<input
				type='file'
				accept='image/*,video/*'
				multiple
				onChange={(e) => setImages(e.target.files)}
			/>
			<button onClick={handleClick} disabled={isLoading}>
				{isLoading ? 'Uploading...' : 'Upload Files'}
			</button>
		</div>
	);
}

export default Upload;

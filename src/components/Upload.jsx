import { useState } from 'react';
import toast from 'react-hot-toast';
import { useUploadFiles } from '../hooks/useUploadFiles';

function Upload() {
	const { UploadFiles, isLoading } = useUploadFiles();
	const [images, setImages] = useState([]);

	const handleClick = (e) => {
		e.preventDefault();
		if (images.length > 0)
			toast.promise(
				UploadFiles(
					{ images },
					{
						onSettled: () => {
							setImages([]);
						},
					}
				),
				{
					loading: 'Uploading...',
					success: <b>Thank you for sharing your memory with us!!</b>,
					error: <b>Could not upload files. Try again later</b>,
				}
			);
		else toast.error('Please select a photo/video first');
	};

	return (
		<div className='upload'>
			<input
				// className='file-input'
				id='fileInput'
				type='file'
				maxLength={10240}
				accept='image/*,video/*'
				multiple
				onChange={(e) => setImages(e.target.files)}
				style={{ display: 'none' }}
			/>
			<label htmlFor='fileInput' className='file-input-label'>
				Choose Files
			</label>
			<button onClick={handleClick} disabled={isLoading}>
				{isLoading ? 'Uploading...' : 'Upload'}
			</button>
		</div>
	);
}

export default Upload;

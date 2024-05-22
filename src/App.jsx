import { useState } from 'react';
import { uploadFile } from './service/uploadApi';

const App = () => {
	const [images, setImages] = useState([]);
	const [uploadResults, setUploadResults] = useState([]);

	const handleClick = async () => {
		// console.log(images);
		const results = await uploadFile({ files: images });

		setUploadResults(results);
		console.log(uploadResults);
	};

	return (
		<div>
			<input
				type='file'
				accept='image/*,video/*'
				multiple
				onChange={(e) => setImages(e.target.files)}
			/>
			<button onClick={handleClick}>Upload Files</button>
			{/* <div>
				{uploadResults.map((result, index) => (
					<div key={index}>
						{result.success ? (
							<div>
								<p>Uploaded: {result.file.name}</p>
								<p>Path: {result.filePath}</p>
							</div>
						) : (
							<p>Error uploading: {result.file.name}</p>
						)}
					</div>
				))}
			</div> */}
		</div>
	);
};

export default App;

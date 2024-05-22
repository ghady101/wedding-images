import supabase from '../supabase';

export async function uploadFile({ files }) {
	const validFiles = Array.from(files).filter(
		(file) => file.type.startsWith('image/') || file.type.startsWith('video/')
	);
	const uploads = validFiles.map(async (file, index) => {
		const fileName = `${Math.random()}-${file.name}`
			.replaceAll('/', '')
			.replaceAll(' ', '');

		try {
			const { error } = await supabase.storage
				.from('weddings')
				.upload(fileName, file);

			if (error) {
				throw new Error(
					`Image ${index + 1} could not be uploaded: ${error.message}`
				);
			}

			return { fileName, success: true };
		} catch (error) {
			console.error('Error uploading file:', error);
			return { fileName, success: false, error: error.message };
		}
	});

	try {
		const results = await Promise.all(uploads);
		console.log('results ', results);
		return results;
	} catch (error) {
		console.error('Error uploading files:', error);
		return null;
	}
}

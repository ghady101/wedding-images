import supabase, { supabaseUrl } from '../supabase';

export async function uploadFileApi({ images }) {
	const validFiles = Array.from(images).filter(
		(file) => file.type.startsWith('image/') || file.type.startsWith('video/')
	);
	const uploads = validFiles.map(async (file, index) => {
		const fileName = `${Math.random()}-${file.name}`
			.replaceAll('/', '')
			.replaceAll(' ', '');

		const type = file.type.split('/')[0];
		const url = `${supabaseUrl}/storage/v1/object/public/weddings/${fileName}`;

		const { error } = await supabase
			.from('Images')
			.insert([{ type, url }])
			.select()
			.single();

		if (error) {
			console.error(error);
			throw new Error("Sorry file couldn't be created aat the moment");
		}

		try {
			const { error } = await supabase.storage
				.from('weddings')
				.upload(fileName, file);

			if (error) {
				await supabase.from('Images').delete().eq('url', url);
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
		return results;
	} catch (error) {
		console.error('Error uploading files:', error);
		return null;
	}
}

export async function getFiles() {
	let { data, error } = await supabase.from('Images').select('*');

	if (error) {
		console.error(error);
		throw new Error('Files could not be loaded');
	}

	return data;
}

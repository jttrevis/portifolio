import { useSinglePrismicDocument } from '@prismicio/react';
import { RichText } from 'prismic-dom';

export const handleDocument = () => {
	const [document] = useSinglePrismicDocument('home');

	if (!document?.data) return null;

	const data = document?.data;
	const content = {
		greeting_text: RichText.asText(data.greeting_text),
		name: RichText.asText(data.title_name),
		job: RichText.asText(data.job),
		userPhoto: data.user_photo.url,
		aboutText: RichText.asText(data.about_text),
		aboutText2: RichText.asText(data.about_text_2),
	};

	return content;
};

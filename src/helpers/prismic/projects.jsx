// import { usePrismicQuery } from '@prismicio/react';
// import { RichText } from 'prismic-dom';

// export const handleDocument = () => {
// 	const response = usePrismicQuery(`
// 		query {
// 			projects {
// 				edges {
// 					node {
// 						project_name
// 						project_image
// 						project_description

// 					}
// 				}
// 			}
// 		}
// 	`);

// 	if (!response) return null;

// 	const projects = response.projects.edges.map(({ node: project }) => {
// 		const data = project;
// 		const content = {
// 			projectName: RichText.asText(data.project_name),
// 			userPhoto: data.project_image.url,
// 			projectDescription: RichText.asText(data.project_description),
// 		};

// 		return content;
// 	});

// 	return projects;
// };

import React from 'react';
import CV from '../../assets/cv.pdf';
import { Link as Scroll } from 'react-scroll';

import './styles.scss';
import { handleDocument } from './../../helpers/prismic/home';

export const Header = () => {
	const data = handleDocument();

	if (!data) return null;
	return (
		<header id="header" className="header-container">
			<section className="header-text">
				<h3>{data.greeting_text}</h3>
				<h1 className="focus-in-expand">{data.name}</h1>
				<h3>{data.job}</h3>
			</section>
			<section className="header-buttons">
				<a href={CV} download className="button-cv">
					Download CV
				</a>
				<Scroll
					spy={true}
					smooth={true}
					duration={600}
					to="contact"
					className="button-lts"
				>
					Let's talk
				</Scroll>
			</section>
		</header>
	);
};

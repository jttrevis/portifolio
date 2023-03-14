import React from 'react';
import CV from '../../assets/cv.pdf';
import { Link as Scroll } from 'react-scroll';
import dwn from '../../assets/logos/dwn.svg';
import chat from '../../assets/logos/chat.svg';

import './styles.scss';
import { handleDocument } from './../../helpers/prismic/home';
import Button from './../Button/Button';

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
				<Button icon={dwn} href={CV}>
					Download CV
				</Button>
				<Scroll spy={true} smooth={true} duration={600} to="contact">
					<Button icon={chat}>Let's talk</Button>
				</Scroll>
			</section>
		</header>
	);
};

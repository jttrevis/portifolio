import React from 'react';
import CV from '../../assets/cv.pdf';
import { Link as Scroll } from 'react-scroll';
import dwn from '../../assets/logos/dwn.svg';
import chat from '../../assets/logos/chat.svg';

import './styles.scss';

import Button from './../Button/Button';

export const Header = () => {
	

	
	return (
		<header id="header" className="header-container">
			<section className="header-text">
				<h3>Hello, I'm</h3>
				<h1 className="focus-in-expand">Junior Trevisol</h1>
				<h3>Front-end developer</h3>
			</section>
			<section className="header-buttons">
				<Scroll spy={true} smooth={true} duration={600} to="contact">
					<Button icon={chat}>Let's talk</Button>
				</Scroll>
				<Button icon={dwn} href={CV} >
					Resume
				</Button>
			</section>
		</header>
	);
};

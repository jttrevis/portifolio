import React from 'react';
import CV from '../../assets/cv.pdf';
import { Link as Scroll } from 'react-scroll';
import dwn from '../../assets/logos/dwn.svg';
import chat from '../../assets/logos/chat.svg';

import './styles.scss';

import Button from './../Button/Button';
import { Chats, FileArrowDown } from '@phosphor-icons/react';

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
					<Button >Let's talk
					<Chats size={25} />
					
					</Button>
				</Scroll>
				<Button  href={CV} >
					Resume
					<FileArrowDown size={25} />
				</Button>
			</section>
		</header>
	);
};

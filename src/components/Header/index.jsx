import React from 'react';

import { Link as Scroll } from 'react-scroll';


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
				<Button  href={'https://docs.google.com/document/d/1qqdDRTsNdbk5tgQZcgdL2bSLgCWvQsrtMaltn9w7V2w/edit'} >
					Resume
					<FileArrowDown size={25} />
				</Button>
			</section>
		</header>
	);
};

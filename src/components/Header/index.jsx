import React from 'react';
import CV from '../../assets/cv.pdf';
import { AiOutlineDownload } from 'react-icons/Ai';

import './styles.scss';
export const Header = () => {
	return (
		<header
			id='header'
			className='header-container'
		>
			<section className='header-text'>
				<h3>Hello, I'm</h3>
				<h1>Junior C. Trevisol</h1>
				<h3>Web Developer</h3>
			</section>
			<section className='header-buttons'>
				<a
					href={CV}
					download
					className='button-cv'
				>
					Download CV
					<AiOutlineDownload size={25} />
				</a>
				<a
					href='#contact'
					className='button-lts'
				>
					Let's Talk
				</a>
			</section>
		</header>
	);
};

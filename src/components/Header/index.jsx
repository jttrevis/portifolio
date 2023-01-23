import React from 'react';
import './styles.scss';
export const Header = () => {
	return (
		<header className='header-container'>
			<section className='header-text'>
				<h3>Hello, I'm</h3>
				<h1>Junior C. Trevisol</h1>
			</section>
			<section className='header-buttons'>
				<button className='button-cv'>Download CV</button>
				<button className='button-lts'>Let's Talk</button>
			</section>
		</header>
	);
};

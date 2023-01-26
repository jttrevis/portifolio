import React from 'react';
import './styles.scss';
import { AiOutlineCopyrightCircle } from 'react-icons/Ai';
import { Link as Scroll } from 'react-scroll';
import { Social } from './../Social/index';
export const Footer = () => {
	return (
		<footer>
			<section>
				<div>
					<h1>Jr.Trevisol</h1>
				</div>
				<div className='footer-links'>
					<Scroll
						spy={true}
						smooth={true}
						duration={600}
						to='header'
					>
						Home
					</Scroll>
					<Scroll
						spy={true}
						smooth={true}
						duration={600}
						to='about'
					>
						About
					</Scroll>
					<Scroll
						spy={true}
						smooth={true}
						duration={600}
						to='projects'
					>
						Projects
					</Scroll>
					<Scroll
						spy={true}
						smooth={true}
						duration={600}
						to='skills'
					>
						Skills
					</Scroll>
					<Scroll
						spy={true}
						smooth={true}
						duration={600}
						to='contact'
					>
						Contact
					</Scroll>
				</div>
				<div>
					<Social />
				</div>
				<div>
					<span>
						<AiOutlineCopyrightCircle />
						JR.TREVIS Web Developer.All rights reserved.
					</span>
				</div>
			</section>
		</footer>
	);
};

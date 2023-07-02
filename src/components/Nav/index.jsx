import './styles.scss';

import homeLogo from '../../assets/logos/home.svg';
import aboutLogo from '../../assets/logos/about.svg';
import projectLogo from '../../assets/logos/project.svg';
import contactLogo from '../../assets/logos/contact.svg';

import { Link as Scroll } from 'react-scroll';
import { AddressBook, Barbell, House, Info } from '@phosphor-icons/react';
export const Nav = () => {
	return (
		<nav className="nav">
			<Scroll spy={true} smooth={true} duration={600} to="header">
				
				<House size={25} />
			</Scroll>
			<Scroll spy={true} smooth={true} duration={600} to="about">
				
				<Info size={25} />
			</Scroll>
			<Scroll spy={true} smooth={true} duration={600} to="projects">
			<Barbell size={25} />
			</Scroll>
			<Scroll spy={true} smooth={true} duration={600} to="contact">
			<AddressBook size={25} />
			</Scroll>
		</nav>
	);
};

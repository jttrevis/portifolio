import './styles.scss';

import homeLogo from '../../assets/logos/home.svg';
import aboutLogo from '../../assets/logos/about.svg';
import projectLogo from '../../assets/logos/project.svg';
import contactLogo from '../../assets/logos/contact.svg';

import { Link as Scroll } from 'react-scroll';
export const Nav = () => {
	return (
		<nav className="nav">
			<Scroll spy={true} smooth={true} duration={600} to="header">
				<img src={homeLogo} alt="" />
			</Scroll>
			<Scroll spy={true} smooth={true} duration={600} to="about">
				<img src={aboutLogo} alt="" />
			</Scroll>
			<Scroll spy={true} smooth={true} duration={600} to="projects">
				<img src={projectLogo} alt="" />
			</Scroll>
			<Scroll spy={true} smooth={true} duration={600} to="contact">
				<img src={contactLogo} alt="" />
			</Scroll>
		</nav>
	);
};

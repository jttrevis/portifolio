import React from 'react';
import photo from '../../assets/euFigma.png';
import './styles.scss';
import { Social } from './../Social/index';
import { Link as Scroll } from 'react-scroll';
import { InViewSection } from './../InViewSection/index';
import { handleDocument } from '../../helpers/prismic/home';

export const About = () => {
	const data = handleDocument();
	if (!data) return null;
	return (
		<div id="about" className="about-container">
			<div className="container">
				<div className="photo-container">
					<h1 className="bgAbout">ABOUT</h1>
					<Scroll
						className="scroll-down"
						spy={true}
						smooth={true}
						duration={600}
						to="contact"
					>
						Scroll Down
					</Scroll>
					<img className="photo" src={photo} alt="" />
					<Social />
				</div>

				<InViewSection>
					<div className="text">
						My name is Junior Trevisol and I am a{' '}
						<strong>Front-end developer</strong> with a passion for creating
						visually appealing and user-friendly websites. I have experience
						working with a variety of technologies, including{' '}
						<strong>
							ReactJS, Javascript, HTML, CSS, SASS, Styled-Components, and
							TailwindCSS.
						</strong>{' '}
						I am also well-versed in <strong>Git and Github</strong>, allowing
						me to effectively collaborate and manage my code. Let's work
						together to bring your website to the next level!
					</div>
				</InViewSection>
			</div>
		</div>
	);
};

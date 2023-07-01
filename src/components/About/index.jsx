import React from 'react';
import photo from '../../assets/euFigma.png';
import './styles.scss';
import { Social } from '../Social/index';
import { Link as Scroll } from 'react-scroll';
import { InViewSection } from '../InViewSection/index';


export const About = () => {
	
	
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
						<p>I am passionate about technology and am always dedicated to keeping up to date with the latest trends and advancements.</p>
						<p>In my spare time, when I'm not working on my projects, I enjoy the world of astronomy, games and cinema. Exploring the mysteries of the universe, immersing yourself in exciting gaming experiences, and immersing yourself in captivating cinematic journeys brings me joy and inspiration.</p>

						<p>I have an insatiable curiosity and thirst for knowledge, constantly looking for learning opportunities and personal and professional growth. I thrive in dynamic environments that challenge me and provide avenues for continued development.</p>
					</div>
				</InViewSection>
			</div>
		</div>
	);
};

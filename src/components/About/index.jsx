import React from 'react';
import { ParallaxText } from '../ParallaxText';
import './styles.scss';
import { Social } from './../Social/index';
import { Link as Scroll } from 'react-scroll';
import { InVeiwSection } from './../InViewSection/index';

export const About = () => {
	return (
		<div
			id='about'
			className='about-container'
		>
			<div className='container'>
				<div className='photo-container'>
					<Scroll
						className='scroll-down'
						spy={true}
						smooth={true}
						duration={600}
						to='contact'
					>
						Scroll Down
					</Scroll>
					<img
						className='photo'
						src='images/eu.png'
						alt=''
					/>
					<Social />
				</div>

				<p>
					Hello! My name is Junior Trevisol and I am a Junior Front-end
					Developer with a passion for creating visually appealing and
					user-friendly websites. I have experience working with a variety of
					technologies, including ReactJS, Javascript, HTML, CSS, SASS,
					Styled-Components, and TailwindCSS. I am also well-versed in Git and
					Github, allowing me to effectively collaborate and manage my code.
					Let's work together to bring your website to the next level!
				</p>
				<p>
					In addition to my technical skills, I am a dedicated and eager
					learner. I have a strong passion for web development and enjoy staying
					up to date with the latest technologies and trends in the field. I
					believe in continuously learning and growing as a developer, and am
					excited to take on new challenges and expand my skillset. Whether it's
					working on a new project or discovering a new tool, I am always eager
					to learn and improve.
				</p>
			</div>
			<div>
				<ParallaxText baseVelocity={-12}>
					html css styled-component
				</ParallaxText>
				<ParallaxText baseVelocity={25}>sass react-js</ParallaxText>
				<ParallaxText baseVelocity={-19}>javascript github</ParallaxText>
			</div>
		</div>
	);
};

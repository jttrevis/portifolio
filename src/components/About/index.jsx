import React from 'react';
import { ParallaxText } from '../ParallaxText';
import './styles.scss';
import { Social } from './../Social/index';
import { Link as Scroll } from 'react-scroll';
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
						src='images/eu.png'
						alt=''
					/>
					<Social />
				</div>

				<p>
					Hello, my name is Junior Cesar Trevisol and I am a junior web
					developer. I specialize in creating responsive websites using
					technologies such as HTML, CSS, Sass, Styled Components, TailwindCSS,
					JavaScript, and ReactJS. I am also proficient in Git/Github, which
					allows me to easily manage and collaborate on projects.
				</p>
				<p>
					As a self-taught developer, I have a passion for creating dynamic and
					engaging websites. I am always eager to learn new technologies and
					skills and have experience in both front-end and back-end development.
					My strong attention to detail and quick learning ability allows me to
					create high-quality websites that are both visually appealing and easy
					to use.
				</p>
				<p>
					I have a portfolio of websites I have built, including [examples of
					your work], that showcases my skills and abilities. I am always
					looking for new opportunities to learn and grow as a developer. I am
					available for freelance projects and am open to new job opportunities
					as a Junior web developer. If you are in need of a web developer or
					have any questions about my work, please don't hesitate to contact me.
					Thank you for visiting my website!
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

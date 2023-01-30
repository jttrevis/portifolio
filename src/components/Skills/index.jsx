import React from 'react';
import './styles.scss';

import htmlLogo from '../../assets/logos/html.png';
import cssLogo from '../../assets/logos/css.png';
import sassLogo from '../../assets/logos/sass.png';
import jsLogo from '../../assets/logos/js.png';
import gitLogo from '../../assets/logos/git.png';
import githubLogo from '../../assets/logos/github.png';
import reactLogo from '../../assets/logos/react.png';
import tailLogo from '../../assets/logos/tail.png';
import { ParallaxText } from '../../components/ParallaxText/index';

export const Skills = () => {
	return (
		<>
			<div>
				<ParallaxText baseVelocity={20}>REACT JAVASCRIPT</ParallaxText>
				<ParallaxText baseVelocity={-19}>
					CSS SASS STYLED-COMPONENT TAILWIND
				</ParallaxText>
			</div>
			<div className='skillsContainer'>
				<h1>Skills</h1>
				<div className='carrosel'>
					<div className='caixa__card cc__1 '>
						<img
							src={htmlLogo}
							alt=''
						/>
					</div>
					<div className='caixa__card cc__2 '>
						<img
							src={cssLogo}
							alt=''
						/>
					</div>
					<div className='caixa__card cc__3 '>
						<img
							src={sassLogo}
							alt=''
						/>
					</div>
					<div className='caixa__card cc__4 '>
						<img
							src={jsLogo}
							alt=''
						/>
					</div>
					<div className='caixa__card cc__5 '>
						<img
							src={githubLogo}
							alt=''
						/>
					</div>
					<div className='caixa__card cc__6 '>
						<img
							src={gitLogo}
							alt=''
						/>
					</div>
					<div className='caixa__card cc__7 '>
						<img
							src={reactLogo}
							alt=''
						/>
					</div>
					<div className='caixa__card cc__8 '>
						<img
							src={tailLogo}
							alt=''
						/>
					</div>
				</div>
			</div>
			<ParallaxText baseVelocity={-12}> GIT GITHUB</ParallaxText>
			<ParallaxText baseVelocity={25}>HTML5 MOBILE FIRST </ParallaxText>
		</>
	);
};

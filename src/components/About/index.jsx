import React from 'react';
import { ParallaxText } from '../ParallaxText';
import './styles.scss';
export const About = () => {
	return (
		<div className='container'>
			<ParallaxText baseVelocity={-12}>html css styled-component</ParallaxText>
			<ParallaxText baseVelocity={25}>sass react-js</ParallaxText>
			<ParallaxText baseVelocity={-19}>javascript github</ParallaxText>
			About
		</div>
	);
};

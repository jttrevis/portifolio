import React from 'react';

import './styles.scss';
import { Social } from './../Social/index';
import { Link as Scroll } from 'react-scroll';
import { InViewSection } from './../InViewSection/index';
import { handleDocument } from '../../helpers/prismic/home';

export const About = () => {
	const data = handleDocument();
	if (!data) return null;
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
						src={data.userPhoto}
						alt=''
					/>
					<Social />
				</div>

				<InViewSection>{data.aboutText}</InViewSection>
				<InViewSection>{data.aboutText2}</InViewSection>
			</div>
		</div>
	);
};

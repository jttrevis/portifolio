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

export const Skills = () => {
	return (
		<section
			id='skills'
			className='container-skills'
		>
			<h1>Skills</h1>
			<div>
				<article className='cards-container'>
					<div class='skills'>
						<span>
							<img
								src={htmlLogo}
								alt='html logo'
							/>{' '}
							HTML5{' '}
						</span>
						<span>
							<img
								src={cssLogo}
								alt='css logo'
							/>{' '}
							CSS3{' '}
						</span>
						<span>
							<img
								src={sassLogo}
								alt='sass logo'
							/>{' '}
							SASS{' '}
						</span>
						<span>
							<img
								src={tailLogo}
								alt='tailwind logo'
							/>{' '}
							TailWind{' '}
						</span>
						<span>
							<img
								src={reactLogo}
								alt='react logo'
							/>{' '}
							React Js
						</span>
						<span>
							<img
								src={jsLogo}
								alt='Javascript logo'
							/>{' '}
							Javascript
						</span>
						<span>
							<img
								src={githubLogo}
								alt='github logo'
							/>{' '}
							GitHub
						</span>
						<span>
							<img
								src={gitLogo}
								alt='git logo'
							/>{' '}
							Git
						</span>
					</div>
				</article>
			</div>
		</section>
	);
};

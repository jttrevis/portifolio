import React from 'react';
import './styles.scss';
import gitLogo from '../../assets/logos/github.png';
import screenLogo from '../../assets/logos/screen.svg';
import pizzaria from '../../assets/portifolioImages/pizzariaSite.jpg';
import djSite from '../../assets/portifolioImages/djSite.jpg';
import vetClinic from '../../assets/portifolioImages/vetClinic.jpg';

export const CardProjects = () => {
	return (
		<>
			<div
				id='projects'
				className='sectionTitle'
			>
				<h5>My Recents Work</h5>
				<h1>Portfolio</h1>
			</div>
			<div className='projectContainer'>
				<div className='cardRotation'>
					<div className='cardRotationContent '>
						<div className='cardContentFront'>
							<img
								src={pizzaria}
								alt='Pizzaria Website'
								className='logo'
							/>
						</div>
						<div className='cardContentBack'>
							<div className='cardBackText'>
								<p>
									<h3>About:</h3>
									This project simulates a Pizzeria website, where you can
									choose between different product options.
								</p>
								<ul>
									<h3>Features:</h3>
									<li>Navigate through the navbar on multiple pages.</li>
									<li>
										Add and remove different types of products on cart shop
									</li>
									<li>Check the localization on Google Maps.</li>
								</ul>

								<ul>
									<h3>Technology:</h3>
									<li>HTML </li>
									<li>CSS</li>
									<li>Material UI</li>
									<li>Styled Components</li>
									<li>JavaScript</li>
									<li>React JS</li>
								</ul>
								<p>
									<h3>Deploy:</h3>
									Vercel
								</p>
							</div>
							<div>
								<div className='buttons'>
									<a
										target='_blank'
										href='https://pizzaria-trevisol.vercel.app/'
									>
										<span className='ButtonText'>
											Demo
											<img
												className='logo'
												src={screenLogo}
												alt=''
											/>
										</span>
									</a>
									<a
										target='_blank'
										href='https://github.com/jttrevis/pizzaria'
									>
										<span className='ButtonText'>
											Github
											<img
												className='logo'
												src={gitLogo}
												alt=''
											/>
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='cardRotation'>
					<div className='cardRotationContent '>
						<div className='cardContentFront'>
							<img
								src={vetClinic}
								alt='Vet CLinic'
							/>
						</div>
						<div className='cardContentBack'>
							<div className='cardBackText'>
								<p>
									<h3>About:</h3>
									The project is a responsive veterinary clinic website that has
									been designed with a mobile-first approach.
								</p>
								<p>
									The website features sections for information about the
									clinic, services offered, and the ability to schedule
									appointments. Users can even register and their data is
									directly saved to Firebase for easy accessibility. The styling
									of the website was done using Tailwind CSS which provides a
									sleek and modern look.
								</p>
								<ul>
									<h3>Technology:</h3>
									<li>HTML </li>
									<li>Firebase</li>
									<li>Tailwind CSS</li>
									<li>Email Js</li>
									<li>JavaScript</li>
									<li>React JS</li>
								</ul>
								<p>
									<h3>Deploy:</h3>
									Vercel
								</p>
							</div>
							<div>
								<div className='buttons'>
									<a
										target='_blank'
										href='https://vetclinic-one.vercel.app/'
									>
										<span className='ButtonText'>
											Demo
											<img
												className='logo'
												src={screenLogo}
												alt=''
											/>
										</span>
									</a>
									<a
										target='_blank'
										href='https://github.com/jttrevis/PatunfasVet'
									>
										<span className='ButtonText'>
											Github
											<img
												className='logo'
												src={gitLogo}
												alt=''
											/>
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='cardRotation'>
					<div className='cardRotationContent '>
						<div className='cardContentFront'>
							<img
								src={djSite}
								alt='dj Beto'
							/>
						</div>
						<div className='cardContentBack'>
							<div className='cardBackText'>
								<p>
									<h3>About:</h3>
									This project i build using mobile first method for my brother
									in Brazil to use in your business working as DJ.
								</p>
								<ul>
									<h3>Features:</h3>
									<li>Navigate through the navbar on multiple pages.</li>
									<li>Contact through the website by email and social media</li>
									<li>Image and Videos gallery.</li>
								</ul>

								<ul>
									<h3>Technology:</h3>
									<li>HTML</li>
									<li>Email Js</li>
									<li>SASS</li>
									<li>JavaScript</li>
									<li>React JS</li>
								</ul>
								<p>
									<h3>Deploy:</h3>
									Vercel
								</p>
							</div>
							<div>
								<div className='buttons'>
									<a
										target='_blank'
										href='https://djbeto.vercel.app/'
									>
										<span className='ButtonText'>
											Demo
											<img
												className='logo'
												src={screenLogo}
												alt=''
											/>
										</span>
									</a>
									<a
										target='_blank'
										href='https://github.com/jttrevis/discoteca'
									>
										<span className='ButtonText'>
											Github
											<img
												className='logo'
												src={gitLogo}
												alt=''
											/>
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

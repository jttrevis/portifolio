import React, { useState } from 'react';
import './styles.scss';
import gitLogo from '../../assets/logos/github.png';
import screenLogo from '../../assets/logos/screen.svg';
import pizzaria from '../../assets/portifolioImages/pizzariaSite.jpg';
import djSite from '../../assets/portifolioImages/djSite.jpg';
import vetClinic from '../../assets/portifolioImages/vetClinic.jpg';

export const CardProjects = () => {
	return (
		<>
			<div id="projects" className="sectionTitle">
				<h5>My Recents Work</h5>
				<h1>Portfolio</h1>
			</div>
			<div className="projectContainer">
				<div className="cardRotation">
					<div className="cardRotationContent ">
						<div className="cardContentFront">
							<img src={pizzaria} alt="Pizzaria Website" className="logo" />
						</div>
						<div className="cardContentBack">
							<div className="cardBackText">
								<p>
									<h3>About: Pizzaria "E-commerce"</h3>
									This project simulates a Pizzaria website, where you can
									choose between different product options. this application has
									a admin area where you can add/edit/remove products
								</p>

								<h3>Technology:</h3>
								<p>ReactJS | ContextAPI | Styled Components | Prismic CMS |</p>
								<p>
									<p>Deploy: Vercel</p>
								</p>
							</div>
							<div>
								<div className="buttons">
									<a
										target="_blank"
										href="https://pizzaria-trevisol.vercel.app/"
									>
										<span className="ButtonText">
											Demo
											<img className="logo" src={screenLogo} alt="" />
										</span>
									</a>
									<a
										target="_blank"
										href="https://github.com/jttrevis/pizzaria"
									>
										<span className="ButtonText">
											Github
											<img className="logo" src={gitLogo} alt="" />
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="cardRotation">
					<div className="cardRotationContent ">
						<div className="cardContentFront">
							<img src={vetClinic} alt="Vet CLinic" />
						</div>
						<div className="cardContentBack">
							<div className="cardBackText">
								<p>
									<h3>About: "Veterinary Clinic"</h3>
									The project is a responsive veterinary clinic website that has
									been designed with a mobile-first approach. Users can even
									register and their data is directly saved to Firebase for easy
									accessibility. The styling of the website was done using
									Tailwind CSS which provides a sleek and modern look.
								</p>
								<h3>Technology:</h3>
								<p>
									HTML | Firebase | Tailwind | EmailJs | JavaScript | ReactJS
								</p>
								<p>Deploy: Vercel</p>
							</div>
							<div>
								<div className="buttons">
									<a target="_blank" href="https://vetclinic-one.vercel.app/">
										<span className="ButtonText">
											Demo
											<img className="logo" src={screenLogo} alt="" />
										</span>
									</a>
									<a
										target="_blank"
										href="https://github.com/jttrevis/PatunfasVet"
									>
										<span className="ButtonText">
											Github
											<img className="logo" src={gitLogo} alt="" />
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="cardRotation">
					<div className="cardRotationContent ">
						<div className="cardContentFront">
							<img src={djSite} alt="dj Beto" />
						</div>
						<div className="cardContentBack">
							<div className="cardBackText">
								<p>
									<h3>About: "institutional website"</h3>
									This project i build using mobile first method for my brother
									in Brazil to use in your business working as DJ.
								</p>

								<h3>Technology:</h3>
								<p>HTML | SASS | EmailJs | JavaScript | ReactJS</p>

								<p>Deploy: Vercel</p>
							</div>
							<div>
								<div className="buttons">
									<a target="_blank" href="https://djbeto.vercel.app/">
										<span className="ButtonText">
											Demo
											<img className="logo" src={screenLogo} alt="" />
										</span>
									</a>
									<a
										target="_blank"
										href="https://github.com/jttrevis/discoteca"
									>
										<span className="ButtonText">
											Github
											<img className="logo" src={gitLogo} alt="" />
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

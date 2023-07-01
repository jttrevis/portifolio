import React from 'react';
import gitLogo from '../../assets/logos/github.png';
import screenLogo from '../../assets/logos/screen.svg';
import pizzaria from '../../assets/portifolioImages/pizza.png';
import kabab from '../../assets/portifolioImages/kebab.png';
import djSite from '../../assets/portifolioImages/dj.png';
import vetClinic from '../../assets/portifolioImages/vet.png';
import hatStore from '../../assets/portifolioImages/hatStore.png';
import golePage from '../../assets/portifolioImages/drink.png';
import './styles.scss';
import Button from '../Button/Button';
import { InViewSection, InViewSection2 } from '../InViewSection';
const Projects = () => {
	return (
		<div className="projectContainer">
			<div id="projects" className="title">
				<h5>My Recents Work</h5>
				<h1>Portfolio</h1>
			</div>
			<InViewSection2>
				<div className="projectContent">
					<div className="projectInfo">
						<h3>About: "Hat Store E-Commercer"</h3>
						<p>
							Hat Store is a fully functional e-commerce website built using
							React, Sass, Framer Motion, and React Bootstrap. The website is
							designed to offer an easy and seamless shopping experience for hat
							lovers, allowing them to browse through a wide range of hat
							styles, colors, and sizes.
						</p>
						<h3>Features:</h3>
						<p>
							<strong>Product Catalogue:</strong> Users can browse through a
							vast selection of hats and filter them by brand and color.
						</p>
						<p>
							<strong> Product Details: </strong>Users can view detailed
							information about each hat, including its price, description, and
							images.
						</p>
						<p>
							<strong>Responsive Design:</strong> The website is fully
							responsive, ensuring that it looks great on any device.
						</p>
						<p>
							<strong>Shopping Cart:</strong> Users can add hats to their
							shopping carts and make purchases. The cart includes a shipping
							price of $15. If the costumer buys more than $100, the shipping is
							free.
						</p>
						<h3>Technology:</h3>
						<p>React | Sass | Framer Motion | React Bootstrap | HTML </p>
						<p>Deploy: Vercel</p>
						<div className="buttons">
							<Button icon={screenLogo} href={'https://hat-store.vercel.app/'}>
								Demo
							</Button>
							<Button
								icon={gitLogo}
								href={'https://github.com/jttrevis/HatMart'}
							>
								Github
							</Button>
						</div>
					</div>
					<div className="projectImage">
						<img src={hatStore} alt="" />
					</div>
				</div>
			</InViewSection2>

			<InViewSection>
				<div className="projectContent">
					<div className="projectImage">
						<img src={pizzaria} alt="" />
					</div>

					<div className="projectInfo">
						<h3>About: Pizzaria "E-commerce"</h3>
						<p>
							This project simulates a Pizzaria website, where you can choose
							between different product options. this application has a admin
							area where you can add/edit/remove products
						</p>
						<h3>Technology:</h3>
						<p>ReactJS | ContextAPI | Styled Components | Prismic CMS |</p>
						<p>Deploy: Vercel</p>
						<div className="buttons">
							<Button
								icon={screenLogo}
								href={'https://pizzaria-trevisol.vercel.app/'}
							>
								Demo
							</Button>
							<Button
								icon={gitLogo}
								href={'https://github.com/jttrevis/pizzaria'}
							>
								Github
							</Button>
						</div>
					</div>
				</div>
			</InViewSection>
			<InViewSection2>
				<div className="projectContent">
					<div className="projectInfo">
						<h3>About: "Veterinary Clinic"</h3>
						<p>
							The project is a responsive veterinary clinic website that has
							been designed with a mobile-first approach. Users can even
							register and their data is directly saved to Firebase for easy
							accessibility. The styling of the website was done using Tailwind
							CSS which provides a sleek and modern look.
						</p>
						<h3>Technology:</h3>
						<p>HTML | Firebase | Tailwind | EmailJs | JavaScript | ReactJS</p>
						<p>Deploy: Vercel</p>
						<div className="buttons">
							<Button
								icon={screenLogo}
								href={'https://veterinary-ruby.vercel.app/'}
							>
								Demo
							</Button>
							<Button
								icon={gitLogo}
								href={'https://github.com/jttrevis/PatunfasVet'}
							>
								Github
							</Button>
						</div>
					</div>
					<div className="projectImage">
						<img src={vetClinic} alt="" />
					</div>
				</div>
			</InViewSection2>
			<InViewSection>
				<div className="projectContent">
					<div className="projectImage">
						<img src={kabab} alt="" />
					</div>

					<div className="projectInfo">
						<h3>About: "GreekBite Restaurant"</h3>
						<p>
						Greek Bites is an online menu for a local business. It features a home page, about, menu, special offers, location and contact. The owner can easily maintain the business menu updated by adding, removing or editing the menu through a CMS (Sanity.io), which include change of names, prices, descriptions, ingredients and more. There is also static menu featuring all the options from the restaurant.

						<p className='guest'>This project was made in partnership with my friend <a target='_blank' href="https://www.alanceratti.com/">Alan Ceratti</a>.</p>
						</p>
						<h3>Technology:</h3>
						<p>HTML5 | Tailwind | JavaScript | Next.js 13</p>
						<p>Deploy: Vercel</p>
						<div className="buttons">
							<Button icon={screenLogo} href={'https://kebab2.vercel.app/'}>
								Demo
							</Button>
							<Button
								icon={gitLogo}
								href={'https://github.com/alanrceratti/kebab2'}
							>
								Github
							</Button>
						</div>
					</div>
				</div>
			</InViewSection>

			<InViewSection2>
				<div className="projectContent">
					<div className="projectInfo">
						<h3>About: "institutional website"</h3>
						<p>
							This project i build using mobile first method for my brother in
							Brazil to use in your business working as DJ.
						</p>
						<h3>Technology:</h3>
						<p>HTML | SASS | EmailJs | JavaScript | ReactJS</p>
						<p>Deploy: Vercel</p>
						<div className="buttons">
							<Button icon={screenLogo} href={'https://djbeto.vercel.app/'}>
								Demo
							</Button>
							<Button
								icon={gitLogo}
								href={'https://github.com/jttrevis/discoteca'}
							>
								Github
							</Button>
						</div>
					</div>
					<div className="projectImage">
						<img src={djSite} alt="" />
					</div>
				</div>
			</InViewSection2>
			<InViewSection>
				<div className="projectContent">
					<div className="projectImage">
						<img src={golePage} alt="" />
					</div>

					<div className="projectInfo">
						<h3>About: "Cocktails Website"</h3>
						<p>
							The project is a responsive Cocktails website where you can find
							your favorite cocktail from over 600 cocktails. On this website I
							improved my knowledge about Rest API consumption by simulating
							several requests directly to an external API.
						</p>
						<h3>Technology:</h3>
						<p>ReactJS | SASS | Axios | JavaScript | Framer Motion</p>
						<p>Deploy: Vercel</p>
						<div className="buttons">
							<Button
								icon={screenLogo}
								href={'https://gole-4agimhppi-jttrevis.vercel.app/'}
							>
								Demo
							</Button>
							<Button icon={gitLogo} href={'https://github.com/jttrevis/gole'}>
								Github
							</Button>
						</div>
					</div>
				</div>
			</InViewSection>

		</div>
	);
};

export default Projects;

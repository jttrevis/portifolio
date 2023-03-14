import React from 'react';
import gitLogo from '../../assets/logos/github.png';
import screenLogo from '../../assets/logos/screen.svg';
import pizzaria from '../../assets/portifolioImages/pizza.png';
import portfolio from '../../assets/portifolioImages/port.png';
import djSite from '../../assets/portifolioImages/dj.png';
import vetClinic from '../../assets/portifolioImages/vet.png';
import golePage from '../../assets/portifolioImages/drink.png';
import './styles.scss';
import Button from '../Button/Button';
const Projects = () => {
	return (
		<div className="projectContainer">
			<div id="projects" className="title">
				<h5>My Recents Work</h5>
				<h1>Portfolio</h1>
			</div>

			<div className="projectContent">
				<div className="projectImage">
					<img src={pizzaria} alt="" />
				</div>

				<div className="projectInfo">
					<h3>About: Pizzaria "E-commerce"</h3>
					<p>
						This project simulates a Pizzaria website, where you can choose
						between different product options. this application has a admin area
						where you can add/edit/remove products
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

			<div className="projectContent">
				<div className="projectInfo">
					<h3>About: "Veterinary Clinic"</h3>
					<p>
						The project is a responsive veterinary clinic website that has been
						designed with a mobile-first approach. Users can even register and
						their data is directly saved to Firebase for easy accessibility. The
						styling of the website was done using Tailwind CSS which provides a
						sleek and modern look.
					</p>
					<h3>Technology:</h3>
					<p>HTML | Firebase | Tailwind | EmailJs | JavaScript | ReactJS</p>
					<p>Deploy: Vercel</p>
					<div className="buttons">
						<Button
							icon={screenLogo}
							href={'https://vetclinic-one.vercel.app/'}
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

			<div className="projectContent">
				<div className="projectImage">
					<img src={portfolio} alt="" />
				</div>

				<div className="projectInfo">
					<h3>About: "My Portfolio"</h3>
					<p>
						My portfolio where you can find out more about me and see my
						projects that I'm working on and projects that I've completed.
					</p>
					<h3>Technology:</h3>
					<p>ReactJS | SASS | HTML | JavaScript | Framer Motion</p>
					<p>Deploy: Vercel</p>
					<div className="buttons">
						<Button icon={screenLogo} href={'https://juniortrevisol.com'}>
							Demo
						</Button>
						<Button
							icon={gitLogo}
							href={'https://github.com/jttrevis/portifolio'}
						>
							Github
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;

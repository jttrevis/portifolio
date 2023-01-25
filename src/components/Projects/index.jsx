import './styles.scss';
import { FaGithub } from 'react-icons/Fa';
import { TbScreenShare } from 'react-icons/Tb';
import pizzaria from '../../assets/portifolioImages/pizzariaSite.png';
import djSite from '../../assets/portifolioImages/djSite.png';
import vetClinic from '../../assets/portifolioImages/vetClinic.png';

export const Projects = () => {
	return (
		<section
			id='projects'
			className='project-container'
		>
			<h5>My Recents Work</h5>
			<h1>Portifolio</h1>
			<div className='cards'>
				<div className='card'>
					<article className='project-content'>
						<div>
							<img
								src={pizzaria}
								alt='pizzaria'
							/>
						</div>
						<h3>Pizzaria Trevisol</h3>
						<div className='buttons'>
							<a
								target='_blank'
								href='https://pizzaria-trevisol.vercel.app/'
							>
								<span className='ButtonText'>
									Demo <TbScreenShare />
								</span>
							</a>
							<a
								target='_blank'
								href='https://github.com/jttrevis/pizzaria'
							>
								<span className='ButtonText'>
									Github <FaGithub />{' '}
								</span>
							</a>
						</div>
					</article>
				</div>

				<div className='card'>
					<article className='project-content'>
						<div>
							<img
								src={djSite}
								alt='dj Beto'
							/>
						</div>
						<h3>Dj.Beto</h3>
						<div className='buttons'>
							<a
								target='_blank'
								href='https://djbeto.vercel.app/'
							>
								<span className='ButtonText'>
									Demo <TbScreenShare />
								</span>
							</a>
							<a
								target='_blank'
								href='https://github.com/jttrevis/discoteca'
							>
								<span className='ButtonText'>
									Github <FaGithub />{' '}
								</span>
							</a>
						</div>
					</article>
				</div>

				<div className='card'>
					<article className='project-content'>
						<div>
							<img
								src={vetClinic}
								alt='Vet CLinic'
							/>
						</div>
						<h3>Pantufas Vet</h3>
						<div className='buttons'>
							<a
								target='_blank'
								href='https://vetclinic-one.vercel.app/'
							>
								<span className='ButtonText'>
									Demo <TbScreenShare />
								</span>
							</a>
							<a
								target='_blank'
								href='https://github.com/jttrevis/PatunfasVet'
							>
								<span className='ButtonText'>
									Github <FaGithub />{' '}
								</span>
							</a>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

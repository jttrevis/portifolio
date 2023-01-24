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
				<article className='project-content'>
					<div>
						<img
							src={pizzaria}
							alt=''
						/>
					</div>
					<h3>Pizzaria Trevisol</h3>
					<div className='buttons'>
						<a href=''>
							Demo <TbScreenShare />
						</a>
						<a href=''>
							Github <FaGithub />{' '}
						</a>
					</div>
				</article>

				<article className='project-content'>
					<div>
						<img
							src={djSite}
							alt=''
						/>
					</div>
					<h3>Dj.Beto</h3>
					<div className='buttons'>
						<a href=''>
							Demo <TbScreenShare />
						</a>
						<a href=''>
							Github <FaGithub />{' '}
						</a>
					</div>
				</article>

				<article className='project-content'>
					<div>
						<img
							src={vetClinic}
							alt=''
						/>
					</div>
					<h3>Pantufas Vet</h3>
					<div className='buttons'>
						<a href=''>
							Demo <TbScreenShare />
						</a>
						<a href=''>
							Github <FaGithub />{' '}
						</a>
					</div>
				</article>
			</div>
		</section>
	);
};

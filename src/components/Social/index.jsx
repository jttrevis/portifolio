import './styles.scss';
import { BsLinkedin, BsFacebook } from 'react-icons/Bs';
import { FaGithub } from 'react-icons/Fa';
export const Social = () => {
	return (
		<div className='header-social'>
			<a
				target='_blank'
				href='https://www.linkedin.com/in/jrtrevisol/'
			>
				<BsLinkedin size={25} />
			</a>
			<a
				target='_blank'
				href='https://www.linkedin.com/in/jrtrevisol/'
			>
				<FaGithub size={25} />
			</a>
			<a
				target='_blank'
				href='https://www.linkedin.com/in/jrtrevisol/'
			>
				<BsFacebook size={25} />
			</a>
		</div>
	);
};

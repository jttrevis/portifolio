import './styles.scss';

import linkedinLogo from '../../assets/logos/Link.svg';
import githubLogo from '../../assets/logos/git.svg';
import faceLogo from '../../assets/logos/fc.svg';
export const Social = () => {
	return (
		<div className='header-social'>
			<a
				target='_blank'
				href='https://www.linkedin.com/in/jrtrevisol/'
			>
				<img
					className='logoSvg'
					src={linkedinLogo}
					alt=''
				/>
			</a>
			<a
				target='_blank'
				href='https://github.com/jttrevis'
			>
				<img
					className='logoSvg'
					src={githubLogo}
					alt=''
				/>
			</a>
			<a
				target='_blank'
				href='https://www.facebook.com/junior.trevisol'
			>
				<img
					className='logoSvg'
					src={faceLogo}
					alt=''
				/>
			</a>
		</div>
	);
};

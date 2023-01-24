import './styles.scss';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/Ai';
import { RiComputerLine } from 'react-icons/Ri';
import { BiMessageRoundedAdd } from 'react-icons/Bi';
export const Nav = () => {
	return (
		<nav className='nav'>
			<a href='#'>
				<AiOutlineHome />
			</a>
			<a href='#about'>
				<AiOutlineUser />
			</a>
			<a href='#projects'>
				<RiComputerLine />
			</a>
			<a href='#contact'>
				<BiMessageRoundedAdd />
			</a>
		</nav>
	);
};

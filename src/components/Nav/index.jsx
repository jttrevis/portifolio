import './styles.scss';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/Ai';
import { RiComputerLine } from 'react-icons/Ri';
import { BiMessageRoundedAdd } from 'react-icons/Bi';
import { Link as Scroll } from 'react-scroll';
export const Nav = () => {
	return (
		<nav className='nav'>
			<Scroll
				spy={true}
				smooth={true}
				duration={600}
				to='header'
			>
				<AiOutlineHome />
			</Scroll>
			<Scroll
				spy={true}
				smooth={true}
				duration={600}
				to='about'
			>
				<AiOutlineUser />
			</Scroll>
			<Scroll
				spy={true}
				smooth={true}
				duration={600}
				to='projects'
			>
				<RiComputerLine />
			</Scroll>
			<Scroll
				spy={true}
				smooth={true}
				duration={600}
				to='contact'
			>
				<BiMessageRoundedAdd />
			</Scroll>
		</nav>
	);
};

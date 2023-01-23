import { Header } from './components/Header';
import { About } from './components/About/index';
import { Experencies } from './components/Experencies/index';
import { Projects } from './components/Projects/index';
import { Contact } from './components/Contact/index';
import { Nav } from './components/Nav';
import './App.css';
function App() {
	return (
		<div className='main'>
			<video
				src='images/videos/v5.mp4'
				autoPlay
				muted
				loop
			/>
			<div className='content'>
				<Header />
				<About />
				<Experencies />
				<Projects />
				<Contact />
				<Nav />
			</div>
		</div>
	);
}

export default App;

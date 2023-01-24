import { Header } from './components/Header';
import { About } from './components/About/index';

import { Projects } from './components/Projects/index';
import { Contact } from './components/Contact/index';
import { Nav } from './components/Nav';
import './App.css';
function App() {
	return (
		<div>
			<Header />
			<About />
			<Projects />
			<Contact />
			<Nav />
		</div>
	);
}

export default App;

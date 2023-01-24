import { Header } from './components/Header';
import { About } from './components/About/index';

import { Projects } from './components/Projects/index';
import { Contact } from './components/Contact/index';
import { Nav } from './components/Nav';
import './App.css';
import { Toaster } from 'react-hot-toast';
function App() {
	return (
		<div>
			<Header />
			<About />
			<Projects />
			<Contact />
			<Nav />
			<Toaster />
		</div>
	);
}

export default App;

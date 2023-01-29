import { Header } from './components/Header';
import { About } from './components/About/index';

import { Projects } from './components/Projects/index';
import { Contact } from './components/Contact/index';
import { Nav } from './components/Nav';

import { Toaster } from 'react-hot-toast';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { InVeiwSection } from './components/InViewSection/index';

function App() {
	return (
		<>
			<InVeiwSection>
				<Header />
			</InVeiwSection>

			<InVeiwSection>
				<About />
			</InVeiwSection>

			<InVeiwSection>
				<Projects />
			</InVeiwSection>
			<InVeiwSection>
				<Skills />
			</InVeiwSection>
			<InVeiwSection>
				<Contact />
			</InVeiwSection>
			<>
				<Footer />
			</>
			<Nav />
			<Toaster />
		</>
	);
}

export default App;

import { Header } from './components/Header';
import { About } from './components/About/index';

import { Contact } from './components/Contact/index';
import { Nav } from './components/Nav';

import { Toaster } from 'react-hot-toast';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { InVeiwSection } from './components/InViewSection/index';
import { CardProjects } from './components/CardsProjects/index';

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
				<CardProjects />
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

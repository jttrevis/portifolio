import { Header } from './components/Header';
import { About } from './components/About/index';

import { Contact } from './components/Contact/index';
import { Nav } from './components/Nav';

import { Toaster } from 'react-hot-toast';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { InViewSection } from './components/InViewSection/index';

import Projects from './components/Projects/Projects';

function App() {
	return (
		<>
			<InViewSection>
				<Header />
			</InViewSection>

			<InViewSection>
				<About />
			</InViewSection>

			<InViewSection>
				{/* <CardProjects /> */}
				<Projects />
			</InViewSection>
			<InViewSection>
				<Skills />
			</InViewSection>
			<InViewSection>
				<Contact />
			</InViewSection>
			<>
				<Footer />
			</>
			<Nav />
			<Toaster />
		</>
	);
}

export default App;

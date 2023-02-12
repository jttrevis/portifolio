import { PrismicProvider } from '@prismicio/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import client from './Services/prismic';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<PrismicProvider client={client}>
			<App />
		</PrismicProvider>
	</React.StrictMode>,
);

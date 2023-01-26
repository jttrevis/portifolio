import React, { useState } from 'react';

import faceLogo from '../../assets/logos/messe.svg';
import emailLogo from '../../assets/logos/email.svg';
import sendLogo from '../../assets/logos/send1.svg';
import whatsLogo from '../../assets/logos/whats.svg';

import { toast } from 'react-hot-toast';

import './styles.scss';
import emailjs from '@emailjs/browser';
export const Contact = () => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');

	function sendEmail(e) {
		e.preventDefault();

		if (name === '' || email === '' || message === '') {
			toast('Please fill in all fields!', {
				icon: '❌',
			});
			return;
		}
		const templateParams = {
			from_name: name,
			message: message,
			email: email,
		};
		emailjs
			.send(
				'service_65g07gf',
				'template_0m17578',
				templateParams,
				'HEYhtFGyfevobvic5',
			)
			.then(
				(response) => {
					toast('Email Sent! Thank You!', {
						icon: '✅',
					});
					setName('');
					setEmail('');
					setMessage('');
				},
				(err) => {
					toast('Error, Please try again.', {
						icon: '❌',
					});
				},
			);
	}

	return (
		<div
			id='contact'
			className='contact-container'
		>
			<div className='contact-content'>
				<div className='card'>
					<article>
						<img
							className='logo'
							src={emailLogo}
							alt=''
						/>
						<h3>Email</h3>
						<span>jr.trevis@hotmail.com</span>
						<a
							target='_blank'
							href='mailto:jr.trevis@hotmail.com'
						>
							Send a Email
						</a>
					</article>
				</div>

				<div className='card'>
					{' '}
					<article>
						<img
							className='logo'
							src={whatsLogo}
							alt=''
						/>
						<h3>WhatsApp</h3>
						<span>+44 07858363772</span>
						<a
							target='_blank'
							href='https://wa.me/+4407858363772'
						>
							Send a Message
						</a>
					</article>
				</div>

				<div className='card'>
					<article>
						<img
							className='logo'
							src={faceLogo}
							alt=''
						/>
						<h3>Messanger</h3>
						<span>Junior Trevisol</span>
						<a
							target='_blank'
							href='https://m.me/junior.trevisol'
						>
							Send a Message
						</a>
					</article>
				</div>
			</div>

			<form
				onSubmit={sendEmail}
				className='form-container'
			>
				<div className=''>
					<h2>Contact Me</h2>
				</div>

				<input
					type='name'
					placeholder='Your Full Name :'
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>

				<input
					type='email'
					placeholder='Your Email :'
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>

				<textarea
					type='text'
					placeholder='Message...'
					onChange={(e) => setMessage(e.target.value)}
					value={message}
				/>

				<button
					type='submit'
					value='send'
				>
					Send
					<img
						className='logo'
						src={sendLogo}
						alt=''
					/>
				</button>
			</form>
		</div>
	);
};

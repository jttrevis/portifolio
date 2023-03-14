import React from 'react';
import './styles.scss';
const Button = ({ href, children, icon }) => {
	return (
		<a className="buttonLink" target="_blank" href={href}>
			<p>{children}</p>
			<img src={icon} alt="" />
		</a>
	);
};

export default Button;

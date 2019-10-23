import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar bg-dark">
			<h1>
				<Link to="/">
					<i className="fas fa-code"></i> MERN APPLICATION
				</Link>
			</h1>
			<ul>
				<li>
					<Link to="!#">
						<i className="fas fa-users"></i> Developers
					</Link>
				</li>
				<li>
					<Link to="/register">
						<i className="fas fa-user-plus"></i> Register
					</Link>
				</li>
				<li>
					<Link to="/login">
						<i className="fas fa-sign-in-alt"></i> Login
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

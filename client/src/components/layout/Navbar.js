import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<ul>
			<li>
				<Link to="/profiles">Users</Link>
			</li>
			<li>
				<Link to="/posts">Posts</Link>
			</li>
			<li>
				<Link to="/dashboard">
					<i className="fas fa-user"></i> Dashboard
				</Link>
			</li>
			<li>
				<Link onClick={logout} to="/">
					<i className="fas fa-sign-out-alt"></i>
					<span className="hide-sm">Log out</span>
				</Link>
			</li>
		</ul>
	);
	const guestLinks = (
		<ul>
			<li>
				<Link to="/profiles">
					<i className="fas fa-users"></i> Users
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
	);
	return (
		<nav className="navbar bg-dark">
			<h1 style={{ fontSize: 'calc(1vw + 14px)' }}>
				<Link to="/">
					<i className="fas fa-code" /> MERN APPLICATION
				</Link>
			</h1>
			{!loading && <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
		</nav>
	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(
	mapStateToProps,
	{ logout }
)(Navbar);

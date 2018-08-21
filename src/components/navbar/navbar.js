import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Header = props => {
	return <div className="headerContainer">
				<div className="logoContainer">
					<h2>Plai-It</h2>
				</div>
				<div className="linkContainerTop">
					<div className="linkBall">
						<p id="linkText">Home</p>
					</div>
					<div className="linkBall">
						<p id="linkText">Events</p>
					</div>
					<div className="linkBall">
						<p id="linkText">Contact</p>
					</div>
				</div>
				<div className="linkContainerBottom">
					<div className="linkBall">
						<p id="linkText">Store</p>
					</div>
					<div className="linkBall">
						<p id="linkText">News</p>
					</div>
				</div>
			</div>;
}

export default Header;
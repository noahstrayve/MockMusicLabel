import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Header = props => {
	return <div className="headerContainer">
				<div className="logoContainer">
					<h2 id="logoTextOne">P</h2>
					<h2 id="logoTextTwo">L</h2>
					<h2 id="logoTextThree">A</h2>
					<h2 id="logoTextFour">I</h2>
					<h2 id="logoTextFive">-</h2>
					<h2 id="logoTextSix">I</h2>
					<h2 id="logoTextSeven">T</h2>
				</div>
				<div className="linkContainer">
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
				</div>
			</div>;
}

export default Header;
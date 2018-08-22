import React from 'react';
import './Landing.css';
import { Link } from "react-router-dom";
import ArtistsCard from '../artistCard/artistCard'

const MainPage = props => {
	return <div className="landingContainer">
				<div className="landingAboutContainer">
					<div className="aboutTitleContainer">
						<h1>About Us</h1>
					</div>
					<div className="aboutTextContainer">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Nunc lacus nisl, varius ut metus ac, ultricies efficitur magna. 
						am at ornare nunc. Proin maximus, est sit amet suscipit 
						tincidunt, justo lorem condimentum urna, sit amet elementum 
						augue dui vestibulum dolor. Quisque vel ipsum est. Suspendisse 
						laoreet tempor augue. Nunc tristique vitae lectus a sodales. 
						Etiam ac tincidunt orci, at efficitur turpis. Donec sed metus 
						vitae neque egestas rutrum. Pellentesque feugiat eu ipsum sit 
						amet blandit.</p>
						<p>Duis felis neque, mattis quis purus at, sollicitudin suscipit
						 enim. Aliquam erat volutpat. In euismod urna nec magna 
						 porttitor, a mattis quam ultricies. Maecenas maximus erat 
						 dapibus, commodo enim vel, tincidunt mauris. Sed blandit sed 
						 sapien at porttitor. Nulla a mattis justo. Sed eu neque vel 
						 elit aliquam interdum. Duis pulvinar vehicula quam quis 
						 faucibus. Pellentesque nec varius augue. Quisque venenatis 
						 felis et lacus semper ultrices. Suspendisse sit amet justo 
						 venenatis, sagittis purus non, dapibus massa. Aliquam pharetra 
						 eget odio vitae pretium. Nullam eget erat a sem tristique 
						 placerat quis accumsan ligula. Morbi eu dolor augue. Sed 
						 convallis placerat dictum.</p>
						<p>Maecenas ligula risus, egestas sed lacus ut, tempus tincidunt
						 ligula. Quisque sit amet massa hendrerit, eleifend eros 
						 efficitur, fermentum massa. Vivamus id feugiat augue. Fusce 
						 iaculis pellentesque libero, id viverra mi luctus a. Morbi in 
						 nunc id magna feugiat placerat sed ut augue. Vestibulum 
						 malesuada malesuada sollicitudin. Vivamus et dolor sed risus 
						 venenatis feugiat eget eget felis. Cras sagittis elementum 
						 libero porta semper. Phasellus vel imperdiet dolor. Integer 
						 commodo sem ligula, eget porttitor ante bibendum sed. Lorem 
						 ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum 
						 urna ac justo molestie tristique. Duis varius risus risus, at 
						 vestibulum odio tristique eget. In quis ipsum egestas, mollis 
						 mauris nec, hendrerit turpis.</p>
					</div>
				</div>
				<div className="landingArtistContainer">
					<div className="artistTitleContainer">
						<h1>Artist List</h1>
					</div>
					<div className="artistCardContainer">
						<ArtistsCard />
						<ArtistsCard />
						<ArtistsCard />
					</div>
				</div>
		   </div>;
}

export default MainPage;
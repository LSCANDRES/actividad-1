import React from "react";
import { Link } from 'react-router-dom'

export const NavBar = () => (
	<nav className="navbar navbar-expand-lg navbar-light bg-dark">
		<div className="container-fluid">
			<Link to="/">
				Home 
			</Link>

			<div className="collapse navbar-collapse">

				
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">


					<li className="nav-item">
						<Link to="/Countries">
							Countrie
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/Cities">
							Citis
						</Link>
					{/* </li>
					<li className="nav-item">
						<Link to="/Business">
							Business
						</Link>
						
					</li>
					<li className="nav-item">
						<Link to="/jobs">
							Jobs
						</Link> */}
					</li>
				</ul>
			</div>
		</div>
	</nav>
);
import React from "react";
import { Link } from 'react-router-dom'

export const NavBar = () => (
	<nav className="navbar navbar-expand-lg">
		<div className="container-fluid">
			<Link to="/">
				Puestos 
			</Link>

			<div className="collapse navbar-collapse">

				
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">


					<li className="nav-item">
						<Link to="/Paises">
							Pais
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/Ciudades">
							Ciudad
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/Empresas">
							Empresa
						</Link>
						
					</li>
					<li className="nav-item">
						<Link to="/Puestos">
							Puestos
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/Api">
							Api
						</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
);
import CartWidget from "./CartWidget";
import logo from '../assets/images/logo.png';
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

const NavBar = ({ name,	desc }) => {
	return (
		<div className="p-8 border-b shadow-sm">
			<div className="container mx-auto flex justify-between items-center">
				<Link to="/">
					<div className="flex items-center gap-2">
						<img width={70} src={logo} alt="Logo" />
						<div className="flex flex-col">
							<div className="text-3xl ml-4 font-black text-slate-900">{name}</div>
							<div className="text-ml ml-4 -mt-2 font-medium text-slate-900">{desc}</div>
						</div>
					</div>
				</Link>
				<nav className="flex gap-2 items-center">
					<BiUser className="text-2xl" />
					<Link className="text-slate-900 font-semibold hover:text-slate-400 mr-4" to="">Ingresar</Link>
					<Link className="text-slate-900 font-semibold hover:text-slate-400" to="">Registrarte</Link>
					<Link to="/cart"><CartWidget cantCart={0} /></Link>
				</nav>
			</div>
		</div >
	)
}

export default NavBar;
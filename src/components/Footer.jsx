import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const footer = () => {
	return (
		<footer className="mx-20 p-4 bg-white md:px-6 md:py-8 dark:bg-gray-800">
			<div className="sm:flex sm:items-center sm:justify-between">
				<div className="flex items-center mb-4 sm:mb-0">
					<img src={logo} className="mr-3 h-8" alt="Flowbite Logo" />
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sunride</span>
				</div>
				<ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
					<li>
						<Link to="#" className="mr-4 hover:underline md:mr-6 ">Sobre Nodotros</Link>
					</li>
					<li>
						<Link to="#" className="mr-4 hover:underline md:mr-6">Politica de privacidad</Link>
					</li>
					<li>
						<Link to="/contactanos" className="hover:underline">Contacto</Link>
					</li>
				</ul>
			</div>
			<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
			<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <span className="hover:underline">Sunride</span>. Todos los derechos reservados.
			</span>
		</footer>
	)
}

export default footer
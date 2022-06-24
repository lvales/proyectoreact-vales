import CartWidget from "./CartWidget";
import logo from '../assets//images/logo.png';

const NavBar = ({ name,
    desc,
    btn1 = 'Ingresar',
    link1 = '#',
    btn2,
    link2 = '#'
}) => {
    return (
        <div className="p-8 border-b shadow-sm">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img width={70} src={logo} alt="Logo" />
                    <div className="flex flex-col">
                        <a className="text-3xl ml-4 font-black text-slate-900" href="/">{name}</a>
                        <a className="text-ml ml-4 -mt-2 font-medium text-slate-900" href="/">{desc}</a>
                    </div>
                </div>
                <nav className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <button className="text-slate-900 font-semibold hover:text-slate-400 mr-4" href={link1}>{btn1}</button>
                    <button className="text-slate-900 font-semibold hover:text-slate-400" href={link2}>{btn2}</button>
                    <CartWidget cantCart='0' />
                </nav>
            </div>
        </div >
    )
}

export default NavBar;
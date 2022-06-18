import CartWidget from "./CartWidget";

const NavBar = ({name}) => {
    return (
        <div className="p-5 border-b shadow-sm bg-amber-500">
            <div className="container mx-auto flex justify-between items-center bg-amber-500">
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <a className="text-3xl font-black text-slate-900" href="/">{name}</a>
                </div>
                <nav className="flex gap-5 items-center">
                    <button className="p-2 rounded-md bg-slate-900 text-yellow-50 font-semibold hover:bg-slate-500" href="#">Ingresar</button>
                    <button className="text-slate-900 font-semibold hover:text-slate-500" href="#">Registrarse</button>
                    <CartWidget cantCart='3' />
                </nav>
            </div>
        </div >
    )
}


export default NavBar;
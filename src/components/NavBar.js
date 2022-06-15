
const NavBar = () => {
    return (
        <div className="p-5 border-b shadow-sm bg-amber-500">
            <div className="container mx-auto flex justify-between items-center bg-amber-500">
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <a className="text-3xl font-black" href="/">eCommerce</a>
                </div>
                <nav className="flex gap-10 items-center">
                    <a className="text-gray-800 font-semibold hover:text-gray-500" href="#">Ingresar</a>
                    <a className="text-gray-800 font-semibold hover:text-gray-500" href="#">Registrarse</a>
                    <a className="text-gray-800 hover:text-gray-500" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                    </a>
                </nav>
            </div>
        </div >
    )
}

export default NavBar;
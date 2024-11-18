import Logo from "./../../assets/logo.svg?react"
export const Nav = () => {
    return (			
    	<nav className="flex justify-between py-5 px-20 sticky top-0 z-40 backdrop-blur transition-colors duration-500 max-w-screen-xl mx-auto">
				<Logo className="-mx-6 self-center"/>
				<ul className="flex gap-4 text-ine-black-100 font-semibold">
					<li className="px-2 py-3 self-center"><a href="/Home" target="_blank" rel="noopener noreferrer">Home</a></li>
					<li className="px-2 py-3 self-center"><a href="/Work" target="_blank" rel="noopener noreferrer">Work</a></li>
					<li className="px-2 py-3 self-center"><a href="/About" target="_blank" rel="noopener noreferrer">About</a></li>
				</ul>
			</nav>
    )
}
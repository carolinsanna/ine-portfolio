import Logo from "./../../assets/logo-light.svg?react"
import LogoDark from "./../../assets/logo-dark.svg?react"
export const Nav = () => {
    return (			
    	<nav className="flex justify-between py-4 px-10 md:px-20 max-w-screen-xl mx-auto">
				<Logo className="block self-center w-16 h-16 dark:hidden"/>
				<LogoDark className="hidden self-center w-16 h-16 dark:block"/>
				<ul className="flex gap-4 text-ine-link-md text-ine-gray-900 dark:text-ine-gray-100">
					<li className="px-2 py-3 self-center"><a href="/Home" target="_blank" rel="noopener noreferrer">Home</a></li>
					<li className="px-2 py-3 self-center"><a href="/Work" target="_blank" rel="noopener noreferrer">Work</a></li>
					<li className="px-2 py-3 self-center"><a href="/About" target="_blank" rel="noopener noreferrer">About</a></li>
				</ul>
			</nav>
    )
}
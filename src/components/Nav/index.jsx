import Logo from "./../../assets/logo-light.svg?react"
import LogoDark from "./../../assets/logo-dark.svg?react"
import Menu from "./../../assets/burger-menu.svg?react" 
import { useState } from 'react'

export const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}
    return (			
    	<nav className="flex justify-between py-4 px-10 md:px-20 max-w-screen-xl mx-auto">
				<Logo className="block grow md:grow-0 order-2 w-16 h-16 dark:hidden md:order-1" alt="Inessa Logo"/>
				<LogoDark className="hidden grow md:grow-0 order-2 w-16 h-16 dark:block md:order-1" alt="Inessa Logo"/>
				<button onClick={toggleMenu} type="button" aria-controls="navbar-default" aria-expanded={isMenuOpen}
					className="md:hidden">
					<Menu className="stroke-ine-gray-900 dark:stroke-ine-gray-100"/>
				</button>
				<div className={`${isMenuOpen ? 'block' : 'hidden'} md:block md:my-auto order-1 md:order-2`} id="navbar-default">
					<ul className="flex flex-col gap-4 text-ine-link-md text-ine-gray-900 dark:text-ine-gray-100 md:flex-row">
						<li className="px-2 py-3 self-center"><a href="/Home">Home</a></li>
						<li className="px-2 py-3 self-center"><a href="/Work">Work</a></li>
						<li className="px-2 py-3 self-center"><a href="/About">About</a></li>
					</ul>
				</div>				
			</nav>
    )
}
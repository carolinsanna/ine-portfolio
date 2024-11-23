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
    	<nav className="flex flex-col md:flex-row justify-between py-4 px-10 md:px-20 max-w-screen-xl mx-auto">
				<div className="grid grid-cols-3">
					<button onClick={toggleMenu} type="button" aria-controls="navbar-default" aria-expanded={isMenuOpen}
						className="md:hidden">
						<span className="sr-only">Navigation Menu</span>
						<Menu className="w-6 sm:w-8 stroke-ine-gray-900 dark:stroke-ine-gray-100"/>
					</button>

					<Logo className="block place-self-center w-12 h-12 md:w-16 md:h-16 dark:hidden" alt="Inessa Logo"/>
					<LogoDark className="hidden place-self-center w-12 h-12 md:w-16 md:h-16 dark:block" alt="Inessa Logo"/>
				</div>			
				
				<div className={`${isMenuOpen ? 'block' : 'hidden'} pt-4 md:pt-0 md:block md:my-auto`} id="navbar-default">
					<ul className="flex flex-col gap-4 text-ine-link-md text-ine-gray-900 dark:text-ine-gray-100 md:flex-row">
						<li className="px-2 py-3 self-center md:self-center"><a href="./">Home</a></li>
						<li className="px-2 py-3 self-center md:self-center"><a href="#">Work</a></li>
						<li className="px-2 py-3 self-center md:self-center"><a href="/about">About</a></li>
					</ul>
				</div>				
			</nav>
    )
}
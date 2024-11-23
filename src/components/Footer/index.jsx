import Linkedin from "./../../assets/linkedin.svg?react"
import Instagram from "./../../assets/instagram.svg?react"

export const Footer = () => {
		return (
			<footer className="py-12 flex flex-col gap-10">
				<div className="flex gap-10 justify-center">
					<a href="https://www.linkedin.com/in/inessadl/" target="_blank" rel="noopener noreferrer">
						<Linkedin/>
					</a>
					<a href="https://www.instagram.com/inessadl/" target="_blank" rel="noopener noreferrer">
						<Instagram/>
					</a>
				</div>
				<div className="flex flex-col gap-0.5 items-center justify-center text-ine-gray-900 dark:text-ine-gray-100 lg:flex-row lg:gap-3">
					<p>Designed by Inessa Luerce</p>
					<p>Developed by Carolina Dias</p>
					<p>2024</p>
				</div>
			</footer>
	)
}

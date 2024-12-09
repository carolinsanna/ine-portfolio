import { Nav } from  '../../components/Nav'
import { Footer } from  '../../components/Footer'

export function Portfolio(){
	return (
		<div className='flex flex-col items-center w-full h-full dark:bg-ine-gray-900'>
			<div className='flex flex-col items-center w-full h-full dark:bg-ine-gray-900'>
				<div className="fixed top-0 z-40 backdrop-blur transition-colors 
    	  	duration-500 shadow-lg dark:bg-transparent w-full">
    	  	  <Nav />
    	  </div>
				<div className="px-10 max-w-screen-xl md:px-20">
					<main className='flex flex-col gap-6 mt-20 py-10 md:mt-24 md:py-20 md:gap-10'>
						<div className="flex flex-col gap-2">
							<p className="text-ine-text-lg text-ine-gray-300 uppercase">Personal Projects</p>
							<h1 className="text-ine-heading-sm text-ine-gray-900 dark:text-ine-gray-100 md:text-ine-heading-lg font-bold">Portfolio</h1>
						</div>
						<div className="flex flex-col gap-6 text-ine-text-md text-ine-gray-900 dark:text-ine-gray-100 md:text-ine-text-lg">
							<p>
							In the process of creating this portfolio, I mapped out the tasks on a Trello board, which I shared with the developer responsible for the coding. You can access the <a className='font-bold' href="https://" target="_blank" rel="noopener noreferrer">Trello</a> board and the <a className='font-bold' href="https://" target="_blank" rel="noopener noreferrer">Figma</a> file to see how I structured my tasks and organized files, including components, naming conventions, and overall organization.
							</p>
						</div>
						<img src="/portfolio-01.png" alt="Portfolio Trello board"/>
						<img src="/portfolio-02.png" alt="Portfolio Figma Project"/>
					</main>
					<Footer/>
				</div>
			</div>
		</div>
	)
}
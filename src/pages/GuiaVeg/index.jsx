import { Nav } from  '../../components/Nav'
import { Footer } from  '../../components/Footer'

export function GuiaVeg(){
	return (
		<div className='flex flex-col items-center w-full min-h-screen dark:bg-ine-gray-900'>
			<div className="fixed top-0 z-40 backdrop-blur transition-colors 
    		duration-500 shadow-lg dark:bg-transparent w-full">
    		  <Nav />
    	</div>
			<div className="flex flex-col justify-between px-10 max-w-screen-xl min-h-screen md:px-20">
				<main className='flex flex-col gap-6 mt-20 py-10 md:mt-24 md:py-20 md:gap-10'>
					<div className="flex flex-col gap-2">
						<p className="text-ine-text-lg text-ine-gray-300 uppercase">Personal Projects</p>
						<h1 className="text-ine-heading-sm text-ine-gray-900 dark:text-ine-gray-100 md:text-ine-heading-lg font-bold">Tudo Vegano (WIP)</h1>
					</div>
					<div className="flex flex-col gap-6 text-ine-text-md text-ine-gray-900 dark:text-ine-gray-100 md:text-ine-text-lg">
						<p>
							This project is currently in the ideation phase and serves as a guide for vegan restaurants and businesses in Porto Alegre.
						</p>
					</div>
				</main>
				<Footer/>
			</div>
		</div>
	)
}
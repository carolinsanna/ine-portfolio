import { Nav } from  '../../components/Nav'
import { Footer } from  '../../components/Footer'

export function GuiaVeg(){
	return (
		<div className='flex flex-col items-center w-full h-full dark:bg-ine-gray-900'>
			<div className="fixed top-0 z-40 backdrop-blur transition-colors 
    		duration-500 shadow-lg dark:bg-transparent w-full">
    		  <Nav />
    	</div>
			<div className="px-10 max-w-screen-xl md:px-20">
				<main className='flex flex-col gap-6 mt-20 py-10 md:mt-24 md:py-20 md:gap-10'>
					<div className="flex flex-col gap-2">
						<p className="text-ine-text-lg text-ine-gray-300 uppercase">Personal Projects</p>
						<h1 className="text-ine-heading-sm text-ine-gray-900 dark:text-ine-gray-100 md:text-ine-heading-lg font-bold">Tudo Vegano (WIP)</h1>
					</div>
				</main>
				<Footer/>
			</div>
		</div>
	)
}
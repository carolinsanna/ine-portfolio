import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer'

export function Wodz(){
	return (
		<div className='flex flex-col items-center w-full h-full dark:bg-ine-gray-900'>
			<div className="fixed top-0 z-40 backdrop-blur transition-colors 
      	duration-500 shadow-lg dark:bg-transparent w-full">
      	  <Nav />
      </div>
			<div className="px-10 max-w-screen-xl md:px-20">
				<main className='grid lg:grid-flow-row lg:grid-cols-3 gap-6 mt-20 py-10 md:mt-24 md:py-20 md:gap-10'>
					<div className="flex flex-col gap-2 lg:col-span-2 ">
						<p className="text-ine-text-lg text-ine-gray-300 uppercase">Freelance</p>
						<h1 className="text-ine-heading-sm text-ine-gray-900 dark:text-ine-gray-100 md:text-ine-heading-lg font-bold">Wodz - Music School & Studio</h1>
					</div>
					<div className="flex flex-col gap-6 text-ine-text-md text-ine-gray-900 dark:text-ine-gray-100 md:text-ine-text-lg lg:col-span-2">
							<p>
							Visual Identity for Wodz - Music School & Studio of Porto Alegre city, Brazil.  
							</p>
							<p>
							Based on client&apos;s references and color preferences, we created a brand that runs away from the obvious musical iconography - musical instruments or common notes. 
							</p>
							<p>
							We played around with the name (that sounds like ”voice” in Portuguese), bringing dynamism and yet a reference of sheet music, with a minimalist and joyful concept.
							</p>
							<p>
							*Project done in partnership with Gisele Carvalho.
							</p>
					</div>
					<img src="/wodz-01.png" className="w-72 place-self-center lg:place-self-start lg:w-auto lg:row-span-3" alt="Wodz Logo"/>
					<img src="/wodz-02.png" className='lg:col-span-3' alt=""/>
					<img src="/wodz-03.png" className='lg:col-span-3' alt=""/>
					<img src="/wodz-04.png" className='lg:col-span-3' alt=""/>
					<img src="/wodz-05.png" className='lg:col-span-3' alt=""/>
				</main>
				<Footer/>	
			</div>
		</div>
	)
}
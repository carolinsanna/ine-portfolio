import { Nav } from  '../../components/Nav'
import { Footer } from  '../../components/Footer'

export function CatSis(){
	return (
		<div className='flex flex-col items-center w-full h-full dark:bg-ine-gray-900'>
			<div className="fixed top-0 z-40 backdrop-blur transition-colors 
      	duration-500 shadow-lg dark:bg-transparent w-full">
      	  <Nav />
      </div>
			<div className="px-10 max-w-screen-xl md:px-20">
				<main className='flex flex-col gap-6 mt-20 py-10 md:mt-24 md:py-20 md:gap-10'>
					<div className="flex flex-col gap-2">
						<p className="text-ine-text-lg text-ine-gray-300 uppercase">STUDIES</p>
						<h1 className="text-ine-heading-sm text-ine-gray-900 dark:text-ine-gray-100 md:text-ine-heading-lg font-bold">CatSis</h1>
					</div>
					<div className="flex flex-col gap-6 text-ine-text-md text-ine-gray-900 dark:text-ine-gray-100 md:text-ine-text-lg">
						<p>
							An app to find someone to help with taking care of your cat. It could be someone to take them to the vet while you working, visiting them while you are traveling, administrating medication, etc.
						</p>
					</div>
					<img src="/catsis-01.png" alt="Catsis signup journey"/>
					<img src="/catsis-02.png" alt="Catsis finding catsiter journey"/>
					<img src="/catsis-03.png" alt="Catsis catsiter request"/>
				</main>
				<Footer/>
			</div>
		</div>
	)
}
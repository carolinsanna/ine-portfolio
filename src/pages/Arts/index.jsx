import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer'

export function Poster(){
	const imgsRowOne = [
		"posters-01.png",
		"posters-02.png",
		"posters-03.png",		
	]
	const imgsRowTwo = [
		"posters-04.png",
		"posters-05.png",
		"posters-06.png",		
	]
	const imgsRowThree = [
		"posters-07.png",
		"posters-08.png",
		"posters-09.png",
		"posters-10.png",
	]
	return (
		<div className='flex flex-col items-center w-full h-full dark:bg-ine-gray-900'>
			<div className="fixed top-0 z-40 backdrop-blur transition-colors 
      	duration-500 shadow-lg dark:bg-transparent w-full">
      	  <Nav />
      </div>
			<div className="px-10 max-w-screen-xl md:px-20">
				<main className='flex flex-col gap-6 mt-20 py-10 md:mt-24 md:py-20 md:gap-10'>
					<div className="flex flex-col gap-2 lg:col-span-2 ">
						<p className="text-ine-text-lg text-ine-gray-300 uppercase">Personal Projects</p>
						<h1 className="text-ine-heading-sm text-ine-gray-900 dark:text-ine-gray-100 md:text-ine-heading-lg font-bold">Posters</h1>
					</div>
					<div className="flex flex-col gap-6 text-ine-text-md text-ine-gray-900 dark:text-ine-gray-100 md:text-ine-text-lg">
							<p>
							Some personal art, mostly collages.
							</p>
					</div>
					<section className='grid gap-10'>
						<div className="container mx-auto">
							<div className='relative -mr-10 pr-10 flex overflow-x-auto gap-4 scroll-smooth lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:mx-0'>
								{imgsRowOne.map((src, index) => (
									<div key ={index}
									className='flex shrink-0 scroll-snap-center lg:w-auto'>
										<img src={src} alt={`Poster ${index+1}`} 
										className='w-64 h-auto rounded-xl sm:w-72 lg:w-auto lg:h-auto'/>
									</div>
								))}
							</div>
						</div>
						<div className="container mx-auto">
							<div className='relative -mr-10 pr-10 flex overflow-x-auto gap-4 scroll-smooth lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:mx-0'>
								{imgsRowTwo.map((src, index) => (
									<div key ={index}
									className='flex shrink-0 scroll-snap-center lg:w-auto'>
										<img src={src} alt={`Poster ${index+1}`} 
										className='w-64 h-auto rounded-xl sm:w-72 lg:w-auto lg:h-auto'/>
									</div>
								))}
							</div>
						</div>
						<div className="container mx-auto">
							<div className='relative -mr-10 pr-10 flex overflow-x-auto gap-4 scroll-smooth lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:mx-0'>
								{imgsRowThree.map((src, index) => (
									<div key ={index}
									className='flex shrink-0 scroll-snap-center lg:w-auto'>
										<img src={src} alt={`Poster ${index+1}`} 
										className='w-64 h-auto rounded-xl sm:w-72 lg:w-auto lg:h-auto'/>
									</div>
								))}
							</div>
						</div>
					</section>
				</main>
				<Footer/>	
			</div>
		</div>
	)
}
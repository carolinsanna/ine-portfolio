import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer'
export function NursaResumeImporter(){
	const imgsRowOne = [
		"resume-importer-01.png",
		"resume-importer-02.png",
		"resume-importer-03.png",
		"resume-importer-04.png",
		"resume-importer-05.png",
	]
	const imgsRowTwo = [
		"resume-importer-06.png",
		"resume-importer-07.png",
		"resume-importer-08.png",
		"resume-importer-09.png",
		"resume-importer-10.png",
	]
	const imgsRowThree = [
		"resume-importer-11.png",
		"resume-importer-12.png",
		"resume-importer-13.png",
		"resume-importer-14.png",
		"resume-importer-15.png",
	]
	return (
		<div className='flex flex-col items-center w-full dark:bg-ine-gray-900'>
			<div className="fixed top-0 z-40 backdrop-blur transition-colors 
      	duration-500 shadow-lg dark:bg-transparent w-full">
      	  <Nav />
      </div>
			<div className="relative px-10 max-w-screen-xl md:px-20">
				<main className='flex flex-col gap-6 mt-20 py-10 md:mt-24 md:py-20 md:gap-10'>
					<div className="flex flex-col gap-2 lg:col-span-2 ">
						<p className="text-ine-text-lg text-ine-gray-300 uppercase">Nursa</p>
						<h1 className="text-ine-heading-sm text-ine-gray-900 dark:text-ine-gray-100 md:text-ine-heading-lg font-bold">Manage Request</h1>
					</div>
					<div className="flex flex-col gap-6 text-ine-text-md text-ine-gray-900 dark:text-ine-gray-100 md:text-ine-text-lg">
							<p>
							Nursa app connects facilities and clinicians who are looking for per diem jobs. The more complete is the clinician profile, the more likely they are to get the best jobs.
							</p>
							<p>
							In user experience, it is known how onerous is for the user the task of filling out long forms or profiles. So, in this feature, we provide a solution for that by letting the user upload their resume, parse the information and automatically fill out their profile for them.
							</p>
					</div>
					<section className='grid gap-10'>
						<div className='grid gap-4'>
							<div className="container mx-auto">
								<div className='relative -mr-10 pr-10 flex overflow-x-auto gap-4 scroll-smooth lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0'>
									{imgsRowOne.map((src, index) => (
										<div key ={index}
										className='flex shrink-0 scroll-snap-center lg:w-auto'>
											<img src={src} alt={`Image ${index+1}`} 
											className='w-64 h-auto sm:w-72 lg:w-auto lg:h-auto'/>
										</div>
									))}
								</div>
							</div>
							<h3 className='text-ine-gray-900 dark:text-ine-gray-100'>Flow 1 - Uploading resume</h3>
						</div>
						<div className='grid gap-4'>
							<div className="container mx-auto">
								<div className='relative -mr-10 pr-10 flex overflow-x-auto gap-4 scroll-smooth lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0'>
									{imgsRowTwo.map((src, index) => (
										<div key ={index}
										className='flex shrink-0 scroll-snap-center lg:w-auto'>
											<img src={src} alt={`Image ${index+1}`} 
											className='w-64 h-auto sm:w-72 lg:w-auto lg:h-auto'/>
										</div>
									))}
								</div>
							</div>
							<h3 className='text-ine-gray-900 dark:text-ine-gray-100'>Flow 2 - Review and edit info</h3>
						</div>
						<div className='grid gap-4'>
							<div className="container mx-auto">
								<div className='relative -mr-10 pr-10 flex overflow-x-auto gap-4 scroll-smooth lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0'>
									{imgsRowThree.map((src, index) => (
										<div key ={index}
										className='flex shrink-0 scroll-snap-center lg:w-auto'>
											<img src={src} alt={`Image ${index+1}`} 
											className='w-64 h-auto sm:w-72 lg:w-full lg:h-auto'/>
										</div>
									))}
								</div>
							</div>
							<h3 className='text-ine-gray-900 dark:text-ine-gray-100'>Flow 3 - Add info to profile</h3>
						</div>
					</section>
				</main>
				<Footer/>	
			</div>
		</div>
	)
}
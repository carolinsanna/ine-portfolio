import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer'
export function NursaResumeImporter(){
	return (
		<div className='flex flex-col items-center w-full h-full dark:bg-ine-gray-900'>
			<div className="fixed top-0 z-40 backdrop-blur transition-colors 
      	duration-500 shadow-lg dark:bg-transparent w-full">
      	  <Nav />
      </div>
			<div className="px-10 max-w-screen-xl md:px-20">
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
					
				</main>
				<Footer/>	
			</div>
		</div>
	)
}
import { Nav } from  '../../components/Nav'
import { Footer } from  '../../components/Footer'

export function NursaManageRequest(){
	return (
		<div className='flex flex-col items-center w-full h-full dark:bg-ine-gray-900'>
			<div className="fixed top-0 z-40 backdrop-blur transition-colors 
      	duration-500 shadow-lg dark:bg-transparent w-full">
      	  <Nav />
      </div>
			<div className="px-10 max-w-screen-xl md:px-20">
				<main className='flex flex-col gap-6 mt-20 py-10 md:mt-24 md:py-20 md:gap-10'>
					<div className="flex flex-col gap-2">
						<p className="text-ine-text-lg text-ine-gray-300 uppercase">Nursa</p>
						<h1 className="text-ine-heading-sm text-ine-gray-900 dark:text-ine-gray-100 md:text-ine-heading-lg font-bold">Manage Request</h1>
					</div>
					<div className="flex flex-col gap-6 text-ine-text-md text-ine-gray-900 dark:text-ine-gray-100 md:text-ine-text-lg">
							<p>
							Nursa is an online app that connects clinicians to facilities, and helps 
							them to find per diem jobs. The facility posts a job, then multiple 
							clinicians might request it and the facility scheduler needs to decide 
							which clinician is more qualified for the position.
							</p>
							<p>
							Originally, the Manage Requests page presented clinician requests without 
							providing guidance to schedulers to help them choose the best clinician. 
							In order to make an informed decision, the schedulers went to each clinician 
							profile and verify every credential and qualification*. It took 4 steps per 
							clinician to access all the details that were relevant, 
							plus the time to compare which credential one clinician has that the other doesn&apos;t. 
							This led to a long first time response (baseline of 23.6 hours).
							</p>
							<p>
							My solution presented all the necessary information straightforwardly, 
							with direct links to verify the authenticity of the documents without leaving 
							the main page. 
							It also allows the scheduler to directly download the clinician&apos;s profile, 
							if needed. 
							</p>
					</div>
					<section className='flex flex-col gap-4 text-ine-text-md text-ine-gray-900 dark:text-ine-gray-100 lg:text-ine-text-lg'>
						<p>
							<strong>Goals:</strong>
						</p>
						<ul className='list-disc text-ine-text-md ml-8 text-ine-gray-900 leading-5 dark:text-ine-gray-100 lg:text-ine-text-lg lg:leading-6'>
							<li>reduce the first time response;</li>
							<li>increase the number of jobs scheduled;</li>
							<li>increase percentage of requested jobs completed;</li>
						</ul>
					</section>
					<section className='flex flex-col gap-4 text-ine-text-md text-ine-gray-900 dark:text-ine-gray-100 lg:text-ine-text-lg'>
						<p>
							<strong>Results:</strong> this feature was just released (Nov 2024), I&apos;m still waiting for metrics (will be updated later).
						</p>
						<p className='mt-8'>
							*information based on user research
						</p>
					</section>
					<img src="/manage-requests-01.png" alt="Nursa Manage Request Screen"/>
				</main>
				<Footer/>
			</div>
		</div>
	)
}
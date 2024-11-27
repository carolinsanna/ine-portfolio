import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer'

export function NursaPayments(){
	return(
		<div className="flex flex-col items-center gap-4 w-full dark:bg-ine-gray-900">
			<div className="fixed top-0 z-40 backdrop-blur transition-colors 
      duration-500 shadow-lg dark:bg-transparent w-full">
        <Nav />
      </div>
			<div className="px-10 max-w-screen-xl md:px-20">
				<main className='grid lg:grid-flow-row lg:grid-cols-3 gap-6 mt-20 py-10 md:mt-24 md:py-20 md:gap-10'>
					<div className="flex flex-col gap-2 lg:col-span-2 ">
						<p className="text-ine-text-lg text-ine-gray-300 uppercase">Nursa</p>
						<h1 className="text-ine-heading-sm text-ine-gray-900 dark:text-ine-gray-100 md:text-ine-heading-lg font-bold">Billings and Payments</h1>
					</div>
					<div className="flex flex-col gap-6 text-ine-text-md text-ine-gray-900 dark:text-ine-gray-100 md:text-ine-text-lg lg:col-span-2">
						<p>
						Nursa is an app that connects nurses (clinicians) to facilities, to find per diem jobs. The clinician flow requires them
						to fill out a report after they work a shift, so they can be paid.
						</p>
						<p>
						These are small projects of the Billings and Payments team 
						- responsible for the financial operations of the Nursa app.
						</p>
					</div>
					
					<img src="/bill-01.png" className="w-72 place-self-center lg:place-self-start lg:w-auto lg:row-span-5" alt="Nursa Shift Details Mobile Screen"/>

					<hr className="border border-ine-gray-300 lg:col-span-2" />
					
					<section className='flex flex-col gap-4 lg:col-span-2'>
						<h2 className='py-2 text-ine-gray-900 dark:text-ine-gray-100 font-bold lg:text-ine-heading-xs lg:uppercase'>Break Time Project</h2>
						<p className='text-ine-text-md text-ine-gray-900 dark:text-ine-gray-100 lg:text-ine-text-lg'>
							<strong>Ojective:</strong> Revenue Growth and Cost Efficiency
						</p>
						<ul className='list-disc text-ine-text-md ml-8 text-ine-gray-900 leading-5 dark:text-ine-gray-100 lg:text-ine-text-lg lg:leading-6'>
							<li><strong>Goal:</strong> Reduce clinician labor expenses as a percentage of revenue.</li>
							<li><strong>Strategy:</strong> Minimize discrepancies between clinician and facility-reported times, measured in hours and minutes, to enhance bottom-line revenue and gross income.</li>
							<li><strong>Impact:</strong> The implementation of the Break Time solution led to a significant reduction in shift report mismatches, resulting in annual savings of approximately $320,000.</li>
						</ul>
					</section>

					<hr className="border border-ine-gray-300 lg:col-span-2" />

					<section className='flex flex-col gap-4 lg:col-span-2'>
						<h2 className='py-2 text-ine-gray-900 dark:text-ine-gray-100 font-bold lg:text-ine-heading-xs lg:uppercase'>Shift Report Project</h2>
						<p className='text-ine-text-md text-ine-gray-900 dark:text-ine-gray-100 lg:text-ine-text-lg'>
							<strong>Ojective:</strong> Enhance Clinician Satisfaction, Engagement and Retention
						</p>
						<ul className='list-disc text-ine-text-md ml-8 text-ine-gray-900 leading-5 dark:text-ine-gray-100 lg:text-ine-text-lg lg:leading-6'>
							<li><strong>Goal:</strong> Deliver a delightful shift management and payment experience through an intuitive user interface.</li>
							<li><strong>Approach:</strong> mprove the shift lifecycle experience by ensuring clinicians have a clear understanding of their position within the shift lifecycle. Provide clear calls-to-action for the necessary next steps to facilitate seamless shift progression.</li>
							<li><strong>Rationale:</strong> Users prefer straightforward instructions and minimal cognitive load when using the system.</li>
						</ul>
						<p className='text-ine-text-md text-ine-gray-900 dark:text-ine-gray-100 lg:text-ine-text-lg'>
							<strong>Improvements and Success Metrics:</strong>
						</p>
						<ul className='list-disc text-ine-text-md ml-8 text-ine-gray-900 leading-5 dark:text-ine-gray-100 lg:text-ine-text-lg lg:leading-6'>
							<li>Deliver a delightful shift management and payment experience through an intuitive user interface.</li>
							<li>mprove the shift lifecycle experience by ensuring clinicians have a clear understanding of their position within the shift lifecycle. Provide clear calls-to-action for the necessary next steps to facilitate seamless shift progression.</li>
							<li>Users prefer straightforward instructions and minimal cognitive load when using the system.</li>
						</ul>
					</section>
					<img src="/bill-02.png" className='lg:col-span-3' alt="Nursa Shift Details Desktop Screen"  />
					<img src="/bill-03.png" className='lg:col-span-3' alt="Nursa Shift Details Desktop Screen"  />
				</main>
				<Footer/>
			</div>
		</div>
	)
}
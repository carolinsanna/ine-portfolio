import { Nav } from  '../../components/Nav'
import { Footer } from  '../../components/Footer'

export function DailyUIChallenges(){
	return (
		<div className='flex flex-col items-center w-full h-full dark:bg-ine-gray-900'>
			<div className="fixed top-0 z-40 backdrop-blur transition-colors 
      	duration-500 shadow-lg dark:bg-transparent w-full">
      	  <Nav />
      </div>
			<div className="px-10 max-w-screen-xl md:px-20">
				<main className='flex flex-col gap-6 mt-20 py-10 md:mt-24 md:py-20 md:gap-10'>
					<div className="flex flex-col gap-2">
						<p className="text-ine-text-lg text-ine-gray-300 uppercase">Studies</p>
						<h1 className="text-ine-heading-sm text-ine-gray-900 dark:text-ine-gray-100 md:text-ine-heading-lg font-bold">Daily UI Challenges</h1>
					</div>
					<div className="flex flex-col gap-6 text-ine-text-md text-ine-gray-900 dark:text-ine-gray-100 md:text-ine-text-lg">
						<p>
							Set of some UI Challenges to exercite and show visual skills.
						</p>
					</div>
					<img src="/daily-ui-01.png" alt="Food and drink app"/>
					<img src="/daily-ui-02.png" alt="Credit Card"/>
					<img src="/daily-ui-03.png" alt="404 Not Found Screen"/>
				</main>
				<Footer/>
			</div>
		</div>
	)
}
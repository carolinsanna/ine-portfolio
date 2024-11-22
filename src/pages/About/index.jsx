import { Nav } from './../../components/Nav'

export function About(){
  return (
		<div className='flex flex-col items-center gap-4 w-full dark:bg-ine-gray-900'>
			<div className='sticky top-0 z-40 backdrop-blur transition-colors 
      duration-500 shadow-lg dark:bg-transparent w-full'>
				<Nav />
			</div>
			<div className="px-10 max-w-screen-xl md:px-20">
			
			</div>
		</div>
		
  )
}
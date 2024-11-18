import { Hero } from './../../components/Hero'
import { Work } from './../../components/Work'
import { Button } from './../../components/Button'
import { Nav } from './../../components/Nav'

export function Home(){
  return (
    <div className='flex flex-col items-center gap-4 w-full'>
      <div className=' sticky top-0 z-40 backdrop-blur transition-colors duration-500 w-full'>
        <Nav/>
      </div>
      <div className="px-20 max-w-screen-xl">
        <header className='flex flex-col'>          
          <Hero/>
          <Button
            link='/About'
            value='More About Me'
          />
        </header>
        <main className='flex flex-col items-center'>
          <Work />
        </main>        
      </div>

    </div>
  )
}
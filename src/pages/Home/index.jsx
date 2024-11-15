import { Hero } from './../../components/Hero'
import { Work } from './../../components/Work'
import { Button } from './../../components/Button'

export function Home(){
  return (
    <div className='flex flex-col items-center gap-4'>

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
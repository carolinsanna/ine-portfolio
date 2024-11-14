import { Hero } from './../../components/Hero'
import { Work } from './../../components/Work'
import { Button } from './../../components/Button'

export function Home(){
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className="px-20 max-w-screen-xl">
        <header>
          <Hero
            hello = 'Hello, my name is Inessa'
            description = "I'm a passionate UX/UI Designer with 5+ years of experience in digital products"
          />
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
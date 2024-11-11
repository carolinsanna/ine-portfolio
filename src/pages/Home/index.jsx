import { Work } from './../../components/Work'
import { Button } from './../../components/Button'

export function Home(){
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className="px-20 max-w-screen-xl">
        <header>
          <div id='hero' className='flex flex-col items-center py-10 px-12'>
            <h1 className='text-3xl self-start'>
              Hello, my name is Inessa
            </h1>
            <p className='text-6xl'>
              I'm an UX/UI Designer witth 5+ years of experience
              in help companies to get better results...lalala
            </p>
            <Button
              link='/About'
              value='More About Me'
            />
          </div>          
        </header>
        <main className='flex flex-col items-center'>
          <Work />
        </main>        
      </div>
    </div>
  )
}
import { Hero } from './../../components/Hero'
import { Work } from './../../components/Work'
import { Button } from './../../components/Button'
import { Nav } from './../../components/Nav'
import { Title } from '../../components/Title'

export function Home(){
  return (
    <div className='flex flex-col items-center gap-4 w-full'>
      <div className='sticky border-b top-0 z-40 backdrop-blur transition-colors duration-500 border-slate-950/10 dark:bg-transparent dark:border-slate-100/10 w-full'>
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
          <section className="flex flex-col items-center gap-8 py-20">
            <Title
              pretitle='HERE IS SOME OF MY'
              title='Professional Work'
            />
            <Work/>
            <Button
              link='/Work'
              value='See All'
            />
          </section>
        </main>
      </div>

    </div>
  )
}
import { Hero } from './../../components/Hero'
import { Button } from './../../components/Button'
import { Nav } from './../../components/Nav'
import { Title } from '../../components/Title'
import { Card } from './../../components/Card'

export function Home(){
  return (
    <div className='flex flex-col items-center gap-4 w-full dark:bg-ine-gray-900'>
      <div className='sticky border-b top-0 z-40 backdrop-blur transition-colors 
      duration-500 border-slate-950/10 dark:bg-transparent dark:border-slate-100/10 w-full'>
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
            <div className="flex gap-4 justify-center">
              <Card
                imgsrc="/placeholder.png"
                title="Title"
                description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
                link="/Title"
              />
              <Card
                imgsrc="/placeholder.png"
                title="Title"
                description="Id eros pellentesque facilisi id mollis faucibus commodo enim."
                link="/Title"
              />
              <Card
                imgsrc="/placeholder.png"
                title="Title"
                description="Nunc, pellentesque velit malesuada non massa arcu."
                link="/Title"
              />
            </div>
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
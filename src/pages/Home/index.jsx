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
              pretitle='Here is some of my'
              title='Professional Work'
            />
            <div className="grid grid-cols-3 gap-4 justify-center">
              <Card
                imgsrc="/nursa-bill-pay.png"
                title="Billings and Payments"
                description="Targeted micro-projects for Billings and Payments team at Nursa"
                link="/Title"
              />
              <Card
                imgsrc="/nursa-manage-requests.png"
                title="Manage Requests"
                description="A panel that helps schedulers to select which nurse is the best fit for a job"
                link="/Title"
              />
              <Card
                imgsrc="/nursa-resume-imports.png"
                title="Resume Importer"
                description="Automatically fills out user's profile by uploading their resume"
                link="/Title"
              />
              <Card
                imgsrc="/pse.png"
                title="Plataforma Socioeducativa"
                description="Logo and the Design System for the Plataforma Socioeducativa (PSE)"
                link="/Title"
              />
              <Card
                imgsrc="/wodz.png"
                title="Wodz"
                description="Logo for the Music Schools and Studio Wodz"
                link="/Title"
              />
            </div>
          </section>
        </main>
      </div>

    </div>
  )
}
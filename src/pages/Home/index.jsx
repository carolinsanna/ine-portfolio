import { Hero } from './../../components/Hero'
import { Button } from './../../components/Button'
import { Nav } from './../../components/Nav'
import { Title } from '../../components/Title'
import { Card } from './../../components/Card'
import { Footer } from './../../components/Footer'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function Home(){
  const location = useLocation()
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({behavior: 'smooth'})
      }
    }
  }, [location])

  return (
    <div className='flex flex-col items-center w-full h-full dark:bg-ine-gray-900'>
      <div className='fixed top-0 z-40 backdrop-blur transition-colors 
      duration-500 shadow-lg dark:bg-transparent w-full'>
        <Nav/>
      </div>
      <div className="px-10 max-w-screen-xl md:px-20">
        <header className='flex flex-col'>          
          <Hero/>
          <Button
            link='/about'
            value='More About Me'
          />
        </header>
        <main className='flex flex-col items-center'>
          <section id="work" className="flex flex-col items-center gap-8 py-8 sm:py-11 lg:py-14">
            <Title
              pretitle='Here is some of my'
              title='Professional Work'
            />
            <div className="grid gap-5 justify-center sm:grid-cols-2 lg:grid-cols-3">
              <Card
                imgsrc="/nursa-bill-pay-thumb.png"
                title="Billings and Payments"
                description="Targeted micro-projects for Billings and Payments team at Nursa"
                link="/nursapayments"
                alt="Bilings and Payments"
              />
              <Card
                imgsrc="/nursa-manage-requests-thumb.png"
                title="Manage Requests"
                description="A panel that helps schedulers to select which nurse is the best fit for a job"
                link="/Title"
                alt="Manage Requests"
              />
              <Card
                imgsrc="/nursa-resume-imports-thumb.png"
                title="Resume Importer"
                description="Automatically fills out user's profile by uploading their resume"
                link="/Title"
                alt="Resume Importer"
              />
              <Card
                imgsrc="/pse-thumb.png"
                title="Plataforma Socioeducativa"
                description="Logo and the Design System for the Plataforma Socioeducativa (PSE)"
                link="/Title"
                alt="Plataforma Socioeducativa"
              />
              <Card
                imgsrc="/wodz-thumb.png"
                title="Wodz"
                description="Logo for the Music Schools and Studio Wodz"
                link="/Title"
                alt="Wodz"
              />
            </div>
          </section>
          <section className="flex flex-col items-center gap-8 py-8 sm:py-11 lg:py-14">
            <Title
              pretitle='Studies and'
              title='Personal Projects'
            />
            <div className="grid gap-5 justify-center sm:grid-cols-2 lg:grid-cols-3">
              <Card
                imgsrc="/veg-thumb.png"
                title="Guia Veg (WIP)"
                description="Current phase: ideation"
                link="/Title"
                alt="Guia Veg"
              />
              <Card
                imgsrc="/catsis-thumb.png"
                title="CatSis"
                description="An app to find someone to help you with taking care of your cat"
                link="/Title"
                alt="CatSis"
              />
              <Card
                imgsrc="/daily-ui-thumb.png"
                title="Daily UI Challenges"
                description="Daily UI Challenges"
                link="/Title"
                alt="Food / Drink App"
              />
              <Card
                imgsrc="/portfolio-thumb.png"
                title="Portfolio"
                description="Process of making this portfolio"
                link="/Home"
                alt="Portfolio"
              />
              <Card
                imgsrc="/placeholder.png"
                title="Posters"
                description="Some arts"
                link="/Title"
                alt="Credit Card"
              />
            </div>
          </section>
        </main>
        <Footer/>
      </div>
    </div>
  )
}
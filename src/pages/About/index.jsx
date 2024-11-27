import { Nav } from './../../components/Nav'
import { Head } from './../../components/Head'
import { Details } from './../../components/Details'
import { Footer } from './../../components/Footer'

export function About(){
  return (
    <div className="flex flex-col items-center gap-4 w-full h-full dark:bg-ine-gray-900">
      <div
        className="fixed top-0 z-40 backdrop-blur transition-colors 
      duration-500 shadow-lg dark:bg-transparent w-full"
      >
        <Nav />
      </div>
      <div className="px-10 max-w-screen-xl md:px-20">
        <Head />
        <main className="grid gap-10 py-10 lg:py-20 lg:grid-cols-2">
          <h1 className="text-ine-heading-md text-ine-gray-900 dark:text-ine-gray-100 font-bold lg:col-span-2">
            Experience
          </h1>
          <section className="flex flex-col gap-10">
            <h2 className="text-ine-text-lg text-ine-gray-500 uppercase lg:capitalize">
              Academic
            </h2>
            <Details
              title="Computer Science"
              location="Universidade Federal de Pelotas, Brazil"
              date="2011 - 2017"
            />
            <Details
              title="Computer Science"
              location="Bowling Green State University, Ohio, USA"
              date="JAN 2014 - DEC 2014"
            />
            <Details
              title="Fine Arts & Graphic Design"
              location="Universidade Federal de Pelotas, Brazil"
              date="2007 - 2010"
            />
          </section>
          <hr className="border border-ine-gray-300 lg:hidden" />
          <section className='flex flex-col gap-10'>
            <h2 className="text-ine-text-lg text-ine-gray-500 uppercase lg:capitalize">
              Work Experience
            </h2>
            <Details
              title="Product Designer"
              location="Nursa"
              date="Jan 2024 - Oct 2024"
              detail="As a Product Designer, I specialized in end-to-end design processes, 
							including product strategy, prototyping, design system development, 
							and user testing. My approach focused on creating intuitive, 
							user-centered digital solutions that effectively balance functionality 
							and user experience."
            />
						<Details
              title="UI Designer"
              location="Nursa"
              date="Sep 2022 - Jan 2024"
              detail="Driving innovative design solutions through creative ideation, prototyping, 
							and collaborative design system development."
            />
						<Details
              title="User Experience Analyst"
              location="United Nations Development Programme"
              date="Sep 2021 - Sep 2022"
              detail="As the only designer of the project, 
							I helped the manager with product metrics and strategy and 
							I was responsible for all visual production, including the logo, 
							prototyping user interfaces and crafting presentations. Additionally, 
							I developed the foundation of project&apos;s design system."
            />
						<Details
              title="User Experience Designer"
              location="Thoughtworks"
              date="Aug 2020 - Aug 2021"
              detail={<div>The project in which I worked on was for one of the largest gym companies in the U.S. 
								I paired with developers and other designers to mainly work on:
									<ul className='pt-4'>
										<li className='list-disc ml-5'>ideation and prototyping of user interfaces</li>
										<li className='list-disc ml-5'>development and monitoring of A/B experiments</li>
										<li className='list-disc ml-5'>build the company&apos;s design system</li>
									</ul>
								</div>}
            />
						<Details
              title="Developer Consultant"
              location="Thoughtworks"
              date="Feb 2018 - Aug 2020"
              detail={<div>
								<p className='pb-4'>I have worked on three front-end projects, 
									two for a large Latin-American airline company and one for 
									a Brazilian video streaming platform.</p>
								<p>Tech stack: React, Typescript, Node, Web Components, Storybook</p>
							</div>
							}
            />
						<Details
              title="Motion Designer"
              location="Prodigious BR"
              date="Aug 2017 - Feb 2018"
              detail="Development of animated advertisements, 
							including DCO banners, using HTML, CSS and Javascript."
            />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
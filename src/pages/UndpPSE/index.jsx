import {Nav} from '../../components/Nav'
import {Footer} from '../../components/Footer'
export function PSE(){
	return (
		<div className='flex flex-col items-center w-full h-full dark:bg-ine-gray-900'>
			<div className="fixed top-0 z-40 backdrop-blur transition-colors 
      	duration-500 shadow-lg dark:bg-transparent w-full">
      	  <Nav />
      </div>
			<div className="px-10 max-w-screen-xl md:px-20">
				<main className='grid lg:grid-flow-row lg:grid-cols-3 gap-6 mt-20 py-10 md:mt-24 md:py-20 md:gap-10'>
					<div className="flex flex-col gap-2 lg:col-span-2 ">
						<p className="text-ine-text-lg text-ine-gray-300 uppercase">United Nations Development Programme</p>
						<h1 className="text-ine-heading-sm text-ine-gray-900 dark:text-ine-gray-100 md:text-ine-heading-lg font-bold">PSE - Plataforma Socioeducativa</h1>
					</div>
					<div className="flex flex-col gap-6 text-ine-text-md text-ine-gray-900 dark:text-ine-gray-100 md:text-ine-text-lg lg:col-span-2">
							<p>
							This project was an initiative of the National Council of Justice (CNJ) along with the United Nations Development Programme (UNDP). The Fazendo Justiça program aims to overcome the historical challenges that characterize the deprivation of liberty in Brazil. 
							</p>
							<p>
							The Plataforma Socioeducativa (PSE), part of Fazendo Justiça, is a software solution designed to facilitate the control and monitoring of socio-educational measures in Brazil.
							</p>
							<p>
							As the only designer of PSE,  I created the logo and its applications and developed the foundation of project&apos;s design system.
							</p>
							<p>
							The logo represents the adolescent and their transformation through the time when under the social-educational measures.
							</p>
					</div>
					<img src="/pse-01.png" className="w-72 place-self-center lg:place-self-start lg:w-auto lg:row-span-3" alt="PSE Logo"/>
					<img src="/pse-02.png" className='lg:col-span-3' alt=""/>
					<img src="/pse-03.png" className='lg:col-span-3' alt=""/>
				</main>
				<Footer/>	
			</div>
		</div>
	)
}
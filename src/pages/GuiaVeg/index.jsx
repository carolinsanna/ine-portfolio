import { Nav } from  '../../components/Nav'
import { Footer } from  '../../components/Footer'
import {Details} from '../../components/Details'

export function GuiaVeg(){
	return (
    <div className="flex flex-col items-center w-full min-h-screen dark:bg-ine-gray-900">
      <div
        className="fixed top-0 z-40 backdrop-blur transition-colors 
    		duration-500 shadow-lg dark:bg-transparent w-full"
      >
        <Nav />
      </div>
      <div className="flex flex-col justify-between px-10 max-w-screen-xl min-h-screen text-ine-text-md text-ine-gray-900 dark:text-ine-gray-100 md:text-ine-text-lg md:px-20">
        <main className="flex flex-col gap-6 mt-20 py-10 md:mt-24 md:py-20 md:gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-ine-text-lg text-ine-gray-300 uppercase">
              Personal Projects
            </p>
            <h1 className="text-ine-heading-sm md:text-ine-heading-lg font-bold">
              Tudo Vegano (Work in progress)
            </h1>
          </div>
          <div className="grid gap-8 md:gap-10 lg:grid-cols-3">
            <div className="grid col-span-1 gap-8 md:gap-10 lg:col-span-2">
              <p>
                Based on my observations within the vegan community in Porto
                Alegre and my own experience as a vegan in the city, I have
                identified some recurring situations. For instance, I once
                purchased cosmetics at a vegan fair and started following the
                brand on Instagram. However, when I wanted to buy again, I
                couldn&apos;t remember the company&apos;s name. In Brazil,
                although Instagram is the main advertising channel for small
                businesses, its search tool is not ideal for this type of
                situation. Additionally, I notice that in WhatsApp groups
                dedicated to vegans, there is a constant demand for
                recommendations of restaurants, cosmetics, and professionals.
              </p>
              <p>
                In light of this, I decided to conduct market research to
                understand the challenges faced by other users. My hypothesis is
                that a solution that centralizes information and simplifies the
                search process could effectively meet these needs.
              </p>
            </div>
            <img
              src="veggie-thumb.png"
              alt="Tudo vegano - Teu guia vegano em POA"
              className="w-96 place-self-center lg:w-auto lg:place-self-end"
            />
          </div>
          <hr className="border my-6 border-ine-gray-300 lg:my-2" />
          <section className="flex flex-col gap-10">
            <h1 className="text-ine-heading-sm font-bold">
              Data Analysis of Vegan Consumers in Porto Alegre
            </h1>
            <section className="grid gap-6">
              <h2 className="text-ine-heading-xs font-bold">Research Objective</h2>
              <p>
                The goal of this research was to understand the preferences,
                challenges, and needs of vegan and vegetarian consumers in Porto
                Alegre to develop a digital solution that lists vegan
                establishments, facilitating access to relevant information and
                promoting an inclusive community.
              </p>
            </section>
            <section className="grid gap-6">
              <h2 className="text-ine-heading-xs font-bold">Metodology</h2>
              <p>
                Sample: The survey was conducted with 64 participants from Porto
                Alegre and some cities in Brazil.
              </p>
              <p>
                Instrument: An online questionnaire with 25 questions covering
                demographic data, dietary preferences, consumption habits, and
                challenges faced by participants.
              </p>
            </section>
						<section className="grid gap-6">
              <h2 className="text-ine-heading-xs font-bold">Findings</h2>
							<div>
								<h3 className='font-bold'>Demographics and Gender Identity</h3>
								<ul>
									<li className='list-disc ml-5'>Gender diversity: The sample includes female, male, and non-binary participants, highlighting the importance of an inclusive approach in the design of the solution.</li>
									<li className='list-disc ml-5'>Location: Most participants reside in Porto Alegre, with some representation from other cities, indicating the potential for future project expansion.</li>
								</ul>
							</div>
							<div>
								<h3 className='font-bold'>Dietary Preferences and Consumption Habits</h3>
								<ul>
									<li className='list-disc ml-5'>Type of diet: Participants mainly identify as vegan or vegetarian, with some in transition. This underscores the need for clear information about dietary options at listed establishments.</li>
									<li className='list-disc ml-5'>Allergies and intolerances: Lactose and gluten intolerance were mentioned, suggesting the site should allow filtering for these dietary options.</li>
								</ul>
							</div>
							<div>
								<h3 className='font-bold'>Challenges and Needs</h3>
								<ul>
									<li className='list-disc ml-5'>Accessibility to information: Many participants reported difficulties in finding up-to-date information on opening hours and vegan options at establishments.</li>
									<li className='list-disc ml-5'>Negative experiences: Some users mentioned discrimination and a lack of LGBTQIAP+ friendly options, reinforcing the need to create a safe and welcoming environment.</li>
								</ul>
							</div>
            </section>
						<section className="grid gap-6">
              <h2 className="text-ine-heading-xs font-bold">Considerations for Designing the Solution</h2>
							<div>
								<h3 className='font-bold'>Advanced search and filter functionality</h3>
              	<p>
									Implement filters that allow searches by location, diet type, and allergen-free options.
              	</p>
							</div>
							<div>
								<h3 className='font-bold'>Integration of reviews and comments</h3>
              	<p>
									Facilitate the sharing of user experiences and reviews to assist in choosing establishments.              	
								</p>
							</div>
							<div>
								<h3 className='font-bold'>Detailed establishment information</h3>
              	<p>
									Each entry should include details about dietary options, environment, and support for diverse communities.              	
								</p>
							</div>
            </section>
						<section className="grid gap-6">
							<h2 className="text-ine-heading-xs font-bold">Next Steps</h2>
							<ol>
								<li className='list-decimal ml-5'>Prototype Development: Create wireframes and interactive prototypes to test navigation and usability with real users.</li>
								<li className='list-decimal ml-5'>Feedback and Iteration: Conduct usability testing with target users to validate features and gain insights for improvements.</li>
								<li className='list-decimal ml-5'>Gradual Expansion: Start with an MVP focused on Porto Alegre, with plans to expand to other cities based on lessons learned.</li>
							</ol>
						</section>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
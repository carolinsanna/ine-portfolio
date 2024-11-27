export const Head = () => {
  return (
	<header className="grid lg:grid-rows-4 lg:grid-flow-col gap-10 mt-20 py-10 lg:mt-24 lg:pt-20">
		<div className="flex flex-col gap-2 text-center lg:col-span-2 lg:text-start">
			<p className="text-ine-text-lg text-ine-gray-300">Hi there!</p>
			<h1 className="text-ine-heading-md text-ine-gray-900 dark:text-ine-gray-100 font-bold">I&apos;m Inessa Luerce</h1>
		</div>
		
		<img src="/inessa.png" className="w-52 place-self-center lg:place-self-start lg:w-auto lg:order-last lg:row-span-4" alt="Inessa Luerce"/>

		<div className="flex flex-col gap-6 text-ine-text-md text-ine-gray-900 dark:text-ine-gray-100 lg:col-span-2 lg:row-span-3">
			<p>
				An UX/UI Designer based in Porto Alegre, Brazil.
			</p>
			<p>
				I have a background in Fine Arts, Graphic Design and Computer Science. I&apos;m constantly trying to build bridges between design and technology.
			</p>
			<p>
				I believe that great design is not only about aesthetics but also about solving problems and improving the lives of users. My goal is to create seamless and inclusive digital experiences.
			</p>
			<p>
				In my spare time, I like to travel, learn music and play sports.
			</p>
		</div>
	</header>
	)
}

export const Hero = ({hello, description}) => {
  return (
    <div id="hero" className="flex flex-col items-center py-10 px-12">
			<h1 className='text-3xl self-start text-ine-gray-400'>
       {hello}
      </h1>
			<p className='text-6xl text-ine-black-100'>
        {description}
      </p>
			
		</div>
  )
}

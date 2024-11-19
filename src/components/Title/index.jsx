export const Title = ({pretitle, title}) => {
    return (
      <div>
				<p className='text-lg text-center text-ine-gray-100'>{pretitle}</p>
				<h2 className="text-[2.75rem] font-bold text-center">{title}</h2>
			</div>
    )
}
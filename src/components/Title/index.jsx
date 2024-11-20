export const Title = ({pretitle, title}) => {
    return (
      <div>
				<p className='text-center text-ine-heading-xs text-ine-gray-300 uppercase'>{pretitle}</p>
				<h2 className="text-center text-ine-heading-lg text-ine-gray-900 dark:text-ine-gray-100">{title}</h2>
			</div>
    )
}
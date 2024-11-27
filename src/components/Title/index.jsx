export const Title = ({pretitle, title}) => {
    return (
      <div>
				<p className='pb-4 text-center text-ine-text-md lg:text-ine-heading-xs text-ine-gray-300 uppercase'>{pretitle}</p>
				<h1 className="text-center text-ine-heading-sm lg:text-ine-heading-lg text-ine-gray-900 dark:text-ine-gray-100">{title}</h1>
			</div>
    )
}
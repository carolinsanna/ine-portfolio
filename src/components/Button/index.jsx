export const Button = ({link, value}) => {
  return (
		<a href={link} className="self-center">
			<button type="button" className="font-bold bg-ine-gray-900 text-ine-gray-100 hover:bg-ine-gray-300 hover:text-ine-gray-700 rounded-full pointer w-72 h-12 mb-10 dark:bg-white dark:text-ine-gray-900 lg:text-lg lg:h-16 lg:mt-10">{value}</button>
		</a>
	)
}

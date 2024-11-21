export const Button = ({link, value}) => {
  return (
		<form action={link} className="self-center">
			<button type="button" className="font-bold bg-ine-gray-900 text-lg text-ine-gray-100 rounded-full pointer w-72 h-12 dark:bg-white dark:text-ine-gray-900 lg:w-60 lg:h-16 lg:mt-10">{value}</button>
		</form>
	)
}

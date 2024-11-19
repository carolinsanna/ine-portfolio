export const Button = ({link, value}) => {
  return (
		<form action={link} className="self-center">
			<button type="button" className="mt-10 font-bold bg-ine-gray-900 text-lg text-ine-gray-100 rounded-full pointer w-60 h-16 dark:bg-white dark:text-ine-gray-900">{value}</button>
		</form>
	)
}

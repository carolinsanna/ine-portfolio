export const Button = ({link, value}) => {
  return (
		<form action={link} className="self-center">
			<button type="button" className="mt-10 font-bold bg-black text-lg text-ine-gray-200 rounded-full pointer w-60 h-16">{value}</button>
		</form>
	)
}

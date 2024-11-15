export const Button = ({link, value}) => {
  return (
		<form action={link} className="self-center">
			<button type="button" className="py-5 px-11 mt-10 font-bold border-2 bg-black text-lg text-ine-gray-200 rounded-full pointer">{value}</button>
		</form>
	)
}

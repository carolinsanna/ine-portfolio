export const Button = ({link, value}) => {
  return (
		<form action={link}>
			<button type="button" className="py-3 px-1 mt-6 font-bold border-2 border-black rounded-full pointer w-44">{value}</button>
		</form>
	)
}

export const Details = ({title, location, date, detail}) => {
  return (
    <div className="flex flex-col gap-2">
			<h3 className="text-ine-heading-xs text-ine-gray-900 dark:text-ine-gray-100">
				{title}
			</h3>
			<p className="text-ine-md text-ine-gray-500">
				{location}
			</p>
			<p className="text-ine-sm text-ine-gray-900 dark:text-ine-gray-100">
				{date}
			</p>
			<div className="text-ine-sm pt-2 text-ine-gray-900 dark:text-ine-gray-100 lg:text-ine-text-md">
				{detail}
			</div>
		</div>
  )
}
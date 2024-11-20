import ButtonArrow from "../../assets/btn-arrow.svg?react"

export const Card = ({imgsrc, title, description, link}) => {
  return (
    <div className="card pb-5 text-ine-gray-900 border w-full dark:text-ine-gray-100">
      <div>
        <img src={imgsrc} className="h-[220px]"/>
      </div>
      <div className="px-4 py-6">
        <h3 className="font-bold text-ine-heading-sm pb-4">{title}</h3>
        <p>{description}</p>
      </div>
      <form action={link} className="flex justify-center p-4">
        <button type="button" className="flex gap-4 pointer text-ine-link-lg text-ine-gray-500">
          More Info <ButtonArrow className="self-center" />
        </button>
      </form>
    </div>
  )
}

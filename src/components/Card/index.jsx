import ButtonArrow from "../../assets/btn-arrow.svg?react"

export const Card = ({imgsrc, title, description, link, alt}) => {
  return (
    <div className="flex flex-col justify-stretch card pb-5 text-ine-gray-900 border w-full dark:text-ine-gray-100">
      <img src={imgsrc} alt={alt}/>
      <div className="px-5 py-6 grow">
        <h3 className="font-bold text-ine-text-md lg:text-ine-heading-sm pb-4">{title}</h3>
        <p className="text-ine-text-sm lg:text-lg">{description}</p>
      </div>
      <form action={link} className="flex justify-center p-4">
        <button type="button" className="flex gap-4 pointer text-ine-link-md lg:text-ine-link-lg text-ine-gray-900 dark:text-ine-gray-100">
          <p className="self-center">
          More Info
          </p>
          <ButtonArrow className="self-center"/>
        </button>
      </form>
    </div>
  )
}

import ButtonArrow from "../../assets/btn-arrow.svg?react"

export const Card = ({imgsrc, title, description, link, alt}) => {
  return (
    <div className="flex flex-col justify-stretch card text-ine-gray-900 border w-full dark:text-ine-gray-100 lg:pb-0 xl:pb-5">
      <div className="relative h-[220px] overflow-hidden">
        <img src={imgsrc} alt={alt} className="absolute inset-0 w-full h-full object-cover"/>
      </div>
      
      <div className="px-5 pt-6 pb-4 grow">
        <h3 className="font-bold text-ine-text-md xl:text-ine-heading-xs pb-4">{title}</h3>
        <p className="text-ine-text-sm xl:text-md">{description}</p>
      </div>
      <a href={link} className="flex justify-center pt-4 pb-6">
        <button type="button" className="flex gap-4 pointer text-ine-link-md xl:text-ine-link-lg text-ine-gray-900 hover:text-ine-gray-500 dark:text-ine-gray-100">
          <p className="self-center">
          More Info
          </p>
          <ButtonArrow className="self-center"/>
        </button>
      </a>
    </div>
  )
}

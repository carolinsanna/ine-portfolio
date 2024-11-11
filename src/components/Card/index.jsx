import ButtonArrow from "../../assets/btn-arrow.svg?react"

export const Card = ({imgsrc, title, description, link}) => {
  return (
    <div className="card pb-5 border-2 w-1/3">
      <div>
        <img src={imgsrc} />
      </div>
      <div className="px-4 py-6">
        <h3 className="font-bold text-xl pb-4">{title}</h3>
        <p>{description}</p>
      </div>
      <form action={link} className="flex justify-center p-4">
        <button type="button" className="flex gap-4 pointer font-semibold">
          More Info <ButtonArrow />
        </button>
      </form>
    </div>
  )
}

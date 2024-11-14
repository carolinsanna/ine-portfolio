import { Card } from './../../components/Card'
import { Button } from './../../components/Button'

export const Work = () => {
  return (
    <section className="flex flex-col items-center gap-8 py-20">
			<div>
				<p className='text-lg font-bold text-center'>Here is some of my</p>
				<h2 className="text-[2.75rem] font-bold text-center">Professional Work</h2>
			</div>
      <div className="flex gap-4 justify-center">
        <Card
          imgsrc="./../../public/placeholder.png"
          title="Title"
          description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
          link="/Title"
        />
        <Card
          imgsrc="./../../public/placeholder.png"
          title="Title"
          description="Id eros pellentesque facilisi id mollis faucibus commodo enim."
          link="/Title"
        />
        <Card
          imgsrc="./../../public/placeholder.png"
          title="Title"
          description="Nunc, pellentesque velit malesuada non massa arcu."
          link="/Title"
        />
      </div>
			<Button
        link='/Work'
        value='See All'
      />
    </section>
  )
}

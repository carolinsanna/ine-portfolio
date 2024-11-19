import { Card } from './../../components/Card'

export const Work = () => {
  return (    
      <div className="flex gap-4 justify-center">
        <Card
          imgsrc="/placeholder.png"
          title="Title"
          description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
          link="/Title"
        />
        <Card
          imgsrc="/placeholder.png"
          title="Title"
          description="Id eros pellentesque facilisi id mollis faucibus commodo enim."
          link="/Title"
        />
        <Card
          imgsrc="/placeholder.png"
          title="Title"
          description="Nunc, pellentesque velit malesuada non massa arcu."
          link="/Title"
        />
      </div>
  )
}

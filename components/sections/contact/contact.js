import First from "./first"
import Second from "./second"
import Third from "./third"


export default function Contact() {
  return(
    <section className="flex justify-center pt-20">
      <div className="md:w-10/12">
        <h2 className="text-xl font-bold mb-4">Contact</h2>
        <div className="flex md:flex-row flex-col justify-between">
        <First/>
        <Second/>
        <Third/>
        </div>
      </div>
    </section>
  )
}
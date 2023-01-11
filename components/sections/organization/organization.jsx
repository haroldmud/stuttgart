import First from "./first"
import Second from "./second"
import Third from "./third"
import Button from "../../assets/button"

export default function Organization(){
 return(
  <>
    <section className="flex justify-center">
    <div className="flex md:flex-row flex-col gap-10 mt-10">
      <First/>
      <Second/>
      <Third/>
    </div>
  </section>
  <div className="flex justify-center mt-12 ">
    <Button name="STUDY PROGRAMS'WEBPAGES FOR STUDENTS "/>
  </div>
  </>
 )
}
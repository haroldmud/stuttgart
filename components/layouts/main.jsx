import Research from "../sections/research"
import Organization from "../sections/organization/organization"
import News from "../sections/news/news"
import Information from "../sections/information"
import Contact from "../sections/contact/contact"
import Header from "./header"
import Footer from "./footer"

export default function Main() {
  return(
    <main className="">
      <div className="bg-[#004191] flex md:justify-end justify-between md:pr-16 pr-2  md:py-2">
        <a href="#" className="flex gap-2">
        <h4 className="text-white text-xs md:flex flex-col justify-center hidden">University of Stuttgart</h4>
        <h4 className="text-white text-xs ml-4 md:hidden flex flex-col justify-center">Uni</h4>
        <div className="flex flex-col justify-center">
        <img className="w-6" src="/assets/icons/arrow-right.png" alt="arrow-right" />
        </div>
        </a>
        <div className="flex gap-4 ">
          <div className="md:hidden flex flex-col justify-center h-full border-r pt-2 pr-2">
            <div>
              <img className="w-9" src="/assets/icons/language-white.png" alt="" />
            </div>
            <div className="flex justify-center -mt-1 mb-1">
              <img className="w-3" src="/assets/icons/down-white.png" alt="" />
            </div>
          </div>
          <div className="md:hidden flex flex-col justify-center h-full">
            <div>
              <img className="w-6" src="/assets/icons/search-white.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Header/>
      <div className="relative">
        <div className="bg-[#00beff] md:py-32 py-8   md:px-20 px-4">
          <h2 className="font-bold md:text-2xl text-xl">Students</h2>
          <p className="mt-2 md:w-[60%]">Important news, links, documents, and tips for students of the University of Stuttgart: This page offers information on your studies.</p>
          <div className="flex md:hidden py-12">
              <div className="block md:hidden w-fit pl-2 pr-4">
                <img className="w-6" src="/assets/icons/right-black.png" alt="" />
              </div>
              <div className="relative">
              <h2 className=" text-black font-bold underline">INFORMATION FOR RESPECTIVE STUDENTS</h2>
              </div>
              </div>
        </div>
        <div className="absolute -bottom-12 right-3 md:block  hidden z-0">
          <div className="w-fit relative">
            <div className="bg-[#333333] w-fit pr-[5rem] pl-[2rem] py-[8rem] rounded-[50%] font-bold">
              <div className="">
              <h2 className="w-[12rem] text-white">INFORMATION FOR RESPECTIVE STUDENTS</h2>
              <div className="absolute bottom-4 left-[8.5rem] w-fit">
                <img className="w-6" src="/assets/icons/right.png" alt="" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Research/>
      <Organization/>
      <News/>
      <Information/>
      <Contact/>
      <Footer/>
    </main>
  )
}
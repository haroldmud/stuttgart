import Menu from "../assets/menu"
import { useState } from "react"

export default function Header(){
  const [on, setOn] = useState('hidden')
  return(
    <div className="relative">
      <div className="flex justify-between sticky top-0 z-10 bg-white md:px-32 md:pl-auto pl-4 md:py-12 py-4">
        <div className="flex gap-3">
          <div>
            <img className="w-14" src="/favicon.ico" alt="" />
          </div>
          <div className="mt-2">
            <h2 className="font-bold md:text-xl">University of Stuttgart</h2>
            <h3 className="font-thin md:text-auto text-sm">For students</h3>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="md:flex hidden flex-col justify-center h-full">
            <div>
              <img className="w-10" src="/assets/icons/language-learning.png" alt="" />
            </div>
            <div className="flex justify-center">
              <img className="w-4" src="/assets/icons/down-arrow.png" alt="" />
            </div>
          </div>
          <div className="md:flex hidden  flex-col justify-center h-full">
            <div>
              <img className="w-6" src="/assets/icons/search.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col justify-center h-full md:mr-auto mr-2">
            <div>
              <img onClick={(e)=>{setOn('block')}} className="md:w-6 w-8" src="/assets/icons/main-menu.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Menu On={on}/>
    </div>
  )
}
 import { useState } from "react" 
 import Link from 'next/link'

 export default function Menu(props) {
  const [close, setClose] = useState('')
  return(
    <section className={` ${close} ${props.On}`}>
      <div className={`flex justify-between absolute md:w-[75rem] w-full top-0 z-10 bg-[#333333] md:px-32 md:pl-auto pl-4 md:py-12 py-4`}>
        <div className="md:w-[18rem] w-[15rem]">
            <img src="https://www.student.uni-stuttgart.de/system/modules/de.stuttgart.uni.v3.basics/resources/img/svg/logo-inverted-en.svg" alt="" />
          </div>

        <div className="flex gap-4">
          <div className="md:flex hidden  flex-col justify-center h-full">
            <div>
              <img className="w-6" src="/assets/icons/search-white.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col justify-center h-full md:mr-auto mr-2">
            <div>
              <img onClick={()=>{setClose('hidden'); window.location.reload()}} className="md:w-6 w-8" src="/assets/icons/close.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <ul className="bg-[#333333eb] absolute md:top-[9.56rem] top-[4.5rem] text-white w-full z-50 flex flex-col h-[35rem] pl-12">
        <div className="border-b-4 mb-12 border-[#06ace7] w-20"></div>
      <li className="text-2xl py-1 border-b border-dotted border-black hover:bg-[#06ace7]">
        <Link className="md:pr-[50rem]" href="/program">All study programs</Link>
      </li>
      <li className="text-2xl py-1 border-b border-dotted border-black hover:bg-[#06ace7]">
        <Link className="md:pr-[50rem]" href="/startOut">Starting out</Link>
      </li>
      <li className="text-2xl py-1 border-b border-dotted border-black hover:bg-[#06ace7]">
        <Link className="md:pr-[50rem]" href="/study">Study Organization</Link>
      </li>
      <li className="text-2xl py-1 border-b border-dotted border-black hover:bg-[#06ace7]">
        <Link className="md:pr-[50rem]" href="digital">Digital Services</Link>
      </li>
      <li className="text-2xl py-1 border-b border-dotted border-black hover:bg-[#06ace7]">
        <Link className="md:pr-[50rem]" href="/examination">Examination Organization</Link>
      </li>
    </ul>
    </section>
  )
 }
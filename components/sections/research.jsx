import Button from "../assets/button"

export default function Research(){
  return(
    <div className="flex justify-center pt-12 bg-white">
      <div className="bg-[#eeeeee] md:w-38 w-11/12 flex flex-col gap-3 px-6 pt-2 pb-6">
        <h3 className="font-thin">Begriff</h3>
        <div className="border">
          <input className="pl-4 py-3 w-full outline-none placeholder:text-black placeholder:font-thin placeholder:text-sm" type="search" placeholder="Suchen Sie nach Begriffen aus dem Uni-Glossar"/>  
        </div>  
        <Button name="BEGRIFF SUCHEN" style="w-fit"/>
      </div>
    </div>
  )
}
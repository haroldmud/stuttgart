export default function Second(){
    return(
      <div className="bg-white md:w-20r w-[22rem] border-2 border-black md:h-[37rem] md:my-0 my-6">
              <div className="flex justify-center pt-6 ">
                <img className="w-[10rem] h-[10rem] object-fill rounded-[50%]" src="/assets/images/image8.jpg" alt="" />
              </div>
              <h2 className="text-2xl font-bold ml-8 w-[70%] mt-14">Student Counseling Center</h2>
              <div className="bg-white flex flex-col gap-3 py-6 px-4 ">
              <div className="font-thin flex gap-2 ml-5 ">
                <div>
                  <img className="h-5" src="/assets/icons/identified.png" alt="" />
                </div>
                <a href="#" className="underline hover:no-underline">Profile page</a>
              </div>
              <div className="font-thin flex gap-2 ml-5 ">
                <div>
                  <img className="h-5" src="/assets/icons/phone.png" alt="" />
                </div>
                <a href="#" className="underline hover:no-underline">+49 711 685 82133</a>
              </div>
              </div>
            </div>
    )
  }
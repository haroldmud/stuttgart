export default function First(){
  return(
    <div className="bg-white w-20r border-2 border-black">
            <div className="flex justify-center pt-6 ">
              <img className="w-[10rem] h-[10rem] object-fill rounded-[50%]" src="/assets/images/image7.jpg" alt="" />
            </div>
            <h2 className="text-2xl font-bold ml-8 w-[70%] mt-14">Dezernat Internationales</h2>
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
              <a href="#" className="underline hover:no-underline">+49 711 685 68566</a>
            </div>
            <div className="font-thin flex gap-2 ml-5 ">
              <div>
                <img className="h-5" src="/assets/icons/envelope.png" alt="" />
              </div>
              <a href="#" className="underline hover:no-underline">Write e-mail</a>
            </div>
            <div className="font-thin flex gap-2 ml-5 ">
              <div>
                <img className="h-6" src="/assets/icons/info.png" alt="" />
              </div>
              <div className="w-52">
              <a href="#" className="underline hover:no-underline">Office hours (online)</a>
              <span className="">
              : Mon & Wed 10 a.m. to noon; Office hours (on site): Mon & Wed, 2 p.m. to 4 p.m. , Tue & Thur, 10 a.m. to noon
              </span>
              </div>
            </div>
            </div>
          </div>
  )
}
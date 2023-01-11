export default function Third() {
  return(
    <div className="w-[19rem] flex flex-col gap-8">
          
          <div className="group">
            <div>
              <img src="/assets/images/image1.png" alt="" />
            </div>
            <div className="bg-white py-6 px-4 group-hover:bg-[#00beff]">
            <div className="font-bold text-xl">
              <p>
              Latest episode: "Intelligent systems will help us in crises and in the future"
              </p>
            </div>
            <div className="flex font-thin mt-6 gap-2">
              <p className="">Video</p>
              <div className="border-l border-gray-400"></div>
              <p className="">Youtube</p>
            </div>
            </div>
          </div>
          <div className="bg-white hover:bg-[#00beff]  p-4">
            <p className="text-xl font-bold">Impressive research in the field of business administration</p>
            <div className="flex font-thin mt-4 gap-2">
              <p className="">News</p>
              <div className="border-l border-gray-400"></div>
              <p className="">12/21/22</p>
            </div>
          </div>
          <div className="group bg-white ">
            <div className="flex justify-center pt-6 group-hover:bg-[#00beff]">
              <img className="w-[15rem] h-[15rem] object-fill rounded-[50%]" src="/assets/images/image4.jpg" alt="" />
            </div>
            <div className="bg-white py-6 px-4 group-hover:bg-[#00beff]">
            <div className="font-bold text-xl">
              <p>
                Energy savings in November
              </p>
            </div>
            <div className="flex font-thin mt-6 gap-2">
              <p className="">Article</p>
              <div className="border-l border-gray-400"></div>
              <p className="">12/15/22</p>
            </div>
            </div>
          </div>
        </div>
  )
}
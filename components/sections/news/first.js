export default function First() {
  return(
    <div className="w-[19rem] flex flex-col gap-8">
          <div className="bg-white hover:bg-[#00beff]  p-4">
            <p className="text-xl font-bold">Newsricker: Information on the coronavirus</p>
            <div className="flex font-thin mt-4 gap-2">
              <p className="">Article</p>
              <div className="border-l border-gray-400"></div>
              <p className="">11/10/22</p>
            </div>
          </div>
          <div className="group">
            <div>
              <img src="/assets/images/image2.jpg" alt="" />
            </div>
            <div className="bg-white py-6 px-4 group-hover:bg-[#00beff]">
            <div className="font-thin">
              <p>
                Everyone feels sometimes stressed during their
               studies. But what can you do against it? Constanza has a few tips.
              </p>
            </div>
            <div className="flex font-thin mt-6 gap-2">
              <p className="">USUS blog</p>
              <div className="border-l border-gray-400"></div>
              <p className="">1/4/23</p>
            </div>
            </div>
          </div>
          <div className="group bg-white ">
            <div className="flex justify-center pt-6 group-hover:bg-[#00beff]">
              <img className="w-[15rem] h-[15rem] object-fill rounded-[50%]" src="/assets/images/image5.jpg" alt="" />
            </div>
            <div className="bg-white py-6 px-4 group-hover:bg-[#00beff]">
            <div className="font-thin">
              <p>
                Everyone feels sometimes stressed during their
               studies. But what can you do against it? Constanza has a few tips.
              </p>
            </div>
            <div className="flex font-thin mt-6 gap-2">
              <p className="">USUS blog</p>
              <div className="border-l border-gray-400"></div>
              <p className="">1/4/23</p>
            </div>
            </div>
          </div>
        </div>
  )
}
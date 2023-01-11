import First from "./first"
import Second from "./second"
import Third from "./third"
export default function News() {
  return(
    <section className="bg-low-gray mt-20 flex justify-center">
      <div className="w-10/12">
        <h2 className="md:text-3xl text-2xl text-white font-bold mt-12 mb-6">News and events for students</h2>
        <div className="md:flex justify-center hidden gap-6">
          <First/>
          <Second/>
          <Third/>
        </div>
        <div className="flex flex-col md:hidden gap-6">
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
                <img src="/assets/images/image-x.png" alt="" />
              </div>
              <div className="bg-white py-6 px-4 group-hover:bg-[#00beff]">
                <div className="font-bold text- xl">
                    <p>
                    Exhibition in the House of Cultures Stuttgart at the City Hall
                    </p>
                </div>
                <div className="flex font-thin mt-6 gap-2">
                    <p className="">Event</p>
                    <div className="border-l border-gray-400"></div>
                    <p className="">1/12 - 11/25/23</p>
                </div>
              </div>
            </div>
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
        </div>
        <div className="flex justify-center md:mt-20 my-12">
          <div className="flex w-[19rem] justify-between">
            <button className="border border-white w-fit px-6 py-4 text-white font-bold">
              ALL NEWS
            </button>
            <button className="border border-white w-fit px-6 py-4 text-white font-bold">
              ALL EVENTS
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
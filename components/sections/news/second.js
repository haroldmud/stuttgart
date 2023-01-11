export default function Second() {
    return(
      <div className="w-[19rem] flex flex-col gap-8">
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
            <div className="group bg-white ">
              <div className="flex justify-center pt-6 group-hover:bg-[#00beff]">
                <img className="w-[15rem] h-[15rem] object-fill rounded-[50%]" src="/assets/images/image3.jpg" alt="" />
              </div>
              <div className="bg-white py-6 px-4 group-hover:bg-[#00beff]">
              <div className="font-bold text-   xl">
                <p>
                The University of Stuttgart's five most beautiful Instagram pictures
                </p>
              </div>
              <div className="flex font-thin mt-6 gap-2">
                <p className="">Article</p>
                <div className="border-l border-gray-400"></div>
                <p className="">12/21/22</p>
              </div>
              <div className="flex font-thin mt-6 gap-2">
                <p className="">Photo: Addictive Stock / photocase.de</p>   
              </div>
              </div>
            </div>
            <div className="group bg-white ">
              <div className="flex justify-center pt-6 group-hover:bg-[#00beff]">
                <img className="w-[15rem] h-[15rem] object-fill rounded-[50%]" src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/diversity-kalender.JPG?__scale=w:220,h:220,cx:170,cy:0,cw:832,ch:832" alt="" />
              </div>
              <div className="bg-white py-6 px-4 group-hover:bg-[#00beff]">
              <div className="font-bold text-   xl">
                <p>
                Diversity calendar makes diversity visible
                </p>
              </div>
              <div className="flex font-thin mt-6 gap-2">
                <p className="">News</p>
                <div className="border-l border-gray-400"></div>
                <p className="">12/15/22</p>
              </div>
              </div>
            </div>
          </div>
    )
  }
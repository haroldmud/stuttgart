export default function Footer() {
  return(
    <section className="mt-6 bg-[#333333]">
      <div className="">
        <div className="flex md:w-fit md:flex-row flex-col md:gap-32 py-12 md:pl-24">
          <div className="md:w-[12rem] w-[15rem] ml-4 mb-6">
            <img src="https://www.student.uni-stuttgart.de/system/modules/de.stuttgart.uni.v3.basics/resources/img/svg/logo-inverted-en.svg" alt="" />
          </div>
          <ul className="md:flex grid grid-cols-3 md:gap-4 gap-8 md:ml-auto ml-16 md:w-auto w-[70%]">
            <li className="font-thin text-white text-center">
            <div className="border p-6 rounded-[50%] hover:bg-blue-500">
              <img className="w-6" src="/assets/icons/facebook-app-symbol.png" alt="" />
            </div>
            <p>Facebook</p>
            </li>
            <li className="font-thin text-white text-center">
            <div className="border p-6 rounded-[50%] hover:bg-violet-500">
              <img className="w-6" src="/assets/icons/instagram.png" alt="" />
            </div>
            <p>Instagram</p>
            </li>

            <li className="font-thin text-white text-center">
            <div className="border p-6 rounded-[50%] hover:bg-blue-500">
              <img className="w-6" src="/assets/icons/twitter.png" alt="" />
            </div>
            <p>Twitter</p>
            </li>

            <li className="font-thin text-white text-center ">
            <div className="border p-4 rounded-[50%] hover:bg-violet-500">
              <p className="font-bold text-white text-3xl px-1">M</p>
            </div>
            <p>Mastodon</p>
            </li>

            
            <li className="font-thin text-white text-center">
            <div className="border p-6 rounded-[50%] hover:bg-red-500">
            <img className="w-6" src="/assets/icons/youtube-logo.png" alt="" />
            </div>
            <p>Youtube</p>
            </li>

            <li className="font-thin text-white text-center">
            <div className="border p-6 rounded-[50%] hover:bg-blue-500">
            <img className="w-6" src="/assets/icons/linkedin.png" alt="" />
            </div>
            <p>linkedIn</p>
            </li>

            <li className="font-thin text-white text-center md:block hidden">
            <div className="border p-4 rounded-[50%] hover:bg-violet-500">
              <p className="font-bold text-white text-3xl px-1">M</p>
            </div>
            <p>Mastodon</p>
            </li>
            
          </ul>
        </div>
        <div className="flex justify-center -mt-4">
        <div className="font-thin w-fit text-white text-center md:hidden block">
            <div className="border p-4 rounded-[50%] hover:bg-violet-500">
              <p className="font-bold text-white text-3xl px-1">M</p>
            </div>
            <p>Mastodon</p>
        </div>
        </div>
      </div>
      <div className="flex md:justify-center justify-start">
      <div className="text-white flex justify-between md:flex-row flex-col gap-4 w-9/12 my-20 md:pl-auto pl-4">
        <div className="md:text-base w-44  text-xl">
          <h3 className="mb-4 font-bold">Audience</h3>
          <ul className="font-thin flex flex-col gap-1">
            <li className="underline hover:no-underline"><a href="#">Students</a></li>
            <li className="underline hover:no-underline"><a href="#">Employees</a></li>
            <li className="underline hover:no-underline"><a href="#">Alumni and supporters</a></li>
            <li className="underline hover:no-underline"><a href="#">Industry</a> </li>
          </ul>
        </div>
        <div className="md:text-base w-44  text-xl">
          <h3 className="mb-4 font-bold">Formalities</h3>
          <ul className="font-thin flex flex-col gap-1">
            <li className="underline hover:no-underline"><a href="#">Legal notice</a></li>
            <li className="underline hover:no-underline"><a href="#">Pricvacy notice</a></li>
            <li className="underline hover:no-underline"><a href="#">Accessibility</a></li>
            <li className="underline hover:no-underline"><a href="#">Certificates</a> </li>
          </ul>
        </div>
        <div className="md:text-base w-44  text-xl">
          <h3 className="mb-4 font-bold">Services</h3>
          <ul className="font-thin flex flex-col gap-1">
            <li className="underline hover:no-underline"><a href="#">Contact</a></li>
            <li className="underline hover:no-underline"><a href="#">Press</a></li>
            <li className="underline hover:no-underline"><a href="#">Jobs</a></li>
            <li className="underline hover:no-underline"><a href="#">Apply for a doctorate or Postdoc</a> </li>
            <li className="underline hover:no-underline"><a href="#">Uni-shop</a> </li>
          </ul>
        </div>
        <div className="md:text-base w-44  text-xl">
          <h3 className="mb-4 font-bold">Organization</h3>
          <ul className="font-thin flex flex-col gap-1">
            <li className="underline hover:no-underline"><a href="#">Faculties and Institutes</a></li>
            <li className="underline hover:no-underline"><a href="#">Faculties</a></li>
            <li className="underline hover:no-underline"><a href="#">Central admnistration</a></li>
          </ul>
        </div>
      </div>
      </div>
    </section>
  )
}
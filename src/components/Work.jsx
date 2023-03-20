import React, { useEffect } from 'react'
import KetflixImg from '../assets/ketflix.png'
import GalaxyImg from '../assets/glx.png'
import WeatherAppImg from '../assets/weatherApp.png'
import OnlineShopImg from '../assets/online-shop.png'
import BootstrapSite from '../assets/bootstrap.png'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Work = () => {

 

  useEffect(()=> {
    Aos.init();
},[])

  return (
    <div name="work" className=" w-full md:h-screen text-gray-300 bg-[#08192f]">
      <div  className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
          Work
          </p>
          <p className='pt-4'>// Check out some of my recent work</p>
        </div>

    
      {/* Container */}
        <div data-aos="zoom-in" className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {/* Grid Item */}
          <div  style={{ backgroundImage: `url(${KetflixImg})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span  className="text-2xl font-bold text-white tracking-wider">
                React Js App
              </span>
              <div  className="pt-8 text-center">
                <a href="https://netflix-react-f.web.app"  target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Ruslan1344/ketflix" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
           {/* Grid Item */}
           <div style={{ backgroundImage: `url(${GalaxyImg})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Js App
              </span>
              <div className="pt-8 text-center">
                <a href="https://ruslan1344.github.io/galaxy-app" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Ruslan1344/galaxy-app"  target="_blank" >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
           {/* Grid Item */}
           <div style={{ backgroundImage: `url(${WeatherAppImg})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Js App
              </span>
              <div className="pt-8 text-center">
                <a href="https://ruslan1344.github.io/react-weather" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Ruslan1344/react-weather" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
           {/* Grid Item */}
           <div style={{ backgroundImage: `url(${OnlineShopImg})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Js App
              </span>
              <div className="pt-8 text-center">
                <a href="https://ruslan1344.github.io/online-shop/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Ruslan1344/online-shop" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
           {/* Grid Item */}
           <div style={{ backgroundImage: `url(${BootstrapSite})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                Bootstrap Site
              </span>
              <div className="pt-8 text-center">
                <a href="https://ruslan1344.github.io/bootstrap-site/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
           {/* Grid Item */}
           <div style={{ backgroundImage: `url(${KetflixImg})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Js App
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work
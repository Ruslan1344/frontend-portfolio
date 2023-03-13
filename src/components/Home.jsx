import React, { useEffect } from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Typed from 'react-typed'


const Home = () => {




  useEffect(()=> {
    Aos.init();
},[])

  return (
    <div name="home" className="w-full  h-screen bg-[#08192f]">
      {/* Container */}
      <div data-aos="fade-down"  className="max-w-[1000px]  mx-auto px-8 flex flex-col justify-center h-full  ">
        <p className="text-pink-600 ">  Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
        Ruslan Polischuk
        </h1>
       
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
        I am Front<Typed
        className="text-4xl sm:text-7xl font-bold text-[#8892b0]" 
        strings={[ 'Start' , 'End'  ]}
        typeSpeed={140}
        backSpeed={140}
        loop
        />  developer
        </h2>
        
        <p className="text-[#8892b0] py-4 max-w-[700px] ">
        I have been studying frontend for over 1 year,with a focus on developing responsive websites.I am currently looking for my first job as an trainee or junior frontend developer
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:duration-300 ">
              View Work
              <span className="group-hover:rotate-90 duration-500 ">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home
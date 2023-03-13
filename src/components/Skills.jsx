import React, { useEffect } from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Js from '../assets/js.png'
import Git from '../assets/git.png'
import Tw from '../assets/tw.png'
import ReactImg from '../assets/react.png'
import SASS from '../assets/sass.png'
import boots from '../assets/boots.png'

import Aos from 'aos'
import 'aos/dist/aos.css'




const Skills = () => {




  useEffect(()=> {
    Aos.init();
},[])

  return (
    <div name="skills" className="bg-[#08192f] text-gray-300 ">
      {/* Container */}
      <div data-aos="zoom-out" className="max-w-[1000px] mx-auto p-4 flex flex-col  justify-center  w-full h-full ">
        <div>
          <p className="text-4xl  font-bold inline border-b-4 text-left border-pink-600">
          Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className=" w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md  shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md  shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md  shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Js} alt="HTML icon" />
            <p className="my-4">JavaScript</p>
          </div>

          <div className="shadow-md  shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Git} alt="HTML icon" />
            <p className="my-4">GitHub</p>
          </div>

          <div className="shadow-md  shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">React Js</p>
          </div>

          <div className="shadow-md  shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tw} alt="HTML icon" />
            <p className="my-4">Tailwind</p>
          </div>

          <div className="shadow-md  shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={SASS} alt="HTML icon" />
            <p className="my-4">Sass</p>
          </div>

          <div className="shadow-md  shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={boots} alt="HTML icon" />
            <p className="my-4">Bootstrap</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills
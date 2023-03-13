import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from 'react-i18next';

const About = () => {

  const { t, i18n } = useTranslation();


  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  useEffect(()=> {
    Aos.init();
},[])
  return (
    <div name="about" className="w-full h-screen bg-[#08192f] text-gray-300">
      <div data-aos="zoom-in"  data-aos-duration="800"  className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid  sm:grid-cols-2 gap-8 px-4">
          <div className=" sm:text-right text-4xl font-bold ">
            <p> Hi. I'm Ruslan, nice to meet you. Please take a look around.</p>
          </div>

          <div>
            <p className="text-2xl text-gray-500 ">
            I make responsive websites with a focus on cross-browser and mobile devices. I have experience in website development with React.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
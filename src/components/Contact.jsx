import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'



const Contact = () => {

  

    useEffect(()=> {
        Aos.init();
    },[])

  return (
    <div  name='contact' className=' w-full h-screen flex justify-center items-center p-4 bg-[#08192f]'>
        <form data-aos="zoom-in"  method='POST' action="https://getform.io/f/dd35d500-52d3-4776-ab12-7c7c47ea830b" className='flex flex-col max-w-[600px] w-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
               <span className=' flex items-center '>
               <p className='text-gray-300 py-4 text-l  '>// Sumbit the form bellow or shoot me an email - </p>
               <p className='text-pink-600 px-2 '>ruslanpolischuk12@gmail.com</p>
               </span>
            </div>
            <input data-aos="zoom-in-left" data-aos-duration="600" className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input data-aos="zoom-in-right" data-aos-duration="600" className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea data-aos="zoom-in-left" data-aos-duration="600" className='bg-[#ccd6f6] p-2' name="message"  rows="10" placeholder='Messege'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-5 mx-auto flex items-center'> Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact
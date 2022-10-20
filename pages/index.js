
import { useRef } from 'react';
import Image from 'next/image'
import {AiOutlineCheckCircle} from 'react-icons/ai';
import{ FaReact, FaHtml5 } from 'react-icons/fa';
import {SiJavascript, SiFirebase} from'react-icons/si'

import ContactForm from '../components/ContactForm';

export default function Home() {

  const firstRef = useRef()

  const scroll = () => {
    firstRef.current.scrollIntoView({behavior:'smooth'})
  }

  return (
    <div className="mx-auto my-3 bg-gray-50">
        <div className=' py-1 max-w-6xl  rounded-2xl md:grid grid-cols-2 mx-auto md:py-0 '>
            <div className="hero-text flex flex-col mb-0">
              <h2 className="text-5xl text-center px-6 pb-6 text-rose-400 font-semibold md:text-left md:ml-5 md:pb-8 md:pt-2">Jack Sweeny</h2>
              <p className=' mx-4 mt-0 pl-4 text-gray-800 md:mb-auto md:pl-8'>I am a university student who is also a self taught web developer. I am passionate about writing software, traveling, learning new things. I am proficient with HTML, CSS, and Javascript. I primarily work with CMSs such as Sanity, BaaS providers such as Firebase, and Next JS to create dynamic websites. I am also able to create mobile-first websites and landing pages with Tailwind CSS and Bootstrap</p>
              <button onClick={scroll} className='shadow-2xl mx-auto mt-20 mb-10 text-2xl font-bold text-gray-50 py-2 px-8 rounded-3xl bg-rose-400 md:mb-20 hover:bg-rose-500 hover:text-white'>
                Get In Touch
              </button>
            </div>

            <div className="flex bg-black max-h-min mx-3 my-4 rounded-2xl md:grid md:mx-0 md:my-0 md:align-baseline md:object-cover">
              <Image src={"/hero_img.jpg"}
                className="rounded-xl object-cover opacity-75"
                width={900}
                height={900}
                // objectFit={"contain"}
                alt="hero image"
              />
            </div>
           

        </div>
        
        <h2 className='text-center text-4xl text-rose-400 tracking-wide my-6'>Primary Tech Stack</h2>
        <div className="max-w-6xl flex-col items-center md:grid md:grid-cols-3 md:justify-items-center mx-auto gap-x-4 my-4">
          <div className="card shadow-2xl bg-gray-50 mx-auto w-80 my-4 border-2 rounded-2xl md:w-auto md:mx-4 md:my-0 h-96 lg:w-72">
            <h3 className='text-3xl text-primary my-3 font-semibold text-center'>Javascript</h3>
            <div className='flex justify-center'>
              {/* <FaHtml5 className='h-10 w-6 text-gray-900 mx-1' />
              <FaCss3Alt className='h-10 w-6 text-gray-900 ' /> */}
              <SiJavascript className='h-10 w-10 text-gray-900 mx-1' />
            </div>
            <p className='mx-4 my-10 p-3'>Javascript data structures, ES6 as well as knowledge of object oriented programming</p>
          </div>
          <div className="card shadow-2xl rounded-2xl bg-gray-50 mx-auto w-80 my-4  border-red-500 md:w-auto md:mx-4 md:my-0 h-96 lg:w-72">
            <h3 className='text-3xl text-primary my-3 font-semibold text-center'>React JS</h3>
            <div>
              <FaReact className='h-10 w-10 text-gray-900 mx-auto' />
            </div>
            <p className='mx-4 my-10 p-3'>Use of React Hooks, Server Side Rendering and Static Site Genteration with Next Js</p>
          </div>
          <div className="card shadow-2xl rounded-2xl mx-auto w-80 my-4  border-2 md:w-auto md:mx-4 md:my-0 h-96 lg:w-72">
            <h3 className='text-3xl text-primary my-3 font-semibold text-center'>Firebase</h3>
            <div>
              <SiFirebase className='h-10 w-10 text-gray-900 mx-auto' />
            </div>
            <p className='mx-4 my-10 p-3'>Experience with Firebase Products Such as Firestore, Realtime Database, and Firebase Authentication</p>
          </div>
        </div>

        {/* Skills Section */}
        <h2 className='text-center text-4xl text-rose-400 tracking-wide my-6'>Skills</h2>
        <div className='grid grid-cols-12 border  shadow-2xl  border-primary content-center max-w-sm mx-auto rounded-lg'>
          <div className='flex ml-1 col-span-6   h-10  px-3'>
            <AiOutlineCheckCircle className='h-5 w-5 text-primary mx-1 my-auto' />
            <p className='my-auto text-gray-900'>Python</p>
          </div>
          <div className='flex mx-auto col-span-6   h-10  px-3'>
            <AiOutlineCheckCircle className='h-5 w-5 text-primary mx-1 my-auto' />
            <p className='my-auto text-gray-900'>Apis</p>
          </div>
          <div className='flex mx-auto col-span-6   h-10  px-3'>
            <AiOutlineCheckCircle className='h-5 w-5 text-primary mx-1 my-auto' />
            <p className='my-auto text-gray-900'>Responsive Design</p>
          </div>
          <div className='flex mx-auto col-span-6  h-10  px-3'>
            <AiOutlineCheckCircle className='h-5 w-5 text-primary mx-1 my-auto' />
            <p className='my-auto text-gray-900'>CMS</p>
          </div>
         

          
        </div>
        
        {/* Contact Section */}
        <h2  ref={firstRef} className='text-center text-4xl text-rose-400 tracking-wide my-6'>Get In Touch!</h2>
       
        <ContactForm />
    </div>

  
    


  )
}

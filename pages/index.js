
import Image from 'next/image'
import { useState } from 'react'
import {useForm} from '@formspree/react';
import styles from '../styles/Home.module.css';

import{ FaReact, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import {SiJavascript, SiFirebase} from'react-icons/si'
import {IoLogoJavascript} from 'react-icons'
import ContactForm from '../components/ContactForm';

export default function Home() {
 
  return (
    <div className="mx-auto my-3 bg-gray-50">
        <div className='hero bg-gray-200 py-1  rounded-2xl md:grid grid-cols-2 max-w-7xl mx-auto md:py-0 '>
            <div className="hero-text mb-0">
              <h2 className="text-5xl px-6 py-4 text-primary font-semibold"> Hero Text</h2>
              <p className='mx-4 mt-0 pl-4 text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis illo consequatur, voluptates veritatis molestiae eos perferendis incidunt saepe eligendi iusto, quos, natus corporis non veniam! Accusantium necessitatibus perferendis maxime alias? Dolores, pariatur? Soluta dolores at atque odio voluptatibus aperiam sint, autem excepturi, itaque expedita et labore rem accusamus delectus laudantium maiores in similique consequuntur eos. Quas enim repellat necessitatibus.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, tempora facilis! Nulla architecto aperiam iste blanditiis veritatis hic aliquam nemo expedita autem! Sed, hic? Asperiores cupiditate nisi repudiandae inventore iste!</p>
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
        
        <h2 className='text-center text-4xl text-rose-400 my-6'>Tech Stack</h2>
        <div className="max-w-6xl flex-col items-center md:grid md:grid-cols-3 md:justify-items-center mx-auto gap-x-4 my-4">
          <div className="card bg-gray-50 mx-auto w-80 my-4 border-2  rounded-md md:w-auto md:mx-4 md:my-0 h-96 lg:w-72">
            <h3 className='text-3xl text-primary my-3 font-semibold text-center'>Javascript</h3>
            <div className='flex justify-center'>
              {/* <FaHtml5 className='h-10 w-6 text-gray-900 mx-1' />
              <FaCss3Alt className='h-10 w-6 text-gray-900 ' /> */}
              <SiJavascript className='h-10 w-10 text-gray-900 mx-1' />
            </div>
            <p className='mx-4 my-10 p-3 bg-blue-50'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero voluptates magni voluptatem excepturi saepe. Veritatis magnam ab deserunt dolores quae?</p>
          </div>
          <div className="card bg-gray-50 mx-auto w-80 my-4  border-2 md:w-auto md:mx-4 md:my-0 h-96 lg:w-72">
            <h3 className='text-3xl text-primary my-3 font-semibold text-center'>React JS</h3>
            <div>
              <FaReact className='h-10 w-10 text-gray-900 mx-auto' />
            </div>
            <p className='mx-4 my-10 p-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero voluptates magni voluptatem excepturi saepe. Veritatis magnam ab deserunt dolores quae?</p>
          </div>
          <div className="card mx-auto w-80 my-4  border-2 md:w-auto md:mx-4 md:my-0 h-96 lg:w-72">
            <h3 className='text-3xl text-primary my-3 font-semibold text-center'>Firebase</h3>
            <div>
              <SiFirebase className='h-10 w-10 text-gray-900 mx-auto' />
            </div>
            <p className='mx-4 my-10 p-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero voluptates magni voluptatem excepturi saepe. Veritatis magnam ab deserunt dolores quae?</p>
          </div>
        </div>

        {/* Contact Section */}
        <h2 className='text-center text-4xl text-rose-400 my-6'>Contact</h2>
       
        <ContactForm />
    </div>

  
    


  )
}

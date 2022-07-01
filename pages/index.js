
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="mx-auto my-3">
        <div className='hero bg-pink-200  rounded-md md:grid grid-cols-2 max-w-7xl mx-auto'>
            <div className="hero-text">
              <h2 className="text-5xl p-6"> Hero Text</h2>
              <p className='mx-4 my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis illo consequatur, voluptates veritatis molestiae eos perferendis incidunt saepe eligendi iusto, quos, natus corporis non veniam! Accusantium necessitatibus perferendis maxime alias? Dolores, pariatur? Soluta dolores at atque odio voluptatibus aperiam sint, autem excepturi, itaque expedita et labore rem accusamus delectus laudantium maiores in similique consequuntur eos. Quas enim repellat necessitatibus.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, tempora facilis! Nulla architecto aperiam iste blanditiis veritatis hic aliquam nemo expedita autem! Sed, hic? Asperiores cupiditate nisi repudiandae inventore iste!</p>
            </div>

            <div className="img-container mx-4 my-0">
              <Image src={"/../public/hero_img.jpg"}
                width={900}
                height={900}
                objectFit={"contain"}
                alt="hero image"
              />
            </div>
        </div>
        
        <h2 className='text-center text-4xl text-rose-400 my-6'>Tech Stack</h2>
        <div className="max-w-6xl flex-col items-center md:grid md:grid-cols-3 md:justify-items-center mx-auto gap-x-4 my-4">
          <div className="card mx-auto w-80 my-4 border-2 md:w-auto md:mx-4 md:my-0 h-96 lg:w-72">
            <h3 className='text-3xl font-semibold text-center'>Html CSS Javascript</h3>
            <p className='mx-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero voluptates magni voluptatem excepturi saepe. Veritatis magnam ab deserunt dolores quae?</p>
          </div>
          <div className="card mx-auto w-80 my-4  border-2 md:w-auto md:mx-4 md:my-0 h-96 lg:w-72">
            <h3 className='text-3xl font-semibold text-center'>Modern Frontend Frameworks</h3>
            <p className='mx-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero voluptates magni voluptatem excepturi saepe. Veritatis magnam ab deserunt dolores quae?</p>
          </div>
          <div className="card  mx-auto w-80 my-4  border-2 md:w-auto md:mx-4 md:my-0 h-96 lg:w-72">
            <h3 className='text-3xl mx-4 font-semibold text-center'>Firebase and CMS</h3>
            <p className='mx-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero voluptates magni voluptatem excepturi saepe. Veritatis magnam ab deserunt dolores quae?</p>
          </div>
        </div>

        <h2 className='text-center text-4xl text-rose-400 my-6'>Projects</h2>

        {/* Contact Section */}
        <h2 className='text-center text-4xl text-rose-400 my-6'>Contact</h2>
        <div className=" bg-blue-100  mx-auto  max-w-7xl rounded-md mb-80">
            <h3 className='text-2xl text-center py-3'>Get in Touch!</h3>
            <div className='max-w-3xl  md:mx-auto'>
              <div className='ml-3'>
                <label className='block text-sm ml-2 text-gray-700 font-bold'>Email: </label>
                <input type="email" placeholder='email' className='px-4 py-2 outline-none rounded-md' />
              </div>
              

              <div className="mx-3">
                      <label className="block ml-2 text-sm pt-2 text-gray-700 font-bold">Comments:</label>
                      <textarea  id="" rows="10" placeholder="What are you looking for?" className=" resize-none max-h-50 w-full max-w-3xl mx-auto my-2 px-2 py-3 outline-green-200 rounded-xl"></textarea>
              </div>
            </div>
            
        </div>
    </div>

  
    


  )
}

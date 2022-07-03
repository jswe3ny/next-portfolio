import {useForm} from '@formspree/react';
import { useState } from 'react'



const ContactForm = () => {
    const [email, setEmail] = useState("");
    const [comments, setComments] = useState("");

    const [state, submit] = useForm('mzboqnoj');
        if (state.succeeded) {
       return(
        <h2>Thank you for reaching out. We will be in touch!</h2>
       )
  }

    const handleChange = (e) => {
      if (e.target.name == "email") {
        setEmail(e.target.value);
      } else {
        setComments(e.target.value);
      }
    };

    return(
        <form onSubmit={submit} className=" bg-primary  mx-auto  max-w-xl rounded-md">
            <h3 className='text-2xl text-center py-3 text-gray-50 font-extrabold tracking-wider'>Get in Touch!</h3>
            <div className='max-w-3xl  md:mx-auto'>
              <div className='ml-3'>
                <label className='block text-sm ml-2 text-gray-50 tracking-wide font-bold pb-2'>Email: </label>
                <input type="email" name='email' value={email} onChange={handleChange}  placeholder='email' className='px-4 py-2 outline-none rounded-md focus:outline-yellow-400' />
              </div>

              <div className="mx-3">
                      <label className="block ml-2 text-sm pt-2 text-gray-50 tracking-wide font-bold">Tell Me About The Project:</label>
                      <textarea  id="" rows="10" name='comments' value={comments} onChange={handleChange} placeholder="What are you looking for?" className=" resize-none max-h-50 w-full max-w-3xl mx-auto my-2 px-2 py-3 outline-rose-300 rounded-xl"></textarea>
              </div>
              <div className="flex py-3">
                <button  className=" bg-rose-400 mx-auto px-7 py-2 rounded-lg text-gray-100 hover:bg-rose-600 hover:text-black transition duration-400" type='submit' disabled={state.submitting}>
                    Submit
                </button>
              </div>
              
            </div> 
        </form>
    )
}

export default ContactForm;
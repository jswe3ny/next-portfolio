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
      // console.log(e.target.value)
      // console.log(e.target.name)
      if (e.target.name == "email") {
        setEmail(e.target.value);
      } else {
        setComments(e.target.value);
      }
      // console.log(email)
      // console.log(comments)
    };

    // const submit = (e) => {
    //   e.preventDefault();

    //   console.log(": " + email + " :" + comments + "have been submited");
    //   setEmail("");
    //   setComments("");
    // };


    return(
        <form onSubmit={submit} className=" bg-blue-100  mx-auto  max-w-7xl rounded-md">
            <h3 className='text-2xl text-center py-3'>Get in Touch!</h3>
            <div className='max-w-3xl  md:mx-auto'>
              <div className='ml-3'>
                <label className='block text-sm ml-2 text-gray-700 font-bold'>Email: </label>
                <input type="email" name='email' value={email} onChange={handleChange}  placeholder='email' className='px-4 py-2 outline-none rounded-md' />
              </div>

              <div className="mx-3">
                      <label className="block ml-2 text-sm pt-2 text-gray-700 font-bold">Comments:</label>
                      <textarea  id="" rows="10" name='comments' value={comments} onChange={handleChange} placeholder="What are you looking for?" className=" resize-none max-h-50 w-full max-w-3xl mx-auto my-2 px-2 py-3 outline-green-200 rounded-xl"></textarea>
              </div>
              <button type='submit' disabled={state.submitting}>
                  clickMe
              </button>
            </div> 
        </form>
    )
}

export default ContactForm;
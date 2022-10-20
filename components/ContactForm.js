import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import {HashLoader} from 'react-spinners'

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  const [state, Submit] = useForm("mzboqnoj");
  if (state.succeeded) {
    return (
      <div className="mx-2">
        <div className=" flex justify-center items-center bg-gray-200 h-[420px] mx-auto  max-w-xl rounded-md">
        <h2 className="text-2xl p-1 text-center text-primary font-extrabold tracking-wider">
          Thank you for reaching out. We will be in touch!
        </h2>
      </div>
      </div>
      
    );
  }

  const handleChange = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    } else {
      setComments(e.target.value);
    }
  };

  // const validateEmail = (x) => {
  //   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x)) {
  //     return true
  //   } else {
  //     alert("Invalid Email Adress")
  //   }
  // }

  
  return (
    <div className="mx-2">
      {state.submitting ? (
        <div className="min-h-[420px] bg-gray-100 border border-primary flex flex-col justify-center items-center max-w-xl mx-auto rounded-lg">
          {/* <p className="text-4xl absolute z-50 text-rose-500 font-bold tracking-wide">Loading</p> */}
          <HashLoader color="#f43f5e" 
            size={80}
            speedMultiplier={1.1}
          />

        </div>
      ) : (
        <form
          onSubmit={Submit}
          className=" tracking-wider mx-auto  max-w-xl rounded-lg  shadow-2xl "
        >
          <div className="max-w-3xl  md:mx-auto bg-gray-200 border border-gray-700 rounded-lg">
            <div className="ml-3 pt-7">
              <label className="block text-sm ml-2 text-gray-800 tracking-wide font-bold pb-2">
                Email:{" "}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="px-4 py-3 outline-none border-b-2 focus:border-b-primary"
              />

              <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              />
            </div>

            <div className="mx-3">
              <label className="block ml-2 text-sm pt-2 text-gray-800 tracking-wide font-bold">
                Tell Me About The Project:
              </label>
              <textarea
                id=""
                rows="10"
                name="comments"
                value={comments}
                onChange={handleChange}
                placeholder="What are you looking for?"
                className=" resize-none max-h-50 w-full max-w-3xl mx-auto my-2 px-2 py-3 border-b-2 outline-none focus:border-primary"
              ></textarea>

                <ValidationError
                prefix="Message"
                field="comments"
                errors={state.errors}
                />
            </div>
            <div className="flex py-3">
              <button
                className="bg-rose-400 mx-auto mt-3 mb-2 px-9 py-4 text-2xl text-gray-50 rounded-2xl font-bold tracking-wide  hover:bg-rose-600 hover:border-rose-600 hover:text-white transition duration-300"
                type="submit"
                disabled={state.submitting}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;

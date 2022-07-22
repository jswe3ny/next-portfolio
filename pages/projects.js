import Image from "next/image"

export default function projects(){
    // md:grid md:grid-cols-2 md:gap-6 md:justify-items-cente
    return(
        <div className="min-h-screen mb-12">
            <h1 className="text-4xl text-center text-rose-400 my-4">Projects</h1>
            <div className="max-w-3xl mx-8 mb-2 rounded-2xl py-1 bg-gray-200 md:mx-auto md:grid md:grid-cols-12 md:py-0 md:gap-x-0 md:gap-y-0 md:justify-items-center ">
                <div className="project-card col-span-6 bg-gray-100 my-10 mx-auto rounded-3xl md:mx-0 border-2 border-gray-400">
                    <p className="mx-auto my-2 text-xl text-rose-500 font-semibold">Camera Landing Page</p>
                    <div className="h-28 overflow-hidden rounded-lg mx-1 ">
                        <Image
                            width={320}
                            height={180}
                            src={'/Camera_Landing_Page_2.jpg'}
                            alt="thumbnail"
                            objectFit={"cover"}
                        />
                    </div>
                    <button className="mx-auto mt-auto mb-4 px-5 py-2 rounded-md border-2 border-rose-400 text-gray-800 font-bold tracking-wide  hover:bg-rose-600 hover:text-gray-50 hover:border-0 transition duration-300">
                        <a target="_blank" rel="noreferrer" href="https://graceful-kheer-fb2b50.netlify.app/">Visit Site</a>
                    </button>
                </div>

                
            </div>

            
            
            
        </div>
    )   
    }
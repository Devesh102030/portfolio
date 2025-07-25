import { useState } from "react"

export const HeroSection = () =>{

    const skills = [
        {
            heading: "C++"
        },
        {
            heading: "Javascript"
        },
        {
            heading: "Typescript"
        },
        {
            heading: "React"
        },
        {
            heading: "Node JS"
        },
        {
            heading: "Express"
        },
        {
            heading: "Next JS"
        },
        {
            heading: "MongoDB"
        },
        {
            heading: "Postgres"
        },
        {
            heading: "Tailwind CSS"
        },
        {
            heading: "Git"
        },
        {
            heading: "AI"
        }
    ]

    const projects = [
        {
            heading: "Paperfy",
            description: "AI-powered research paper assistant to upload PDFs, get summaries, chat with papers, and take notes",
            path: "./paperfy2.png",
            link:"https://paperfy.vercel.app/"
        },
        {
            heading: "Quizzy",
            description: " AI-driven quiz app with cookie‑based authentication validated by Zod and optimized APIs",
            path: "./quizzy.png",
            link:"https://quizzy-black-nine.vercel.app/"
        },
        {
            heading: "Scribly",
            description: "A blog application with markdown editing, real-time preview, and sub-100ms cold starts using Hono, React, and Prisma",
            path: "./scribly.png",
            link: "https://blog-application-rebir88601-5303s-projects.vercel.app/signup"
        },
        {
            heading: "Chatterbox",
            description: "A real-time chat app using MERN stack and WebSocket with login, message history, and live messaging support",
            path: "./chatterbox.png",
            link: "https://chatter-box-puce-five.vercel.app/"
        },
        {
            heading: "WebScraper App",
            description: "A product details fetcher that extracts and displays information like price, offers, and reviews from a given product link",
            path: "./scraper.png",
            link: "https://web-scraper-app-ashen.vercel.app/"
        },
    ]

    return(
        <section>
            <section className="flex justify-between flex-col gap-4 mt-8 md:gap-32 md:flex-row-reverse">
                <div className="w-20 h-20 rounded-lg">
                    <img className="rounded-lg shadow-sm " src="./logo.jpg" alt="log"/>
                </div>
                <div className="text-accent space-y-4">
                    <h1 className="text-accent text-4xl text-shadow-2xl font-bold">
                        Devesh Paryani
                    </h1>
                    <p className="max-w-xl opacity-80">
                        A passionate full-stack developer and dedicated to building innovative products and web applications while delivering high-quality, client-focused solutions.
                    </p>
                    <div className="flex mt-2 gap-4">
                        <a href="https://drive.google.com/file/d/1irN-YsZqR9woqpdMJV0CkWxcZDRr8HO4/view" target="_blank" className="cursor-pointer bg-accent px-4 py-2 text-black text-shadow-lg rounded-xl">
                            View Resume
                        </a>
                        <button className="cursor-pointer px-4 py-2 rounded-xl text-accent border-1 border-accent">
                            <div className="flex justify-center items-center gap-1">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/>
                                </svg>
                                <a href="https://wa.me/917850084363" target="_blank" rel="noopener noreferrer">
                                    Chat with me
                                </a>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            <section className="flex justify-between mt-16 w-full gap-8">
                <div className="flex flex-col bg-[#27272A80] max-w-md p-4 rounded-xl border border-secondary shadow-sm">
                    <h2 className="text-lg text-shadow-lg font-semibold text-accent">Skills</h2>
                    <div className="flex flex-row flex-wrap items-start justify-start gap-x-2 gap-y-2 mt-4">
                        {
                            skills.map((item,idx)=>(
                                <button key={idx} className="text-accent inline-flex items-center justify-center gap-2 whitespace-nowrap text-[0.9rem] font-medium 
                                disabled:pointer-events-none bg-[#27272A] text-[#1d1d1d]  h-8 px-3 text-xs rounded-xl ">
                                    {item.heading}
                                </button>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-2 lg:min-w-md bg-[#27272A80] max-w-md p-4 rounded-xl border border-secondary shadow-sm">
                    <h2 className="text-lg text-shadow-lg font-semibold text-accent">Let's connect</h2>
                    <div className="flex flex-row flex-wrap items-start justify-start gap-x-4 ">
                        <a href="https://github.com/Devesh102030" target="_blank" className="cursor-pointer flex items-center justify-center h-12 w-12 bg-[#27272A] rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/devesh-paryani-419832275/" target="_blank" className="cursor-pointer flex items-center justify-center bg-[#27272A] h-12 w-12 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <p className="text-accent text-md font-medium">
                            Email
                        </p>
                        <a href="mailto:deveshparyani17@gmail.com" className="hover:underline text-accent opacity-50">
                            deveshparyani17@gmail.com
                        </a>
                    </div>
                    <div>
                        <p className="text-accent">
                            Address
                        </p>
                        <p className="text-accent opacity-50">
                            Jaipur, Rajasthan
                        </p>
                    </div>
                </div>
            </section>

            <section className="mt-16">
                <h2 className="text-accent text-2xl text-shadow-lg font-semibold">Education</h2>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col mt-4">
                        <div className="flex items-center gap-4">
                            <div className="p-4 rounded-full  bg-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="white" height="24" width="24">
                                    <path d="M80 259.8L289.2 345.9C299 349.9 309.4 352 320 352C330.6 352 341 349.9 350.8 345.9L593.2 246.1C602.2 242.4 608 233.7 608 224C608 214.3 602.2 205.6 593.2 201.9L350.8 102.1C341 98.1 330.6 96 320 96C309.4 96 299 98.1 289.2 102.1L46.8 201.9C37.8 205.6 32 214.3 32 224L32 520C32 533.3 42.7 544 56 544C69.3 544 80 533.3 80 520L80 259.8zM128 331.5L128 448C128 501 214 544 320 544C426 544 512 501 512 448L512 331.4L369.1 390.3C353.5 396.7 336.9 400 320 400C303.1 400 286.5 396.7 270.9 390.3L128 331.4z"/>
                                </svg>
                            </div>
                            <div className="flex flex-col text-accent">
                                    <h3 className="font-semibold">The LNM Institute of Information Technology</h3>
                                    <p className="text-sm opacity-80">Bachelor of Technology in Electronics and Communication Engineering</p>
                                    <p className="text-sm opacity-80">CGPA: 8.27/10</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-accent opacity-80">
                        Oct 2022-Present
                    </div>
                </div>
            </section>

            <section className="mt-16">
                <h2 className="text-accent text-2xl text-shadow-lg font-semibold">Projects</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {
                        projects.map((item)=>(
                            <a href={item.link} target="_blank" key={item.heading} className="bg-secondary p-4 block rounded-xl max-w-[400px] shadow-sm">
                                <img src={item.path} className="w-[400px]" loading="lazy" alt={item.heading}/>
                                <h2 className="text-accent font-semibold mt-3">{item.heading}</h2>
                                <p className="text-accent opacity-80 my-3">{item.description}</p>
                            </a>
                        ))
                    }
                </div>
            </section>


            <footer className="mt-20">
                <p className="text-accent text-sm">Copyright © Devesh Paryani</p>
            </footer>

        </section>
        
    )
}


const RecieveMessage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
        <div className="fixed bottom-6 right-6 z-50">
            <button className="cursor-pointer bg-secondary text-white px-2 py-2 rounded-full"
            onClick={() => setOpen(true)}>
                <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/>
                </svg>
                
            </button>
        </div>

      {/* Modal / Dialog */}
      {open && (
        <div className="fixed bottom-2 right-2 z-50 flex items-center justify-center bg-secondary">
          <div className="bg-secondary p-6 rounded-xl shadow-lg w-full max-w-md relative">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              &times;
            </button>

            {/* Form */}
            <form
              action="https://formspree.io/f/xeozgzvp"
              method="POST"
              className="flex flex-col gap-4"
            >
              <div className="bg-primary/30 rounded-lg py-4 px-4">
                <p className="text-accent text-md">Hello! I'm Devesh, How can I help you today?</p>
              </div>
              <div>
                <label className="block text-sm font-medium">Your message:</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
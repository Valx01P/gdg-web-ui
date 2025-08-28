'use client'

import Image from "next/image"

const EventOverview = () => {

  const eventName = "305 Hackathon Fall 2025 - Smart City Innovation"
  const eventLocation = "1501 Biscayne Blvd suite 501, 1501 Biscayne Boulevard, Miami, 33132"
  const eventDescription = "305 Hack Fall 2025 is Miami's signature hackathon, officially part of the Major League Hacking (MLH) 2026 Season and a flagship event of the Hack University Initiative.\n\nThis year marks a milestone: 305 Hack is officially hosted by the Google Developer Group (GDG) at FIU, alongside Code Crunch Global, Raspberry Pi Code Crunch, and CAHSI @ FIU."

  return (
    <section className="flex justify-center items-center w-full h-auto bg-white">
      <div className="flex flex-shrink justify-between items-center flex-col w-[1170px] h-full pb-8">
        <div className="px-4 py-8">
          <Image
            className="rounded-xl"
            src="/codecrunch_banner.webp"
            alt="menu"
            width={1140}
            height={285}
          />
        </div>

        <div className="flex flex-col gap-4 px-4">
          <h1 className="font-bold text-[44px]">{eventName}</h1>
          <div>
            <p>{eventLocation}</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="underline">GDG on Campus Florida International University</p>
            {eventDescription.split('\n\n').map((paragraph, index) => (
              <p key={index} className={index > 0 ? 'mt-[-2]' : ''}>
                {paragraph}
              </p>
            ))}          
          </div>
          <div className="my-4">
            <ul className="flex justify-baseline items-center gap-3">
              {/* Discord */}
              <a href="https://hacksatfiudiscord.vercel.app/" className="border border-black rounded-full p-2 transition-transform duration-300 hover:scale-110">
                <Image
                  src="/discord.svg"
                  alt="menu"
                  width={18}
                  height={18}
                />
              </a>
              {/* Instagram */}
              <a href="https://www.linkedin.com/company/code-crunch-club" className="border border-black rounded-full p-2 transition-transform duration-300 hover:scale-110">
                <Image
                  src="/instagram.svg"
                  alt="menu"
                  width={18}
                  height={18}
                />
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/code-crunch-club" className="border border-black rounded-full p-[9px] transition-transform duration-300 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-gray-900 cursor-pointer"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24V7h5v17H0zm7.5 0V7h4.8v2.5h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-7.75c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.97 2.01-2.97 4.09V24h-5z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/@CODECRUNCH-CS-FIU-EDU" className="border border-black rounded-full text-gray-900 p-[8px] transition-transform duration-300 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="cursor-pointer"
                >
                  <path d="M23.5 6.2c-.3-1.2-1.2-2.1-2.4-2.4C19.1 3.3 12 3.3 12 3.3s-7.1 0-9.1.5c-1.2.3-2.1 1.2-2.4 2.4C0 8.2 0 12 0 12s0 3.8.5 5.8c.3 1.2 1.2 2.1 2.4 2.4 2 .5 9.1.5 9.1.5s7.1 0 9.1-.5c1.2-.3 2.1-1.2 2.4-2.4.5-2 .5-5.8.5-5.8s0-3.8-.5-5.8zM9.5 15.5v-7l6.5 3.5-6.5 3.5z"/>
                </svg>
              </a>
              {/* Email */}
              <a href="" className="border border-black rounded-full p-[9px] transition-transform duration-300 hover:scale-110">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16">
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.2 1C.937 1 0 2.066 0 3.293c0 .037 0 .073.003.11A.76.76 0 0 0 0 3.464v8.572C0 13.348 1.018 14.5 2.361 14.5H13.64c1.343 0 2.361-1.152 2.361-2.464V3.464c0-.02 0-.041-.002-.062l.002-.11C16 2.067 15.063 1 13.8 1H2.2Zm7.252 6.458-.028.02c-.868.59-1.895.591-2.764.001l-.053-.038a.75.75 0 0 0-.069-.05l-4.677-3.4c-.26-.228-.361-.456-.361-.698 0-.488.352-.793.7-.793h11.6c.348 0 .7.305.7.793 0 .242-.1.485-.346.83l-4.67 3.312a.757.757 0 0 0-.032.023Zm.315 1.553L13.516 13H2.484L6.26 8.983a3.838 3.838 0 0 0 3.508.028Zm4.733 2.846V5.716l-3.463 2.456 3.463 3.685Zm-13 0L5.003 8.13 1.5 5.583v6.274Z" fill="currentColor" />
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventOverview
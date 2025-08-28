import Image from "next/image"

const Footer = () => {
  const linkNames = [
    "About GDG",
    "Chapters",
    "Upcoming Events",
    "Participation Terms",
    "Privacy",
    "Terms"
  ]
  const linkUrls = [
    "https://developers.google.com/community",
    "https://gdg.community.dev/chapters/",
    "https://gdg.community.dev/events/",
    "https://gdg.community.dev/participation-terms/",
    "https://policies.google.com/privacy",
    "https://policies.google.com/terms"
  ]

  return (
    <footer className="flex justify-center items-center flex-col w-full h-auto bg-white border-t border-gray-200">
      <div className="h-full flex flex-col w-[1170px] flex-shrink mx-4 justify-center items-center">

        <div className="flex flex-row w-full px-4 min-h-[161px] mt-12">
          <div className="flex justify-baseline items-baseline w-1/3 p-4">
            <div className="w-full">
              <Image
                className="cursor-pointer transition-transform duration-300 hover:scale-110"
                src="/gdg_logo.svg"
                alt="menu"
                width={196}
                height={22}
              />
            </div>
          </div>

          <div className="flex justify-baseline items-baseline flex-col w-1/3 p-4">
            <p className="w-full text-gray-700">Quick Links</p>
            <ul className="flex flex-col gap-1 leading-none mt-2 text-[14px] text-gray-900">
              {linkNames.map((name, idx) => (
                <li key={idx} className="flex items-center gap-1">
                  <a
                    href={linkUrls[idx]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-[#1973e8] cursor-pointer"
                  >
                    {/* Hollow chevron */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-600"
                    >
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                    <span>{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social icons */}
          <div className="flex justify-baseline items-baseline flex-col w-1/3 p-4 gap-3">
            <p className="w-full text-gray-700">Social</p>
            <ul className="flex justify-baseline items-center flex-row w-full gap-1.5">
              {/* Discord */}
              <a href="https://hacksatfiudiscord.vercel.app/" className="rounded-full p-2 transition-transform duration-300 hover:scale-110">
                <Image src="/discord.svg" alt="discord" width={18} height={18} />
              </a>
              {/* Instagram */}
              <a href="https://www.linkedin.com/company/code-crunch-club" className="rounded-full p-2 transition-transform duration-300 hover:scale-110">
                <Image src="/instagram.svg" alt="instagram" width={18} height={18} />
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/code-crunch-club" className="rounded-full p-2 transition-transform duration-300 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-gray-900 cursor-pointer"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24V7h5v17H0zm7.5 0V7h4.8v2.5h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-7.75c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.97 2.01-2.97 4.09V24h-5z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/@CODECRUNCH-CS-FIU-EDU" className="rounded-full p-2 transition-transform duration-300 hover:scale-110 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-gray-900 cursor-pointer relative bottom-[-1px] left-[-1px]"
                >
                  <path d="M23.5 6.2c-.3-1.2-1.2-2.1-2.4-2.4C19.1 3.3 12 3.3 12 3.3s-7.1 0-9.1.5c-1.2.3-2.1 1.2-2.4 2.4C0 8.2 0 12 0 12s0 3.8.5 5.8c.3 1.2 1.2 2.1 2.4 2.4 2 .5 9.1.5 9.1.5s7.1 0 9.1-.5c1.2-.3 2.1-1.2 2.4-2.4.5-2 .5-5.8.5-5.8s0-3.8-.5-5.8zM9.5 15.5v-7l6.5 3.5-6.5 3.5z"/>
                </svg>
              </a>
              {/* Email */}
              <a href="mailto:example@email.com" className="rounded-full p-2 transition-transform duration-300 hover:scale-110 relative ">
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="text-gray-900 cursor-pointer relative bottom-[-1px] left-[-1px]"
                >
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.2 1C.937 1 0 2.066 0 3.293c0 .037 0 .073.003.11A.76.76 0 0 0 0 3.464v8.572C0 13.348 1.018 14.5 2.361 14.5H13.64c1.343 0 2.361-1.152 2.361-2.464V3.464c0-.02 0-.041-.002-.062l.002-.11C16 2.067 15.063 1 13.8 1H2.2Zm7.252 6.458-.028.02c-.868.59-1.895.591-2.764.001l-.053-.038a.75.75 0 0 0-.069-.05l-4.677-3.4c-.26-.228-.361-.456-.361-.698 0-.488.352-.793.7-.793h11.6c.348 0 .7.305.7.793 0 .242-.1.485-.346.83l-4.67 3.312a.757.757 0 0 0-.032.023Zm.315 1.553L13.516 13H2.484L6.26 8.983a3.838 3.838 0 0 0 3.508.028Zm4.733 2.846V5.716l-3.463 2.456 3.463 3.685Zm-13 0L5.003 8.13 1.5 5.583v6.274Z" fill="currentColor" />
                </svg>
              </a>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center w-full p-4">
          <div className="flex justify-around items-center flex-row w-full text-[14px] px-4">
            <p className="flex justify-baseline w-full">
              <span className="relative top-[2px] text-[9px] mr-[3px]">©</span> 2025 Google<span className="px-1">∙</span><a href="https://gdg.community.dev/events/">Upcoming Events</a>
            </p>
            <p className="flex flex-row justify-center items-center text-nowrap gap-1">
              Powered by{" "}
              <a href="https://ba-00001.github.io/codecrunchclub/" className="transition-transform duration-300 hover:scale-110">
                <Image
                  className="cursor-pointer"
                  src="/codecrunch_logo.png"
                  alt="menu"
                  width={75}
                  height={75}
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

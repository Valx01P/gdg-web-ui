import Image from "next/image"

const Footer = () => {
  return (
    <footer className="flex justify-center items-center flex-col w-full h-auto bg-white border-t border-gray-200">
      <div className="h-full flex flex-col w-[1170px] flex-shrink mx-4 justify-center items-center">

        <div className="flex flex-row w-full px-4 min-h-[161px] mt-12">
          <div className="flex justify-baseline items-baseline w-1/3 p-4">
            <div className="w-full">
              <Image
                className="cursor-pointer"
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
              {[
                "About GDG",
                "Chapters",
                "Upcoming Events",
                "Participation Terms",
                "Privacy",
                "Terms",
              ].map((link, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-1 cursor-pointer hover:text-[#1973e8]"
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
                  <span>{link}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social icons */}
          <div className="flex justify-baseline items-baseline flex-col w-1/3 p-4 gap-3">
            <p className="w-full text-gray-700">Social</p>
            <ul className="flex justify-baseline items-center flex-row w-full gap-1.5">
              
              {/* Twitter/X */}
              <li className="rounded-full p-2">
                <svg
                  viewBox="0 0 16 17"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className="text-gray-600 hover:text-gray-800 cursor-pointer"
                  fill="currentColor"
                >
                  <path d="M9.51664 6.79444L15.3449 0.0195312H13.9638L8.90311 5.90209L4.86115 0.0195312H0.199219L6.31146 8.915L0.199219 16.0195H1.58041L6.92464 9.80735L11.1933 16.0195H15.8552L9.5163 6.79444H9.51664ZM7.62491 8.99337L7.00561 8.10758L2.07808 1.05927H4.19951L8.17609 6.74748L8.79538 7.63327L13.9645 15.0271H11.843L7.62491 8.99371V8.99337Z" />
                </svg>
              </li>

              {/* LinkedIn */}
              <li className="rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-gray-500 hover:text-gray-800 cursor-pointer"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24V7h5v17H0zm7.5 0V7h4.8v2.5h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-7.75c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.97 2.01-2.97 4.09V24h-5z"/>
                </svg>
              </li>

              {/* YouTube */}
              <li className="rounded-full p-2 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-gray-500 hover:text-gray-800 cursor-pointer relative bottom-[-1px] left-[-1px]"
                >
                  <path d="M23.5 6.2c-.3-1.2-1.2-2.1-2.4-2.4C19.1 3.3 12 3.3 12 3.3s-7.1 0-9.1.5c-1.2.3-2.1 1.2-2.4 2.4C0 8.2 0 12 0 12s0 3.8.5 5.8c.3 1.2 1.2 2.1 2.4 2.4 2 .5 9.1.5 9.1.5s7.1 0 9.1-.5c1.2-.3 2.1-1.2 2.4-2.4.5-2 .5-5.8.5-5.8s0-3.8-.5-5.8zM9.5 15.5v-7l6.5 3.5-6.5 3.5z"/>
                </svg>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex justify-center items-center w-full p-4">
          <div className="flex justify-around items-center flex-row w-full text-[14px] px-4">
            <p className="flex justify-baseline w-full">
              © 2025 Google<span className="px-1">∙</span>Upcoming Events
            </p>
            <p className="flex flex-row justify-center items-center text-nowrap gap-2">
              Powered by{" "}
              <span>
                <Image
                  className="cursor-pointer"
                  src="/codecrunch_logo.png"
                  alt="menu"
                  width={66}
                  height={66}
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

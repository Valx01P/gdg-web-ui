'use client'

import Image from "next/image"
import { useState } from 'react'

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <nav className="flex justify-center items-center w-full h-[70px] bg-white">
      <div className="flex flex-shrink justify-between items-center w-[1170px] h-full px-4">
        {/* MOBILE */}
        {/* <div className="flex justify-center items-center max-[991px]:hidden">
          <Image
            className="cursor-pointer transition-transform duration-300 hover:scale-110 filter invert"
            src="/menu.svg"
            alt="menu"
            width={26}
            height={26}
            onClick={() => toggleMobileMenu()}
           />
        </div> */}

        <div className="flex justify-center items-center h-full">
          <Image
            className="cursor-pointer"
            src="/gdg_logo.svg"
            alt="menu"
            width={240}
            height={30}
          />
        </div>

        <ul className="flex justify-center items-center h-full text-[14px] whitespace-nowrap relative text-gray-600">
          {/* Dropdown Item */}
          <li className="relative flex items-center" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <button className="relative px-5 py-3 hover:text-gray-700 cursor-pointer">
              <span>About GDG</span>
              <span
                className="absolute top-[21px] -translate-y-1/2 right-[10px] w-0 h-0 
                          border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-600"
              ></span>
            </button>



            {isDropdownOpen && (
              <div className="absolute top-[40px] left-[-145px] mt-2 w-[260px] max-h-[260px] border border-gray-200 bg-white rounded-md p-2 flex flex-col z-50">
                <a className="py-2 px-3 hover:text-gray-700 cursor-pointer">About</a>
                <a className="py-2 px-3 hover:text-gray-700 cursor-pointer">Community Guidelines</a>
                <a className="py-2 px-3 hover:text-gray-700 cursor-pointer">Get Certified: Community Edition</a>
                <a className="py-2 px-3 hover:text-gray-700 cursor-pointer">I/O Extended</a>
                <a className="py-2 px-3 hover:text-gray-700 cursor-pointer">Stories</a>
                <a className="py-2 px-3 hover:text-gray-700 cursor-pointer">Organizers</a>
              </div>
            )}
          </li>
          <li className="flex justify-center items-center hover:text-gray-700 cursor-pointer">
            <a className="p-3">Chapters</a>
          </li>
          <li className="flex justify-center items-center hover:text-gray-700 cursor-pointer">
            <a className="p-3">Upcoming Events</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
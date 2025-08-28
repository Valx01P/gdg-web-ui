'use client'

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from 'react'

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isDropdownOpen])

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

        <Link href="/" className="flex justify-center items-center h-full">
          <Image
            className="cursor-pointer"
            src="/gdg_logo.svg"
            alt="menu"
            width={240}
            height={30}
          />
        </Link>

        <ul className="flex justify-center items-center h-full text-[14px] whitespace-nowrap relative text-gray-600">
          {/* Dropdown Item */}
          <li
            ref={dropdownRef}
            className="relative flex items-center"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <button className="relative px-5 py-3 hover:text-gray-700 cursor-pointer">
              <span>About GDG</span>
              <span
                className="absolute top-[21px] -translate-y-1/2 right-[10px] w-0 h-0 
                          border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-600"
              ></span>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-[40px] left-[-145px] mt-2 w-[260px] max-h-[260px] border border-gray-200 bg-white rounded-md p-2 flex flex-col z-50">
                <a href="https://developers.google.com/community/gdg" className="py-2 px-3 hover:text-gray-700 cursor-pointer">About</a>
                <a href="https://developers.google.com/community-guidelines" className="py-2 px-3 hover:text-gray-700 cursor-pointer">Community Guidelines</a>
                <a href="https://gdg.community.dev/get-certified/" className="py-2 px-3 hover:text-gray-700 cursor-pointer">Get Certified: Community Edition</a>
                <a href="https://gdg.community.dev/ioextended/" className="py-2 px-3 hover:text-gray-700 cursor-pointer">I/O Extended</a>
                <a href="https://developers.google.com/community/gdg/stories" className="py-2 px-3 hover:text-gray-700 cursor-pointer">Stories</a>
                <a href="https://developers.google.com/community" className="py-2 px-3 hover:text-gray-700 cursor-pointer">Organizers</a>
              </div>
            )}
          </li>
          <li className="flex justify-center items-center hover:text-gray-700 cursor-pointer">
            <a href="https://gdg.community.dev/chapters/" className="p-3">Chapters</a>
          </li>
          <li className="flex justify-center items-center hover:text-gray-700 cursor-pointer">
            <a href="https://gdg.community.dev/events/#/list" className="p-3">Upcoming Events</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav

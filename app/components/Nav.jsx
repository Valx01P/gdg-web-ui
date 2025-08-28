'use client'

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from 'react'

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const mobileMenuRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false)
        setIsMobileDropdownOpen(false)
      }
    }

    if (isDropdownOpen || isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isDropdownOpen, isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <nav className="flex justify-center items-center w-full h-[70px] bg-white">
        <div className="flex flex-shrink justify-between items-center w-[1170px] h-full px-4">
         
          <Link href="/" className="flex justify-center items-center h-full">
            <Image
              className="cursor-pointer"
              src="/gdg_logo.svg"
              alt="menu"
              width={240}
              height={30}
            />
          </Link>

          {/* MOBILE */}
          <div className="flex justify-center items-center min-[770px]:hidden">
            <Image
              className="cursor-pointer"
              src="/menu.svg"
              alt="menu"
              width={26}
              height={26}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             />
          </div>

          <ul className="flex justify-center items-center h-full text-[14px] whitespace-nowrap relative text-gray-600 max-[770px]:hidden">
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

      {/* MOBILE MENU OVERLAY */}
      <div 
        className={`fixed top-0 right-0 h-full w-[320px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 min-[770px]:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        ref={mobileMenuRef}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <Image
            className="cursor-pointer"
            src="/x.svg"
            alt="close"
            width={24}
            height={24}
            onClick={() => {
              setIsMobileMenuOpen(false)
              setIsMobileDropdownOpen(false)
            }}
          />
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col px-6 py-4">
          {/* About GDG Dropdown */}
          <div className="mb-4">
            <button 
              className="flex justify-between items-center w-full text-left text-gray-600 hover:text-gray-700 pb-4 text-[14px]"
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            >
              <span className="relative">About GDG
                <span
                  className="absolute top-[9px] -translate-y-1/2 right-[-10px] w-0 h-0
                            border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-600"
                ></span>
              </span>
            </button>
            
            {/* Mobile Dropdown Content */}
            <div className={`overflow-hidden transition-all duration-300 ${
              isMobileDropdownOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="pl-4 pb-2 flex flex-col">
                <a href="https://developers.google.com/community/gdg" className="py-3 text-gray-600 hover:text-gray-700 text-[14px]">About</a>
                <a href="https://developers.google.com/community-guidelines" className="py-3 text-gray-600 hover:text-gray-700 text-[14px]">Community Guidelines</a>
                <a href="https://gdg.community.dev/get-certified/" className="py-3 text-gray-600 hover:text-gray-700 text-[14px]">Get Certified: Community Edition</a>
                <a href="https://gdg.community.dev/ioextended/" className="py-3 text-gray-600 hover:text-gray-700 text-[14px]">I/O Extended</a>
                <a href="https://developers.google.com/community/gdg/stories" className="py-3 text-gray-600 hover:text-gray-700 text-[14px]">Stories</a>
                <a href="https://developers.google.com/community" className="py-3 text-gray-600 hover:text-gray-700 text-[14px]">Organizers</a>
              </div>
            </div>
          </div>

          {/* Other Menu Items */}
          <a href="https://gdg.community.dev/chapters/" className="pb-4 text-gray-600 hover:text-gray-700 text-[14px]">
            Chapters
          </a>
          <a href="https://gdg.community.dev/events/#/list" className="py-4 text-gray-600 hover:text-gray-700 text-[14px]">
            Upcoming Events
          </a>
        </div>
      </div>
    </>
  )
}

export default Nav
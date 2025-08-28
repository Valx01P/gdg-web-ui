'use client'
import { useState } from "react"

const QnaRow = ({ question, answer }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full">
      {/* Question */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-center gap-2 w-auto text-center transition-colors duration-300 hover:cursor-pointer hover:text-[#1973e8] ${
          open ? "underline" : ""
        }`}
      >
        {/* Chevron (right → down) */}
        <span
          className={`transform transition-transform duration-300 flex-shrink-0 ${
            open ? "rotate-90" : "rotate-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
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
        </span>
        <span className="break-words">{question}</span>
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-96 mt-2 border-l-2 border-gray-400 pl-3 max-[770px]:pl-4" : "max-h-0"
        }`}
      >
        <p className="text-gray-700 break-words">{answer}</p>
      </div>
    </div>
  )
}

export default QnaRow
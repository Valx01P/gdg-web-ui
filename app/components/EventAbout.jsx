'use client'

import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const EventAbout = () => {
  const [showAllThemes, setShowAllThemes] = useState(false)
  
  const themes = [
    "Build with AI",
    "Career Fair",
    "Cloud",
    "Data",
    "Design",
    "Firebase",
    "Get Certified",
    "Google Workspace",
    "Machine Learning",
    "Vertex AI"
  ]

  const visibleThemes = showAllThemes ? themes : themes.slice(0, 5)

  const eventAbout = `
Hackathon Website: [305hackfall2025.vercel.app](https://305hackfall2025.vercel.app)  

Official Registration: [codercrunchglobalform-no3.vercel.app](https://codercrunchglobalform-no3.vercel.app)  
Ticket Confirmation: [hackuniversity.vercel.app](https://hackuniversity.vercel.app)  
Waitlist Verification: [hackuniversity.vercel.app](https://hackuniversity.vercel.app)  

Over the course of three days, students, developers, designers, and entrepreneurs will convene to develop transformative projects aimed at shaping the cities of tomorrow. Participants will have the opportunity to access mentorship, attend workshops, obtain sponsor certifications, and compete for prizes across four innovation tracks:

📌 The Digital Platform Challenge will commence on September 19.

🛠️ **#01 Smart Infrastructure & Engineering**  
- Developing the physical and digital backbone of smart cities through advanced engineering solutions.  
- Focus Areas Smart Healthcare Systems, Energy Grid Management, IoT Sensor Networks, Sustainable Engineering, Biomedical & Civil Engineering, Cloud Infrastructure, Data Analytics.

💻 **#02 Digital City Platforms & Applications**  
- Creating sophisticated digital experiences and platforms that connect citizens with their communities.  
- Focus Areas: AI City Services, Citizen Mobile Apps, Smart Payments, Government Digital Services, Gamification, UX/UI, Web & Mobile Development, Fintech.

🦄 **#03 Smart City Business Innovation [Tech Unicorn Track]**  
- No coding required. Focus is on business strategies, policy concepts, and entrepreneurial solutions for urban challenges.  
- Focus Areas: Startups, Urban Marketing, Finance, Public Policy, Sustainable Economics, Urban Analytics, City Management.

🛡️ **#04 Smart Cities & Cybersecurity**  
- Ensuring advanced protection for urban infrastructure through cybersecurity and blockchain-powered solutions.  
- Focus Areas: Cybersecurity, Blockchain Systems, Infrastructure Protection, Emergency Systems.

✨ **Reasons to Join**  
This hackathon is hosted by GDG at FIU × Code Crunch Global, ColorStack at FIU × Raspberry Pi Code Crunch, and CAHSI at FIU  

- Organized under the auspices of Hack University's global hackathon ecosystem.  
- Official recognition by MLH for the 2026 Season.  
- Workshops & certifications provided by Google Cloud, Raspberry Pi Code Crunch, and others.  
- Engage in building real-world projects, expand your professional network, and join a global movement of innovators.
`

  return (
    <section className="flex justify-center w-full h-auto bg-white">
      <div className="flex max-w-[1170px] w-full h-full py-8 max-[770px]:py-6 px-4 max-[770px]:px-2 gap-8 max-[770px]:gap-6 items-start max-[770px]:flex-col">
        
        {/* Left column */}
        <div className="flex flex-col w-[240px] max-[770px]:w-full gap-4">
          <h2 className="font-bold text-[17px] max-[770px]:text-[16px] leading-none mt-[7px] max-[770px]:mt-0 max-[770px]:text-left">Key Themes</h2>
          <div className="max-[770px]:flex max-[770px]:flex-col max-[770px]:gap-2">
            <ul className="flex flex-wrap gap-2 max-[770px]:justify-start">
              {/* Desktop: show all themes, Mobile: show limited themes */}
              <span className="max-[770px]:hidden flex flex-wrap gap-2">
                {themes.map((theme, idx) => (
                  <li 
                    key={idx} 
                    className="border border-black rounded-full py-1.5 px-3 whitespace-nowrap text-[14px]"
                  >
                    {theme}
                  </li>
                ))}
              </span>
              <span className="hidden max-[770px]:flex max-[770px]:flex-wrap max-[770px]:gap-2">
                {visibleThemes.map((theme, idx) => (
                  <li 
                    key={idx} 
                    className="border border-black rounded-full py-1.5 px-3 whitespace-nowrap text-[14px]"
                  >
                    {theme}
                  </li>
                ))}
              </span>
            </ul>
            {!showAllThemes && themes.length > 5 && (
              <button 
                onClick={() => setShowAllThemes(true)}
                className="hidden max-[770px]:block text-[#1973e8] text-[14px] text-left hover:underline mt-1"
              >
                View more
              </button>
            )}
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col w-full gap-4">
          <h1 className="text-[44px] max-[770px]:text-[32px] leading-none max-[770px]:text-left">About this event</h1>
          <div className="prose-custom max-[770px]:text-[14px]">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {eventAbout}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventAbout
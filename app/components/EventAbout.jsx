'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const EventAbout = () => {
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
      <div className="flex w-[1170px] h-full py-8 px-4 gap-8 items-start">
        
        {/* Left column */}
        <div className="flex flex-col w-[240px] gap-4">
          <h2 className="font-bold text-[17px] leading-none mt-[7px]">Key Themes</h2>
          <ul className="flex flex-wrap gap-2">
            {themes.map((theme, idx) => (
              <li 
                key={idx} 
                className="border border-black rounded-full py-1.5 px-3 whitespace-nowrap"
              >
                {theme}
              </li>
            ))}
          </ul>
        </div>

        {/* Right column */}
        <div className="flex flex-col w-full gap-4">
          <h1 className="text-[44px] leading-none">About this event</h1>
          <div className="prose-custom">
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

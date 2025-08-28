import TimelineSection from "@/app/modules/TimelineSection"

const PreviousHackathons = () => {
  const pastEvents = [
    {
      date: "March 21–23, 2025",
      title: "🎉 Hack Fiesta Miami 2025",
      description:
        "Our signature spring virtual hackathon introduced foundational tech concepts, bringing together innovators from across South Florida with focus on AI, fintech, and web technologies – laying groundwork for smart city innovation.",
      link: "https://HackFiestaMiami2025.vercel.app",
    },
    {
      date: "March 28–31, 2025",
      title: "🌴 305 Hack Spring 2025",
      description:
        "A vibrant hybrid hackathon in Miami emphasizing interdisciplinary collaboration across sustainability, health tech, and cybersecurity – key components for smart city infrastructure.",
      link: "https://305HackSpring2025.vercel.app",
    },
    {
      date: "May 19–26, 2025",
      title: "⚡ Code Storm Hack 2025",
      description:
        "A virtual hackathon connecting students and industry experts through technical challenges and mentorship, advancing skills needed for complex urban technology solutions.",
      link: "https://CodeStormHack2025.vercel.app",
    },
  ]

  const upcomingEvents = [
    {
      date: "July 19–26, 2025",
      title: "☀️ SummerCodeX Hack 2025",
      description:
        "An intensive virtual summer hackathon focusing on beginner-friendly tracks, mobile app development, and cloud solutions – building the technical foundation for smart city applications.",
      link: "https://SummerCodexHack2025.vercel.app",
    },
    {
      date: "September 20–22, 2025",
      title: "🍂 305 Hack Fall 2025",
      description:
        "Fall edition of our popular 305 Hack series, focusing on advanced web development, IoT solutions, and data analytics – essential technologies for smart city ecosystems.",
      link: "https://305hackfall2025.vercel.app",
    },
    {
      date: "October 18–20, 2025",
      title: "👩‍💻 EmpowHER Hackathon 2025",
      description:
        "A dedicated hackathon celebrating women in tech, promoting diversity and inclusion in the development of innovative solutions for social impact and urban challenges.",
      link: "https://EmpowHerHack2025.vercel.app",
    },
    {
      date: "December 12–14, 2025",
      title: "🎊 CodeFest 2025",
      description:
        "Year-end celebration hackathon bringing together all our community members for a grand finale of innovation, featuring advanced challenges in machine learning and blockchain technology.",
      link: "https://CodeFestHack2025.vercel.app",
    },
  ]

  const events2026 = [
    {
      date: "March 9–15, 2026",
      title: "🎉 Hack Fiesta Miami 2026",
      description:
        "The evolved version of our flagship event, featuring week-long intensive workshops, industry partnerships, and cutting-edge smart city challenges with real-world implementation opportunities.",
      link: "https://HackFiestaMiami2026.vercel.app",
    },
    {
      date: "March 20–22, 2026",
      title: "🌴 305 Hack Spring 2026",
      description:
        "Next generation of our 305 Hack series, incorporating lessons learned from previous events and focusing on emerging technologies like quantum computing and advanced AI systems.",
      link: "https://305hackspring2026.vercel.app",
    },
  ]

  return (
    <section className="flex justify-center items-center flex-col w-full h-auto bg-white pb-8">
      <div className="flex max-w-[1170px] w-full h-full py-12 max-[1100px]:py-8 px-4 max-[1100px]:px-2 gap-16 max-[1100px]:gap-12 flex-col">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center w-full gap-4 max-[1100px]:gap-3 mt-8 max-[1100px]:mt-4">
          <h1 className="text-[44px] max-[1100px]:text-[32px] leading-none">Our Innovation Journey</h1>
          <p className="max-[1100px]:text-[14px] max-[1100px]:px-2">
            A timeline of our hackathons building towards smart city solutions.
          </p>
        </div>

        {/* Sections */}
        <TimelineSection sectionTitle="Past Events" events={pastEvents} />
        <TimelineSection sectionTitle="Upcoming Events" events={upcomingEvents} />
        <TimelineSection sectionTitle="2026 Events" events={events2026} />
      </div>
    </section>
  )
}

export default PreviousHackathons
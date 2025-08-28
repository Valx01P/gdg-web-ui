import QnaRow from "@/app/modules/QnaRow"

const Faq = () => {
  const questions = [
    "What is 305 Hack Fall 2025?",
    "Do I need smart city experience to participate?",
    "Is there a registration fee for the 305 Hack Fall 2025?",
    "Can I participate without a team focused on smart cities?",
    "What if I'm not a computer science major?",
    "What should I bring to the 305 Hack Fall 2025?",
    "Are travel stipends available for the 305 Hack Fall 2025?",
    "How are smart city projects judged?",
  ]

  const answers = [
    "The 305 Hack Fall 2025 is an intensive innovation event focused on creating technology solutions for urban challenges. Participants build projects related to smart infrastructure, digital governance, sustainable transportation, IoT systems, and other urban technologies. You'll attend workshops, work with mentors, and compete for prizes while addressing real city problems.",
    "Not at all! Our hackathon welcomes participants from all backgrounds and experience levels. We provide workshops on smart city concepts, urban planning basics, and relevant technologies. Whether you're studying computer science, engineering, business, public policy, or any other field, you can contribute to smart city innovation.",
    "No, our 305 Hack Fall 2025 is completely free for all participants! We believe urban innovation should be accessible to everyone interested in building better cities, regardless of financial background.",
    "Absolutely! You can join solo and we'll help you find teammates with complementary skills during our Team Formation events or through our Discord server. Smart city projects benefit from diverse perspectives - combining technical skills with urban planning, business strategy, and design thinking. Teams can have up to 4 members.",
    "Perfect! Smart cities need diverse expertise. Our Business Innovation Track requires no coding and focuses on urban planning, policy, economics, and entrepreneurship. Even in technical tracks, we need urban planners, designers, business strategists, and domain experts. Many winning smart city solutions combine technology with deep understanding of urban challenges.",
    "For in-person events, bring your laptop, chargers, student ID, and any personal items you might need. For smart city projects, consider bringing notebooks for brainstorming urban solutions. For overnight events, bring toiletries, a change of clothes, and a sleeping bag or blanket. We'll provide access to relevant smart city resources and datasets.",
    "Unfortunately, we do not provide travel stipends at this time. However, we encourage participants to explore funding options through their universities, urban planning departments, or local organizations interested in smart city development.",
    "Smart city projects are evaluated based on urban impact potential, technical innovation, feasibility of implementation, presentation quality, and alignment with smart city principles. Each track has dedicated judges with expertise in urban planning, technology, and smart city development. For complete judging criteria and smart city project tips, check out our 305 Hack Fall 2025 Toolkit!",
  ]

  return (
    <section className="flex justify-center w-full h-auto bg-[#f1f3f4]">
      <div className="flex max-w-[1170px] w-full h-full py-12 max-[770px]:py-8 px-4 max-[770px]:px-2 gap-8 max-[770px]:gap-6 flex-col">
        <h1 className="text-[44px] max-[770px]:text-[32px] leading-none max-[770px]:text-center">Frequently Asked Questions</h1>
        <div className="flex flex-col w-full gap-6 max-[770px]:gap-4">
          {questions.map((q, i) => (
            <QnaRow key={i} question={q} answer={answers[i]} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
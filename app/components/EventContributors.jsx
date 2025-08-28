import Speakers from "./Speakers"
import Facilitators from "./Facilitators"
import Partners from "./Partners"
import Organizers from "./Organizers"

const EventContributors = () => {
  return (
    <section className="flex justify-center items-center flex-col w-full h-auto bg-white pb-8">
      <Speakers />
      <Facilitators />
      <Partners />
      <Organizers />
      <div className="flex justify-center items-center w-[1170px]">
        <a href="mailto:codecrunch@fiu.edu" className="flex justify-center items-center w-[180px] h-[55px] text-[20px] font-bold text-white bg-[#1973e8] rounded-sm my-4">
          Contact Us
        </a>
      </div>
    </section>
  )
}

export default EventContributors

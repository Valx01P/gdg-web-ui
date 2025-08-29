import TimelineItem from "./TimelineItem"

const TimelineSection = ({ sectionTitle, events }) => {
  return (
    <div className="flex flex-col gap-8 max-[1100px]:gap-6 w-full">
      {/* Section Title */}
      <div className="flex justify-center items-center">
        <h2 className="text-[22px] max-[1100px]:text-[20px] font-bold text-gray-800 max-[1100px]:text-center">
          {sectionTitle}
        </h2>
      </div>

      {/* Timeline Events */}
      <div className="flex flex-col gap-12 max-[1100px]:gap-8 relative">
        {/* Vertical Line (hidden under 500px) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 transform -translate-x-1/2 
                        max-[1100px]:left-4 max-[1100px]:transform-none max-[500px]:hidden"></div>

        {events.map((event, idx) => (
          <div key={idx} className="relative flex">
            {/* Marker Dot (hidden under 500px) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1973e8] rounded-full top-[22px] z-10 
                            max-[1100px]:left-4 max-[1100px]:transform-none max-[1100px]:top-[18px] max-[500px]:hidden"></div>

            <TimelineItem
              date={event.date}
              title={event.title}
              description={event.description}
              link={event.link}
              side={idx % 2 === 0 ? "left" : "right"}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimelineSection

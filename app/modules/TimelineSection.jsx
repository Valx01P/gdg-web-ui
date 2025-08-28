import TimelineItem from "./TimelineItem"

const TimelineSection = ({ sectionTitle, events }) => {
  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Section Title */}
      <div className="flex justify-center items-center">
        <h2 className="text-[22px] font-bold text-gray-800">{sectionTitle}</h2>
      </div>

      {/* Timeline Events */}
      <div className="flex flex-col gap-12 relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 transform -translate-x-1/2"></div>

        {events.map((event, idx) => (
          <div key={idx} className="relative flex">
            {/* Marker Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1973e8] rounded-full top-[22px] z-10"></div>

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

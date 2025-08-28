import Link from "next/link"

const TimelineItem = ({ date, title, description, link, side }) => {
  return (
    <div
      className={`flex w-full ${side === "left" ? "justify-start" : "justify-end"} max-[1100px]:justify-center`}
    >
      <div className="flex flex-col w-[500px] max-[1100px]:w-full max-[1100px]:max-w-[400px] bg-white border-2 border-gray-200 rounded-md p-6 max-[1100px]:p-4">
        {/* Date */}
        <span className="text-[14px] max-[1100px]:text-[12px] font-medium text-[#1973e8]">{date}</span>

        {/* Title */}
        <h3 className="text-[20px] max-[1100px]:text-[18px] font-bold text-gray-900 mt-1">
          <Link
            href={link}
            target="_blank"
            className="underline hover:text-[#1973e8]"
          >
            {title}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-[15px] max-[1100px]:text-[14px] mt-2">{description}</p>
      </div>
    </div>
  )
}

export default TimelineItem
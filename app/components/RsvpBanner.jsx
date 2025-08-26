
const RsvpBanner = () => {
  const eventDate = "Sep 19, 6:00 PM – Sep 21, 5:00 PM (EDT)"
  const numberOfRsvp = "0"

  return (
    <section className="flex justify-center items-center w-full h-[63px] bg-[#d4d4d4]">
      <div className="flex flex-shrink items-center gap-3 w-[1170px] h-full px-4">
        <h2 className="font-bold text-[16px]">{eventDate}</h2>
        <div className="flex flex-1 gap-1 px-2.5"><span>{numberOfRsvp}</span><span>RSVP&apos;d</span></div>
        <div className="flex justify-center items-center rounded-sm w-[75px] h-[49px] text-white font-bold text-[14px] bg-[#1973e8]">RSVP</div>
      </div>
    </section>
  )
}

export default RsvpBanner
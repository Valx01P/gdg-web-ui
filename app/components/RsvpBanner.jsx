
const RsvpBanner = () => {
  const eventDate = "Sep 19, 6:00 PM – Sep 21, 5:00 PM (EDT)"
  const numberOfRsvp = "64"

  return (
    <section className="flex justify-center items-center w-full h-[63px] bg-[#d4d4d4]">
      <div className="flex flex-shrink items-center gap-3 w-[1170px] h-full px-4">
        <h2 className="font-bold text-[16px]">{eventDate}</h2>
        <div className="flex flex-1 gap-1 px-2.5"><span>{numberOfRsvp}</span><span>RSVP&apos;d</span></div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSer5wd8Mv7A60cApYnoH3Y_nJadg1f6NKGEr5DmtRI4HXoG4w/viewform" className="flex justify-center items-center rounded-sm w-[95px] h-[49px] text-white font-bold text-[14px] bg-[#1973e8] hover:cursor-pointer">Register</a>
      </div>
    </section>
  )
}

export default RsvpBanner

'use client'

import Image from "next/image"

const EventLocationDetails = () => {
  const eventTime = ""
  const eventLocation = ""
  const eventAgendaTimes = []

  return (
    <section className="flex justify-center w-full h-auto bg-[#f1f3f4]">
      <div className="flex w-[1170px] h-full py-8 px-4 gap-8">

        <div className="flex flex-col w-full gap-4">
          {/* TOP */}
          <div className="flex flex-row w-full gap-4">

            <div className="flex flex-row w-full">
              <div>
                <Image
                  src="/calendar_icon.webp"
                  alt="calendar"
                  width={45}
                  height={45}
                />
              </div>
              <div className="flex flex-col w-full pl-4">
                <h2 className="font-bold text-[22px]">When</h2>
                <p>{eventTime}</p>
              </div>
            </div>

            <div className="flex flex-row w-full">
              <div>
                <Image
                  src="/location_icon.webp"
                  alt="location"
                  width={45}
                  height={45}
                />
              </div>
              <div className="flex flex-col w-full pl-4">
                <h2 className="font-bold text-[22px]">Where</h2>
                <p>{eventLocation}</p>
              </div>
            </div>

            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14369.666360294901!2d-80.187412!3d25.789827!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6a7ed2a82a9%3A0x19fb95be8a9866cb!2s1501%20Biscayne%20Blvd%20501%201501%2C%20Miami%2C%20FL%2033132!5e0!3m2!1sen!2sus!4v1756194893772!5m2!1sen!2sus"
                width="300"
                height="100"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* BOTTOM */}
          <div className="flex flex-col w-full">
            <div className="flex flex-row w-full h-min">
              <div>
                <Image
                  src="/clock_icon.webp"
                  alt="clock"
                  width={45}
                  height={45}
                />
              </div>
              <div className="flex flex-row w-full">
                <div className="flex flex-row">
                  <h1>Agenda</h1>
                  <ul className="flex flex-row">
                    <li>Day 1</li>
                    <li>Day 2</li>
                    <li>Day 3</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              {/* {eventAgendaTimes.map(() => (
                return
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventLocationDetails
'use client'

import { useState } from "react"
import Image from "next/image"

const EventLocationDetails = () => {
  const eventDate = "September 19 – 21, 2025"
  const eventTime = "6:00 PM – 5:00 PM (EDT)"
  const eventBuilding = "1501 Biscayne Blvd suite 501"
  const eventStreet = "1501 Biscayne Boulevard"
  const eventCity = "Miami, 33132"

  const eventAgendaTimes = {
    "DAY 1": [
      { time: "6:00 PM", title: "Check-In" },
      { time: "8:00 PM", title: "Networking Event" },
      { time: "11:00 PM", title: "Event Kick-Off" },
      { time: "11:30 PM", title: "Light Snacks" },
    ],
    "DAY 2": [
      { time: "8:00 AM", title: "Breakfast" },
      { time: "9:00 AM", title: "Breakfast Ends" },
      { time: "10:00 AM", title: "Technical Workshop [ Sponsor ]" },
      { time: "11:00 AM", title: "Technical Workshop [ Sponsor ]" },
      { time: "12:00 PM", title: "Lunch" },
      { time: "1:00 PM", title: "Lunch Ends" },
      { time: "1:00 PM", title: "Mentorship Starts [1pm–6pm]" },
      { time: "1:30 PM", title: "Technical Workshop [ Sponsor ]" },
      { time: "2:30 PM", title: "Technical Workshop [ Sponsor ]" },
      { time: "3:30 PM", title: "Social Activity" },
      { time: "5:00 PM", title: "Dinner" },
      { time: "6:00 PM", title: "Dinner Ends" },
      { time: "6:00 PM", title: "Mentorship Ends [1pm–6pm]" },
      { time: "7:00 PM", title: "Social Event" },
    ],
    "DAY 3": [
      { time: "8:00 AM", title: "Breakfast" },
      { time: "9:00 AM", title: "Breakfast Ends" },
      { time: "9:01 AM", title: "Begin Announcing Submission Deadline" },
      { time: "9:30 AM", title: "Submissions Due (Soft Deadline)" },
      { time: "11:00 AM", title: "Hacking Ends (Submissions Hard Deadline)" },
      { time: "11:30 AM", title: "Lunch" },
      { time: "12:30 PM", title: "Lunch Ends" },
      { time: "1:00 PM", title: "Judge Expo Starts" },
      { time: "3:00 PM", title: "Judge Expo Ends" },
      { time: "4:00 PM", title: "Closing Ceremony - Event Summary - Sponsor Winners" },
      { time: "5:00 PM", title: "Venue Closes" },
    ],
  }

  const [activeDay, setActiveDay] = useState(Object.keys(eventAgendaTimes)[0])

  return (
    <section className="flex justify-center w-full h-auto bg-[#f1f3f4]">
      <div className="flex w-[1170px] h-full py-8 px-4 gap-8">

        <div className="flex flex-col w-full gap-6 py-4">
          {/* TOP */}
          <div className="flex flex-row w-full gap-4 pr-15">

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
                <h2 className="font-bold text-[24px]">When</h2>
                <p>
                  {eventDate}
                  <br/>
                  {eventTime}
                </p>
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
                <h2 className="font-bold text-[24px]">Where</h2>
                <p>
                  {eventBuilding}
                  <br/>
                  {eventStreet}
                  <br/>
                  {eventCity}
                </p>
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
              <div className="flex flex-row w-full pl-4">
                <div className="flex flex-row justify-center items-center">
                  <h2 className="font-bold text-[24px]">Agenda</h2>
                  <ul className="flex justify-center items-center flex-row text-[18px] ml-6 text-gray-600">
                    {Object.keys(eventAgendaTimes).map((day) => (
                      <li
                        key={day}
                        className={`cursor-pointer px-4 py-1.5 mx-1 box-border ${
                          activeDay === day
                            ? "border-b-4 border-blue-600 text-gray-900"
                            : "border-b-4 border-transparent text-gray-600 hover:border-blue-600 hover:text-gray-900"
                        }`}
                        onClick={() => setActiveDay(day)}
                      >
                        {day}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Active Day's agenda */}
            <div className="flex flex-col w-full mt-4 pl-[60px] pb-8 gap-6">
              {eventAgendaTimes[activeDay].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1.5">
                  {/* Time */}
                  <span className="font-medium">{item.time}</span>
                  {/* Title */}
                  <span className="font-bold text-gray-900 text-[18px]">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventLocationDetails

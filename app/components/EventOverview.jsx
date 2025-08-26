'use client'

import Image from "next/image"

const EventOverview = () => {

  const eventName = "305 Hackathon Fall 2025 - Smart City Innovation"
  const eventLocation = "1501 Biscayne Blvd suite 501, 1501 Biscayne Boulevard, Miami, 33132"
  const eventDescription = "305 Hack Fall 2025 is Miami's signature hackathon, officially part of the Major League Hacking (MLH) 2026 Season and a flagship event of the Hack University Initiative.\n\nThis year marks a milestone: 305 Hack is officially hosted by the Google Developer Group (GDG) at FIU, alongside Code Crunch Global, Raspberry Pi Code Crunch, and CAHSI @ FIU."

  return (
    <section className="flex justify-center items-center w-full h-auto bg-white">
      <div className="flex flex-shrink justify-between items-center flex-col w-[1170px] h-full pb-8">
        <div className="px-4 py-8">
          <Image
            className="rounded-xl"
            src="/codecrunch_banner.webp"
            alt="menu"
            width={1140}
            height={285}
          />
        </div>

        <div className="flex flex-col gap-4 px-4">
          <h1 className="font-bold text-[44px]">{eventName}</h1>
          <div>
            <p>{eventLocation}</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="underline">GDG on Campus Florida International University</p>
            {eventDescription.split('\n\n').map((paragraph, index) => (
              <p key={index} className={index > 0 ? 'mt-[-2]' : ''}>
                {paragraph}
              </p>
            ))}          
          </div>
          <div className="my-4">
            <ul className="flex justify-baseline items-center gap-3">
              <li className="border border-black rounded-full p-2">
                <svg viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" width="16">
                  <path d="M10.097 0.857422C7.67769 0.857422 5.71484 2.82027 5.71484 5.2396V7.01318H4C3.58579 7.01318 3.25 7.34897 3.25 7.76318C3.25 8.1774 3.58579 8.51318 4 8.51318H5.71484V16.1074C5.71484 16.5216 6.05063 16.8574 6.46484 16.8574C6.87906 16.8574 7.21484 16.5216 7.21484 16.1074V8.51318H11.3872C11.8014 8.51318 12.1372 8.1774 12.1372 7.76318C12.1372 7.34897 11.8014 7.01318 11.3872 7.01318H7.21484V5.2396C7.21484 3.6487 8.50612 2.35742 10.097 2.35742H11.3891C11.8033 2.35742 12.1391 2.02164 12.1391 1.60742C12.1391 1.19321 11.8033 0.857422 11.3891 0.857422H10.097Z" fill="currentColor" />
                </svg>
              </li>
              <li className="border border-black rounded-full p-2">
                <svg viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" width="16">
                  <path d="M9.51664 6.79444L15.3449 0.0195312H13.9638L8.90311 5.90209L4.86115 0.0195312H0.199219L6.31146 8.915L0.199219 16.0195H1.58041L6.92464 9.80735L11.1933 16.0195H15.8552L9.5163 6.79444H9.51664ZM7.62491 8.99337L7.00561 8.10758L2.07808 1.05927H4.19951L8.17609 6.74748L8.79538 7.63327L13.9645 15.0271H11.843L7.62491 8.99371V8.99337Z" fill="currentColor" />
                </svg>
              </li>
              <li className="border border-black rounded-full p-2">
                <svg viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" width="16">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.330095 1.75758C0.326645 1.11991 0.844655 0.607422 1.47546 0.607422C2.10572 0.607422 2.62418 1.11529 2.62418 1.75446C2.62418 2.38752 2.11019 2.90151 1.47713 2.90151C0.845118 2.90151 0.331776 2.3892 0.330095 1.75758Z" fill="currentColor" />
                  <path d="M11.241 7.59476C9.59247 7.59476 8.2572 8.93003 8.2572 10.5785V15.8359C8.2572 16.262 7.91178 16.6074 7.48568 16.6074C7.05958 16.6074 6.71417 16.262 6.71417 15.8359V10.5785C6.71417 8.07784 8.74028 6.05173 11.241 6.05173C13.7416 6.05173 15.7677 8.07784 15.7677 10.5785V15.8359C15.7677 16.262 15.4223 16.6074 14.9962 16.6074C14.5701 16.6074 14.2247 16.262 14.2247 15.8359V10.5785C14.2247 8.93003 12.8894 7.59476 11.241 7.59476Z" fill="currentColor" />
                  <path d="M2.25083 6.82324C2.25083 6.39715 1.90541 6.05173 1.47931 6.05173C1.05322 6.05173 0.707799 6.39715 0.707799 6.82324V15.8359C0.707799 16.262 1.05322 16.6074 1.47931 16.6074C1.90541 16.6074 2.25083 16.262 2.25083 15.8359V6.82324Z" fill="currentColor" />
                </svg>
              </li>
              <li className="border border-black rounded-full p-2">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16">
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.2 1C.937 1 0 2.066 0 3.293c0 .037 0 .073.003.11A.76.76 0 0 0 0 3.464v8.572C0 13.348 1.018 14.5 2.361 14.5H13.64c1.343 0 2.361-1.152 2.361-2.464V3.464c0-.02 0-.041-.002-.062l.002-.11C16 2.067 15.063 1 13.8 1H2.2Zm7.252 6.458-.028.02c-.868.59-1.895.591-2.764.001l-.053-.038a.75.75 0 0 0-.069-.05l-4.677-3.4c-.26-.228-.361-.456-.361-.698 0-.488.352-.793.7-.793h11.6c.348 0 .7.305.7.793 0 .242-.1.485-.346.83l-4.67 3.312a.757.757 0 0 0-.032.023Zm.315 1.553L13.516 13H2.484L6.26 8.983a3.838 3.838 0 0 0 3.508.028Zm4.733 2.846V5.716l-3.463 2.456 3.463 3.685Zm-13 0L5.003 8.13 1.5 5.583v6.274Z" fill="currentColor" />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventOverview
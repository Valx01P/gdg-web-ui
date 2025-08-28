import Image from "next/image"

const PersonCard = ({ profilePictureUrl, name, titles, bio_button=false, bio_url="" }) => {
  return (
    <div className="flex justify-start items-center flex-col w-[285px] max-[770px]:w-full max-[770px]:max-w-[320px] h-[368px] max-[770px]:h-auto bg-white rounded-xl m-1 max-[770px]:m-2 px-6 max-[770px]:py-6">
      
      {/* Fixed image wrapper */}
      <div className="flex-shrink-0 h-[175px] max-[770px]:h-auto flex justify-center items-center mt-8 max-[770px]:mt-0">
        <Image
          className="rounded-full"
          src={profilePictureUrl}
          alt={name}
          width={175}
          height={175}
        />
      </div>

      {/* Text area takes the rest */}
      <div className="flex flex-col gap-2 pt-4 pb-2 max-[770px]:pb-4 text-center w-full">
        <h2 className="text-[18px] font-bold text-gray-700 mt-2 max-[770px]:mt-4">{name}</h2>
        {titles.map((title) => (
          <p
            key={title}
            className="flex justify-center items-center flex-wrap w-full h-auto"
          >
            {title}
          </p>
        ))}
      </div>
      {bio_button && 
      <a href={`${bio_url}`} className="flex justify-center items-center w-[88px] h-[52px] text-[#1973e8] text-[14px] border border-gray-200 bg-white rounded-sm transition-colors duration-300 ease-in-out hover:bg-blue-50 max-[770px]:mb-2">
        See bio
      </a>
      }
    </div>
  )
}

export default PersonCard
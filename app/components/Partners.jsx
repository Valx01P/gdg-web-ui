import Image from "next/image"

const Partners = () => {
  const fiu = {
    name: "fiu",
    logo_url: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/comapny%2520honors_YVb4IIe.png"
  }
  
  const codecrunch = {
    name: "codecrunch",
    logo_url: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/Hack%2520University%2520%25285%2529_QhNjkHG.png"
  }

  const partners = [fiu, codecrunch]

  return (
    <div className="flex flex-col items-center w-[1170px] h-full gap-8">
      <div className="h-full flex flex-col justify-center items-center pb-16">
        <div className="flex justify-center items-center py-12">
          <h1 className="text-[44px]">Partners</h1>
        </div>
        <div className="flex px-2">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="w-[265px] my-4 mx-2 h-[148px] border border-gray-200 bg-white rounded-md flex justify-center items-center py-2"
            >
              <Image
                src={partner.logo_url}
                alt={partner.name}
                width={118}
                height={118}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Partners

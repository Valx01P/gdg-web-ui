import PersonCard from "../modules/PersonCard"
import Person from "../services/userService"

const Facilitators = () => {
  const amilcar_pena = new Person({
    profilePictureUrl: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-goog/events/1718278136745_XmHxU5d.jpg",
    name: "Amilcar Pena",
    titles: ["Code Crunch Global", "Team Instructor"]
  })

  const facilitators = [amilcar_pena]

  return (
    <div className="flex flex-col items-center max-w-[1170px] w-full h-full pb-8 px-4 max-[770px]:px-2 gap-8">
      <h1 className="text-[44px] max-[770px]:text-[32px] mb-2 mt-20 max-[770px]:mt-12 max-[770px]:text-center">Facilitator</h1>
      <div className="flex max-[770px]:flex-col max-[770px]:items-center max-[770px]:w-full">
        {facilitators.map((facilitator) => (
          <PersonCard
            key={facilitator.name}
            profilePictureUrl={facilitator.profilePictureUrl}
            name={facilitator.name}
            titles={facilitator.titles}
          />
        ))}
      </div>
    </div>
  )
}

export default Facilitators
import PersonCard from "../modules/PersonCard"
import Person from "../services/userService"

const Organizers = () => {
  const brian_bazurto = new Person({
    profilePictureUrl: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/BRIAN%2520BAZURTO_u9FGr9N.png",
    name: "Brian Bazurto",
    titles: ["Organizer"],
    bio_button: true,
    bio_url: "https://gdg.community.dev/u/m62v56/"
  })

  const organizers = [brian_bazurto]
  
  return (
    <div className="flex flex-col items-center max-w-[1170px] w-full h-full pb-8 px-4 max-[770px]:px-2 gap-8">
      <h1 className="text-[44px] max-[770px]:text-[32px] mb-2 mt-20 max-[770px]:mt-12 max-[770px]:text-center">Organizer</h1>
      <div className="flex max-[770px]:flex-col max-[770px]:items-center max-[770px]:w-full">
        {organizers.map((organizer) => (
          <PersonCard
            key={`organizer_${organizer.name}`}
            profilePictureUrl={organizer.profilePictureUrl}
            name={organizer.name}
            titles={organizer.titles}
            bio_button={organizer.bio_button}
            bio_url={organizer.bio_url}
          />
        ))}
      </div>
    </div>
  )
}

export default Organizers
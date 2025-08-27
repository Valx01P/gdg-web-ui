import PersonCard from "../modules/PersonCard"
import Person from "../services/userService"

const Speakers = () => {
  const bryan_garcia = new Person({
    profilePictureUrl: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/1710370858288_4te4i7r.jpg",
    name: "Bryan Garcia",
    titles: ["Code Crunch Global", "Treasurer & RSOC Representative"]
  })

  const brian_bazurto = new Person({
    profilePictureUrl: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/BRIAN%2520BAZURTO_u9FGr9N.png",
    name: "Brian Bazurto",
    titles: ["GDG at FIU", "Lead Organizer"]
  })

  const speakers = [bryan_garcia, brian_bazurto]

  return (
    <div className="flex flex-col items-center w-[1170px] h-full pb-8 gap-8">
      <h1 className="text-[44px] mb-2 mt-20">Speakers</h1>
      <div className="flex">
        {speakers.map((speaker) => (
          <PersonCard
            key={speaker.name}
            profilePictureUrl={speaker.profilePictureUrl}
            name={speaker.name}
            titles={speaker.titles}
          />
        ))}
      </div>
    </div>
  )
}

export default Speakers

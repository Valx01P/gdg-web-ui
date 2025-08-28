import Nav from "./components/Nav"
import GdgPlatformBanner from "./components/GdgPlatformBanner"
import EventOverview from "./components/EventOverview"
import RsvpBanner from "./components/RsvpBanner"
import EventAbout from "./components/EventAbout"
import EventLocationDetails from "./components/EventLocationDetails"
import EventContributors from "./components/EventContributors"
import PreviousHackathons from "./components/custom/PreviousHackathons"
import Faq from "./components/custom/Faq"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="w-full min-h-dvh bg-white">
      <Nav />
      <GdgPlatformBanner />
      <EventOverview />
      <RsvpBanner />
      <EventAbout />
      <EventLocationDetails />
      <EventContributors />
      <PreviousHackathons />
      <Faq />
      <Footer />
    </main>
  )
}

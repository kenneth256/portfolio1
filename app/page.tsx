import Hero from "./components/Hero"
import { FloatingNav } from "./components/ui/FloatingNav"
import Grid from "./components/Grid"
import RecentProjects from "./components/ui/RecentProjects"
import { navItems } from "@/data"
import Clients from "./components/Clients"
import  Approach  from "./components/Approach"
import Footer from "./components/Footer"




const Page = () => {
  return (
    <div className=" overflow-clip relative bg-black sm:px-10 px-5 mx-auto flex justify-center items-center flex-col ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
       <Approach />
       <Footer />
      </div>
    </div>
  )
}

export default Page
 
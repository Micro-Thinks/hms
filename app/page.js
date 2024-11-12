import Hero from "./Components/Hero/page"
import Navbar from "./Navbar/page"

export default function Home() {

  return <div>
    <div className="bg-[url('/HeroPic.jpg')] h-[screen]  bg-center bg-cover">
    <Navbar/>

    <Hero />
    </div>
  </div>;
}

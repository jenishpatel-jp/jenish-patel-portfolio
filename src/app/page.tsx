import Link from "next/link";
import Hero from "./components/Hero";
import ShoppingRun from "./components/ShoppingRun";
import STT from "./components/STT";
import Contact from "./components/Contact";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <div className="w-full h-screen bg-gradient-to-r from-primaryPurple via-primaryPink to-primaryWhite" >
        <Hero />
      </div>
      <div className="w-full h-screen bg-gradient-to-r from-primaryPurple via-primaryPink to-primaryWhite" >
        <About />
      </div>
      <div className="w-full h-screen bg-gradient-to-r from-primaryPurple via-primaryPink to-primaryWhite" >
        <ShoppingRun />
      </div>
      <div className="w-full h-screen bg-gradient-to-r from-primaryPurple via-primaryPink to-primaryWhite" >
        <STT />
      </div>
      {/* <div className="w-full h-screen bg-gradient-to-r from-primaryPurple via-primaryPink to-primaryWhite" >
        <Contact />
      </div> */}

    </main>
  );
}

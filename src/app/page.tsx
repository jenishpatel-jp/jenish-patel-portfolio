import Link from "next/link";
import Hero from "./components/Hero";
import ShoppingRun from "./components/ShoppingRun";
import STT from "./components/STT";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-stark">
      <div className="w-full h-screen bg-blue-200" >
        <Hero />
      </div>
      <div className="w-full h-screen bg-green-200" >
        <ShoppingRun />
      </div>
      <div className="w-full h-screen bg-orange-200" >
        <STT />
      </div>
      <div className="w-full h-screen bg-yellow-200" >

      </div>

    </main>
  );
}

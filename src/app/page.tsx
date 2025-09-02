import Link from "next/link";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-stark">
      <div className="w-full h-screen bg-blue-200" >
        <Hero />
      </div>
      <div className="w-full h-screen bg-green-200" ></div>
      <div className="w-full h-screen bg-orange-200" ></div>
      <div className="w-full h-screen bg-yellow-200" ></div>

    </main>
  );
}

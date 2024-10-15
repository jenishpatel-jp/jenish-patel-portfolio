import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-stark">
        <h2 className="text-void w-full text-center text-5xl mb-5 " >
          Hello, I&apos;m <span className="text-blue-500" >Jenish Patel</span>.
        </h2>
        <h2 className="text-void w-full text-center text-5xl mb-5 ">
          I&apos;m an aspiring Junior Developer.
        </h2>
        <Link href={'/projects'}>
          <button className="btn bg-blue-500 text-stark mt-6 rounded-xl shadow-lg text-lg drop-shadow-lg">View Projects</button>
        </Link>
        
    </main>
  );
}

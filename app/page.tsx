import Image from "next/image";
import TopNavbar from "./components/TopNavbar";
// font classes font-title, font-actor
export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-title">
      <main className="">
        <div className="bg-[url(/assets/hero-bg.jpg)] h-[410px] bg-center">
          <h1>Hwllo</h1>
        </div>
        
        <h1 className="text-black">Inspirational China main content will be here</h1>
      </main>
    </div>
  );
}

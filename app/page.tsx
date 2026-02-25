import Image from "next/image";
import TopNavbar from "./components/TopNavbar";
// font classes font-title, font-actor
export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-black font-title">
      <main className="">
        {/* Hero Image */}
        <div className="bg-[url(/assets/hero-bg.jpg)] h-[410px] bg-center"></div>

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-5 py-15 sm:px-[200px]">
            <div>
                  <h1 className="font-title text-[40px] pb-5">Vanessa Bravo</h1>
                  <p>Vanessa is my adorable and successful little sister who in her actions motivates and inspires me to work hard to better my life and to those around me! </p>
            </div>
            <div className="place-items-center lg:place-items-end">
              <img className="h-[260px]" src="/assets/vanessaSnow.jpeg" alt="A day in the snow with my sister Vanessa!" />
            </div>
        </div>
      </main>
    </div>
  );
}

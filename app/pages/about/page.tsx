
import CardFacts from "@/app/components/CardFacts"

const About = () => {
  return (
    <div className="min-h-screen bg-zinc-50 font-actor px-4 sm:px-20 text-black">
      <article>
        <h1 className='text-[40px] py-8 text-center font-title'>About Vanessa</h1>
        <p>My little sister Vanessa, is currently working on her 4 year degree in UC Berkeley while working for her community! She is a fun and talented person to have around and I look forward to seeing her succeed in her life! </p>
        <br />
        <p>Here are some fun facts about Vanessa I would like to share!</p>
      </article>
      
      <section className="py-5">
        <h1 className='text-[40px] py-8 text-center font-title'>Fun Facts</h1>

        <div className="grid lg:grid-cols-2 place-items-center gap-8 justify-stretch object-contain">
          <CardFacts title="Education" img={"/assets/lab-icon.png"} alt="An Icon representing medical engineering!" desc="Majoring in Biomedical Engineering in the University of California, Berkeley and currently working on her bachelors! Considering working on her masters and should!"/>
          <CardFacts  title="UNO Champion" img={"/assets/uno-trophy.jpg"} alt="The greatest uno trophy of all time!" desc="She is the current owner of the Uno Champion of the world trophy! Until next time we play!"/>
          <CardFacts title="Fun Times" img={"/assets/winnerVanessa.png"} alt="Vanessa's winning picture wearing a crown!" desc="Despite not playing games as much as I, she beat me in a hot wheels racing game in an arcade!"/>
          <CardFacts title="Hard Working" img={"/assets/SefeBearLogo.jpg"} alt="The logo of Safe Bears for safe walks!" desc="While getting her education in a University, she is working with her community to provide a safe environments on university campus!"/>
        </div>
      </section>
    </div>
  )
}

export default About
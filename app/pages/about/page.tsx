
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
          <CardFacts/>
      </section>
    </div>
  )
}

export default About
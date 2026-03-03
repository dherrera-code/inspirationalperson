
const Contact = () => {
  return (
    <div className='min-h-screen bg-zinc-50 font-actor px-4 pb-3 sm:px-20 text-black'>
      <section className='pt-8'>
        <div className='bg-[#D9D9D9] rounded-xl px-7 pb-5'>
            <h1 className='text-3xl sm:text-[40px] font-title text-center py-5'>Contact Me</h1>
            <p >I am an aspiring developer who is looking for a successful and exciting career to support my family and my future. The reason I built this website is to show my friends and family that I am making progress towards my goal and I am motivated to succeed just like my awesome little sister!</p>
            <br />
            <p>If you need to contact me Here is my contact information: </p>
            <p>Email: dherr@gmail.com</p>
            <p className='pb-5'>Phone number: (209) 345-1646</p>
            <img className='h-[270px] mx-auto' src="/assets/SelfeDaniel.jpg" alt="Self Image of Creator and Brother Daniel Herrera" />
        </div>
        </section>
    </div>
  )
}

export default Contact
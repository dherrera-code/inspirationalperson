import React from 'react'

const Why = () => {
  return (
    <div className='min-h-screen bg-zinc-50 font-actor px-4 sm:px-20 text-black'>
      <h1 className='text-[40px] py-8 text-center font-title'>Personal Impact</h1>
      <article className='grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-5 pb-6'>
        <div className='place-items-center'>
        <img className='h-[430px] rounded-lg ' src="/assets/winnerVaneOriginal.jpg" alt="Vanessa winning racing game against awesome brother!" />
        </div>
        {/* this div will have title and text with card background */}
        <div className='bg-[#D9D9D9] rounded-xl px-7 pb-5'>
            <h1 className='text-[40px] font-title text-center py-5'>My Inspiration</h1>
            <p >Through her actions and accomplishments so far inspires me to move forward in my education and keep striving towards my goals. How she never gives up and always moving forward to her goals keeps me going and motivates me to get out of bed everyday and make my dreams come true. She is a first generation college student who attends at a prestigious University and I am very proud of her as her awesome and handsome brother! My family and I look forward to see her accomplish amazing things and watch her dreams become reality.</p>
        </div>
      </article>
    </div>
  )
}

export default Why
import React from 'react'
import { SectionWrapper } from "../hoc";
import { award } from "../assets";

const Feedbacks = () => {
  return (
    <div>
      <div className='w-full justify-center items-center'>
        <h1 className='text-white text-[50px] font-bold'>Achivements</h1>
        <p className='text-secondary text-lg'>I've been awarded the Rookie Award 😊 at Comsense Technologies. <br />
          This recognition fuels my passion for growth and excellence.</p>
        <img className='w-2/3 mt-4 justify-center items-center mx-auto rounded-3xl' src={award} alt="award" />
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "");
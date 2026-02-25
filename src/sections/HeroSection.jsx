import React from 'react'

const HeroSection = () => {
  return (
    <div className="bg-[url('/bgnew.png')] bg-fit bg-no-repeat bg-center min-h-screen flex flex-col items-center justify-center">
      {/* <div className='flex gap-105'>
        <h1 className="text-8xl">Hey,</h1>
      <h1 className="text-8xl">there</h1>
      </div> */}
      <div className='flex justify-between items-center w-full px-15'>
        <p className='text-8xl font-bold w-110 '>I am Emanual Joyal K A</p>
      <p className='text-6xl font-bold  w-90'>Full Stack Developer</p>
      </div>
    </div>
  )
}

export default HeroSection
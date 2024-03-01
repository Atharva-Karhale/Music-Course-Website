import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className=' h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto md:py-0'>
        <div className=' p-10 lg:p-40 relative z-10 w-full text-center'>
            <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"/>
            <div className="rounded px-2 py-2 text-[#e5e5e5] font-bold underline underline-offset-2 flex md:hidden bg-[#0e0e0e] w-full justify-center">
              <Link href={'/courses'} className=" text-[#9d9d9d] ml-2 p-2 rounded-lg">Courses</Link>
              <div className="  p-2 text-[#d2d2d2]">  |  </div>
              <Link href={'/contact'} className="text-[#9d9d9d]  mr-2  p-2 rounded-lg">Contact Us</Link>
            </div>
            <h1 className='mt-10 md:mt-20  text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'> Master the art of music </h1>
            <p className=' mt-4 font-normal text-base md:text-lg text-[#afafaf] max-w-lg mx-auto'>Dive into our comprehensive music courses and transform your musical journey today. Whether you`&apos;`re a beginner or looking to refine your skills, join us to unlock your true potential.</p>
            <div className="mt-4">
              
                <Link href={"/courses"}>
                  <Button className=' border-2' >
                    Explore Courses
                  </Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
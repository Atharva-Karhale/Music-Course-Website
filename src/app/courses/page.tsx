'use client'    
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import CourseData from "@/data/music_courses.json"
import Link from "next/link";

function page() {
  return (
    <div className="min-h-screen bg-black py-12 md:pt-36">
            <div className="rounded px-2 py-2 text-[#e5e5e5] font-bold underline underline-offset-2 flex md:hidden bg-[#141414] w-full justify-center">
              <Link href={'/'} className=" text-[#9d9d9d] ml-2 p-2 rounded-lg">Home</Link>
              <div className="  p-2 text-[#d2d2d2]">  |  </div>
              <Link href={'/contact'} className="text-[#9d9d9d]  mr-2  p-2 rounded-lg">Contact Us</Link>
            </div>
        <h1 className="text-4xl md:text-7xl text-center font-sans font-bold mb-8 text-white mt-5 md:mt-0"> All Courses ({CourseData.courses.length}) </h1>
        <div className=" flex flex-wrap justify-center"> 
            {CourseData.courses.map((course) => 
            (<CardContainer key={course.id} className="inter-var mx-2 ">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                 <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                        {course.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      {course.description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src={course.image}
                        height="1000"
                        width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border-2 border-teal-600"
                    alt={course.title}
                    />
                    </CardItem>
                    <div className="flex justify-between items-center mt-10">
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl font-normal dark:text-white"
                      >
                        Try now →
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white font-bold"
                      >
                        Sign up
                      </CardItem>
                    </div>
                    </CardBody>
                </CardContainer>))}
        </div>
    </div>
  )
}

export default page
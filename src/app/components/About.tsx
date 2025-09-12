import React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

const About = () => {
  return (
    <div className='text-xl items-center justify-center flex-1 flex h-full flex-col' >

      <div className='flex-1 flex flex-col items-center justify-center'>
        <h1 className='text-black'>Hello I&apos;m Jenish Patel</h1>
        <p>I am a wanna be software developer</p>
        <p>I have been learning and I would like to continue to keep learning</p>
      </div>


      <div className='w-full max-w-6xl mx-auto mb-20 p-5'>
        <Carousel
          opts={{
            align: "start",
            containScroll: "trimSnaps",
            loop: true,
            
            }}
          className="w-full"
        >
          <CarouselContent>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/HTML5-high.png" alt="HTML logo" width={50} height={40} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/css-high.png" alt="CSS logo" width={50} height={40} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/Javascript.png" alt="Javascript logo" width={50} height={40} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/typescript.svg" alt="Typescript logo" width={50} height={40} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/React.png" alt="React logo" width={50} height={40} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/expo-go-app.svg" alt="Expo logo" width={50} height={40} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/nextjs-logo.png" alt="Next js logo" width={50} height={40} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/postgres.png" alt="Postgres logo" width={50} height={40} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/mongodb.svg" alt="Mongodb logo" width={50} height={40} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/tailwind-css.png" alt="Tailwind css logo" width={50} height={40} />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

export default About
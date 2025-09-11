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
        <h1 className='text-black'>Hello I&apos;m Jenish Patel</h1>
        <p>I am a wanna be software developer</p>
        <p>I have been learning and I would like to continue to keep learning</p>
        <Carousel
          opts={{
            align: "start",
            containScroll: "trimSnaps",
            loop: true,
            
            }}
          className="w-full max-w-6xl mt-10"
        >
          <CarouselContent>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/HTML5-high.png" alt="Shopping Run Screenshot" width={50} height={40} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/css-high.png" alt="Shopping Run Screenshot" width={50} height={40} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/javascript.png" alt="Shopping Run Screenshot" width={50} height={40} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/typescript.svg" alt="Shopping Run Screenshot" width={50} height={40} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/HTML5-high.png" alt="Shopping Run Screenshot" width={50} height={40} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/react.png" alt="Shopping Run Screenshot" width={50} height={40} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/expo-go-app.svg" alt="Shopping Run Screenshot" width={50} height={40} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/nextjs-logo.png" alt="Shopping Run Screenshot" width={50} height={40} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/postgres.png" alt="Shopping Run Screenshot" width={50} height={40} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/mongodb.svg" alt="Shopping Run Screenshot" width={50} height={40} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/tailwind-css.png" alt="Shopping Run Screenshot" width={50} height={40} />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    </div>
  )
}

export default About
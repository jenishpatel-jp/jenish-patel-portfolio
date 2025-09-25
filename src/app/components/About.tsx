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

      <div className='lg:w-48 lg:h-48 w-21 h-21 lg:mt-10  mt-5 overflow-hidden rounded-full'>
        <Image
          src="/images/profile/jenish_patel_bw.jpg"
          alt="Profile picture of Jenish Patel"
          width={200}
          height={200}
          className='object-cover'
          />
      </div>

      <div className='flex-1 flex flex-col items-center justify-center'>
        <p className='lg:text-2xl p-3 font-mono text-void'>I&apos;m a self-taught full stack developer driven by curiosity and a love of building things that solve real problems.</p>
        <p className='lg:text-2xl p-3 font-mono text-void'>My projects often start as ideas to improve my own life, and grow into polished applications where I get to experiment with new technologies.</p>
        <p className='lg:text-2xl p-3 font-mono text-void'>Continuous improvement is what motivates me, whether it&apos;s refining my code, learning a new framework, </p>
        <p className='lg:text-2xl p-3 font-mono text-void'>or even sharpening my skills in Chess and Mario Kart.</p>
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
          <CarouselContent >
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/HTML5-high.png" alt="HTML logo" width={80} height={60} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/css-high.png" alt="CSS logo" width={80} height={60} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/Javascript.png" alt="Javascript logo" width={80} height={60} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/typescript.svg" alt="Typescript logo" width={80} height={60} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/React.png" alt="React logo" width={80} height={60} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/expo-go-app.svg" alt="Expo logo" width={80} height={60} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/nextjs-logo.png" alt="Next js logo" width={80} height={60} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/postgres.png" alt="Postgres logo" width={80} height={60} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/mongodb.svg" alt="Mongodb logo" width={80} height={60} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/6 lg:basis-1/6'>
              <Image src="/images/skills-logo/tailwind-css.png" alt="Tailwind css logo" width={80} height={60} />
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
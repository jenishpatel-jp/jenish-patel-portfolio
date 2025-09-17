import Image from 'next/image';
import React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from '@/components/ui/button';

const STT = () => {
  return (
    <div className='text-xl items-center justify-center flex-1 flex flex-col h-full' >
        <h1 className='p-5 m-5 text-3xl'>Shroomless Time Trial</h1>
        
        <Carousel
          opts={{
            align: "start",
            containScroll: "trimSnaps",
            loop: true,
            
            }}
          className="w-full max-w-6xl"
        >
            <CarouselContent>
              <CarouselItem className='flex justify-center basis-full'>
                <Image src="/images/stt/STT-4.png" alt="Mario Kart 8 original maps" width={300} height={500} />
              </CarouselItem>
              <CarouselItem className='flex justify-center basis-full'>
                <Image src="/images/stt/STT-3.png" alt="Mario Kart 8 Deluxe maps" width={300} height={500} />
              </CarouselItem>
              <CarouselItem className='flex justify-center basis-full'>
                <Image src="/images/stt/STT-2.png" alt="Big Blue time trial runs" width={300} height={500} />
              </CarouselItem>
              <CarouselItem className='flex justify-center basis-full'>
                <Image src="/images/stt/STT-1.png" alt="Shy guy falls time trial runs" width={300} height={500} />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        <p className='text-lg'>Full Stack Mobile app to record shroomless time trial runs in Mario Kart 8 Deluxe.</p>
        <p className='text-lg'>Built with Expo, React Native and SQLite.</p>
        <div className='flex space-x-10 mt-5 justify-center items-center'>
          <Button className='w-25 h-10 rounded-lg justify-center items-center flex'>
            <Image src="/images/github/github-mark-white.png" alt="GitHub logo" width={20} height={20} className='mr-2'/>
              GitHub
          </Button>
          <Button className='w-25 h-10 rounded-lg justify-center items-center'>Android SDK</Button>
        </div>
    </div>
  )
}

export default STT;
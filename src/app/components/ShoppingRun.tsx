import Image from 'next/image';
import React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const ShoppingRun = () => {
  return (
    <div className='text-xl items-center justify-center flex-1 flex flex-col h-full' >
        <h1 className='p-5 m-5 text-3xl'>Shopping Run</h1>

        <Carousel
          opts={{
            align: "start",
            containScroll: "trimSnaps",
            loop: true,
            
            }}
          className="w-full max-w-6xl"
        >
          <CarouselContent>
            <CarouselItem className='flex justify-center md:basis-1/3 lg:basis-1/3'>
              <Image src="/images/shopping-run/shopping-run-4.png" alt="Shopping Run Screenshot" width={400} height={600} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/3 lg:basis-1/3'>
              <Image src="/images/shopping-run/shopping-run-6.png" alt="Shopping Run Screenshot" width={400} height={600} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/3 lg:basis-1/3'>
              <Image src="/images/shopping-run/shopping-run-1.png" alt="Shopping Run Screenshot" width={400} height={600} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/3 lg:basis-1/3'>
              <Image src="/images/shopping-run/shopping-run-8.png" alt="Shopping Run Screenshot" width={400} height={600} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/3 lg:basis-1/3'>
              <Image src="/images/shopping-run/shopping-run-2.png" alt="Shopping Run Screenshot" width={400} height={600} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/3 lg:basis-1/3'>
              <Image src="/images/shopping-run/shopping-run-7.png" alt="Shopping Run Screenshot" width={400} height={600} />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <p className='text-lg'>This is my Shopping Run app. Created so I can create a shopping list for the different stores we go to.</p>
        <p className='text-lg'>Has both dark and light mode styling</p>
        <p className='text-lg'>Technologies: Expo, React Native Framework</p>
    </div>
  )
}

export default ShoppingRun;
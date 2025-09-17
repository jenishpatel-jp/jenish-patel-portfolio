import Image from 'next/image';
import React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
              <Image src="/images/shopping-run/shopping-run-4.png" alt="Shopping Run Screenshot" width={300} height={500} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/3 lg:basis-1/3'>
              <Image src="/images/shopping-run/shopping-run-6.png" alt="Shopping Run Screenshot" width={300} height={500} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/3 lg:basis-1/3'>
              <Image src="/images/shopping-run/shopping-run-1.png" alt="Shopping Run Screenshot" width={300} height={500} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/3 lg:basis-1/3'>
              <Image src="/images/shopping-run/shopping-run-8.png" alt="Shopping Run Screenshot" width={300} height={500} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/3 lg:basis-1/3'>
              <Image src="/images/shopping-run/shopping-run-2.png" alt="Shopping Run Screenshot" width={300} height={500} />
            </CarouselItem>
            <CarouselItem className='flex justify-center md:basis-1/3 lg:basis-1/3'>
              <Image src="/images/shopping-run/shopping-run-7.png" alt="Shopping Run Screenshot" width={300} height={500} />
            </CarouselItem>500
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <p className='text-lg'>Full Stack Mobile app created to help create a shopping list to purchase items from different stores.</p>
        <p className='text-lg'>Created using Expo, React Native and SQLite.</p>
        <div className='flex space-x-10 mt-5 justify-center items-center'>
          <Button>
              <Link href='https://github.com/jenishpatel-jp/shopping-run' target='_blank' className='w-25 h-10 rounded-lg justify-center items-center flex'>
              <Image src="/images/github/github-mark-white.png" alt="GitHub logo" width={20} height={20} className='mr-2'/>
                GitHub
            </Link>
          </Button>
          <Button >
            <Link href='https://expo.dev/accounts/jpcodingboy/projects/shroomless-time-trials/builds/6c4e41ef-ad3e-4b38-ad32-f1ab0866789a' target='_blank' className='w-25 h-10 rounded-lg justify-center items-center flex'>
                Android SDK
            </Link>
          </Button>
        </div>
    </div>
  )
}

export default ShoppingRun;
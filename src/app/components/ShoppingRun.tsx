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
    <div className='text-xl items-center justify-center flex-1 flex h-full' >

        <Carousel>
          <CarouselContent>
            <CarouselItem className='flex justify-center'>
              <Image src="/images/shopping-run/shopping-run-4.png" alt="Shopping Run Screenshot" width={400} height={600} />
            </CarouselItem>
            <CarouselItem className='flex justify-center'>
              <Image src="/images/shopping-run/shopping-run-6.png" alt="Shopping Run Screenshot" width={400} height={600} />
            </CarouselItem>
            <CarouselItem className='flex justify-center'>
              <Image src="/images/shopping-run/shopping-run-1.png" alt="Shopping Run Screenshot" width={400} height={600} />
            </CarouselItem>
            <CarouselItem className='flex justify-center'>
              <Image src="/images/shopping-run/shopping-run-2.png" alt="Shopping Run Screenshot" width={400} height={600} />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    </div>
  )
}

export default ShoppingRun;
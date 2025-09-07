import Image from 'next/image';
import React from 'react';

const ShoppingRun = () => {
  return (
    <div className='text-xl items-center justify-center flex-1 flex h-full' >
        <Image src="/images/shopping-run/shopping-run-1.png" alt="Shopping Run Screenshot" width={400} height={600} />
    </div>
  )
}

export default ShoppingRun;
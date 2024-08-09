import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ShoppingRun = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-900 text-white">
        <h2 className="text-white w-full text-center text-5xl mb-5 " >
          Shopping Run
        </h2>
        <p className='mb-10 text-xl'>Download the Shopping Run app on your Android phone by scanning the QR code below or you can download the app by clicking 
            <span className="text-fuchsia-600" >
                <Link href={"https://expo.dev/accounts/jpcodingboy/projects/shopping-run/builds/18a37e49-537f-41e1-bf5f-3cccf87a51b6"} target='_blank'> here</Link>
            </span>.</p>
        <Image
        src={"/project-screenshots/ShoppingRunQR.png"}
        alt="Screenshot of the Shopping Run app"
        width={200}
        height={200}
        className=' justify-center'
        />
        <h3 className='my-10 text-xl' >Currently only available to download on Android.</h3>
    </div>
  )
}

export default ShoppingRun;
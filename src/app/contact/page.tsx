import React from 'react'

const Page = () => {

    return (
        <div className='flex flex-col min-h-screen items-center bg-stone-900 text-white '>
            <h1 className='my-4 text-5xl p-3 w-full text-center mt-10 underline underline-offset-8 underline-orange'>Contact</h1>
            <form className='flex flex-1 flex-col w-2/6 mt-20'>
                <label>Name</label>
                <input placeholder='John Doe'></input>
                <label>Email</label>
                <input placeholder='email@gmail.com'></input>
                <label>Message</label>
                <textarea name='content' />
                <button className='border rounded my-4 p-4 items-end w-fit'>Submit</button>
            </form>
        </div>
    )
}

export default Page
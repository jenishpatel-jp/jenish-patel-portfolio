'use client'

import { ChangeEvent, FormEvent, useState } from "react"

const Page = () => {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleNameChage = (e:ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    } 

    const handleEmailChange = (e:ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    } 

    const handleMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    } 

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }

    return (
        <div className='flex flex-col min-h-screen items-center bg-stone-900 text-white '>
            <h1 className='my-4 text-5xl p-3 w-full text-center mt-10 underline underline-offset-8 underline-orange'>Contact</h1>

            <form onSubmit={handleSubmit} className='flex flex-1 flex-col w-5/6 md:w-4/6 lg:w-2/6 mt-20'>

                <label className='p-2 text-lg'>Name</label>
                <input 
                placeholder='John/Jane Doe' 
                className='p-3 focus:outline-orange-400 bg-stone-500 placeholder:text-white rounded-md'
                value={name}
                onChange={handleNameChage}
                />

                <label className='p-2 text-lg'>Email</label>
                <input 
                placeholder='email@gmail.com' 
                className='p-3 focus:outline-orange-400 bg-stone-500 placeholder:text-white rounded-md'
                value={email}
                onChange={handleEmailChange}
                />

                <label className='p-2 text-lg'>Message</label>
                <textarea 
                name='content'  
                className='p-3 focus:outline-orange-400 bg-stone-500 rounded-md'
                value={message}
                onChange={handleMessageChange}
                />

                <div className='flex flex-row-reverse my-2'>
                    <button type="submit" className='rounded my-4 p-4 items-end w-fit text-xl underline underline-offset-8 underline-orange hover:bg-orange-400'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Page
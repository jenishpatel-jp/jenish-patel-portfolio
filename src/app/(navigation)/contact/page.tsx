'use client'

import { ChangeEvent, FormEvent, useRef, useState } from "react"
import emailjs from '@emailjs/browser';

const Page = () => {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const [nameError, setNameError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<boolean>(false);

    const form = useRef<HTMLFormElement>(null);

    const handleNameChange = (e:ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        setNameError(false);
    } 

    const handleEmailChange = (e:ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setEmailError(false);
    } 

    const handleMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
        setMessageError(false);
    } 

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let isValid = true;
        if (!name) {
            setNameError(true);
            isValid = false;
        }

        if (!email) {
            setEmailError(true);
            isValid = false;
        }

        if (!message){
            setMessageError(true);
            isValid = false;
        }

        if (isValid && form.current){
            emailjs.sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID!,
                process.env.NEXT_PUBLIC_TEMPLATE_ID!,
                form.current,
                process.env.NEXT_PUBLIC_PUBLIC_KEY!
            )
            .then((response )=>{
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                setName("");
                setEmail("");
                setMessage("");
            }, (error) => {
                console.error('FAILED...', error);
                alert("Failed to send message. Please try again.");
            });
        } else {
            alert("Please fill in all the fields.")
        }
    }

    

    return (
        <div className='flex flex-col min-h-screen items-center bg-stark text-void '>
            <h1 className='my-4 text-5xl p-3 w-full text-center mt-10 underline underline-offset-8 underline-blue'>Contact</h1>

            <form onSubmit={handleSubmit} ref={form} className='flex flex-1 flex-col w-5/6 md:w-4/6 lg:w-2/6 mt-20'>

                <label className='p-2 text-lg'>Name</label>
                <input 
                placeholder='John/Jane Doe' 
                className={`p-3 focus:outline-blue bg-zinc-700 placeholder:text-stark rounded-md text-stark`}
                value={name}
                onChange={handleNameChange}
                name="user_name"
                />

                <label className='p-2 text-lg'>Email</label>
                <input 
                placeholder='email@gmail.com' 
                className={`p-3 focus:outline-blue bg-zinc-700 placeholder:text-stark rounded-md text-stark`}
                value={email}
                onChange={handleEmailChange}
                name="user_email"
                />

                <label className='p-2 text-lg'>Message</label>
                <textarea 
                name="message"
                className={`p-3 focus:outline-blue bg-zinc-700 placeholder:text-stark rounded-md text-stark`}
                value={message}
                onChange={handleMessageChange}
    
                />

                <div className='flex flex-row-reverse my-2'>
                    <button type="submit" className='rounded-md my-4 p-4 items-end w-fit text-xl underline underline-offset-8 underline-blue hover:bg-blue-400'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Page
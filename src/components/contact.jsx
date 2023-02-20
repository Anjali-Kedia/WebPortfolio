import React from 'react';

const Contact = () => {
    return ( 
        <div name='contact' className='w-full h-screen flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/8cb733ec-a7dc-4f74-8b29-64ead005fa95" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#FFDDDB] text-white'>CONTACT</p>
                <p className='text-white py-4'>Feel free to fill in the form or shoot me an email - 24kedia.anjali@gmail.com </p>
                </div>
                    <input className='bg-[#FFDDDB] p-2 py-2' type="text" placeholder='Name' name='name' />
                    <input className ='my-4 py-2 bg-[#FFDDDB] p-2'type="Email" placeholder='Email' name='email' />
                    <textarea className='bg-[#FFDDDB] p-2' name="Message" rows='10' placeholder='Message'></textarea>
                    <button className='text-white border-2 hover:bg-[#FFDDDB] hover:border-[#FFDDDB] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
     );
}
 
export default Contact;
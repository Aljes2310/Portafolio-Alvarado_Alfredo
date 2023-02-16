import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_t5bi11m', 'template_5x2l7ht', form.current, 'EiHQ4Jazd2vrNaLns') /* form.current extracts everything */
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset(); /* limpia los input */
  };

  return (
    <div class="flex sm:flex-row sm:gap-x-20  sm:w-full">
    <form class="rounded px-8 pt-6 pb-8 mb-4 sm:h-full sm:w-full items-center ml-7 sm:ml-0" ref={form} onSubmit={sendEmail}>
      <div class="mb-4">
        <label class="block text-white sm:text-3xl font-bold sm:mb-2 sm:py-5 mt-10 mr-5 sm:mr-0"  type="text" name="user_name">
          Your Name
        </label>
        <input class=" shadow appearance-none border rounded sm:w-96 mt-2 sm:py-2 px-3 text-gray-700 leading-tight focus:outline-none 
        focus:shadow-outline  mr-5 sm:ml-0" type="text"   
        name="user_name"/>
      </div>
      <div class="mb-6">
        <label class="block  mr-5 sm:mr-0  text-white sm:text-3xl font-bold sm:mb-2 sm:py-5 mt-2" for="password">
          Your Email
        </label>
        <input class="shadow appearance-none border rounded sm:w-96 mt-2 sm:py-2 px-3 text-gray-700 leading-tight focus:outline-none 
        focus:shadow-outline  mr-5 sm:ml-0" 
        type="email" name="user_email" />
      </div>
      <div class="mb-6">
        <label class="block mr-5 sm:mr-0 text-white sm:text-3xl font-bold sm:mb-2 sm:py-5 mt-2" for="password">
          Message
        </label>
        <textarea class="shadow appearance-none border border-red-500 rounded sm:w-96 sm:h-56 sm:py-2 sm:px-3  py-10 px-10 mt-2 text-gray-700 mb-3 leading-tight 
        focus:outline-none focus:shadow-outline block  mr-5 sm:ml-0" 
        name="message" /> 
      </div>
      
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none
         focus:shadow-outline ml-16 sm:ml-0" 
        type="submit" value="Send">
          Send
        </button>
      </div>
    </form>
  </div>
  );
};
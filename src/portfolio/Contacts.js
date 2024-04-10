import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import validator from "validator";

export default function Contact({ contact, onSendMessage }) {
  
  const defaultContact = {name:"",email:"",message:""}
  const [userContact,setUserContact] = useState(defaultContact);

  const onSubmit = (e)=>{
    e.preventDefault();
    if(!validator.isEmail(userContact.email)){
        alert("Check Email Field");
        return;
    }
    if(!validator.matches(userContact.name,/^[a-zA-Z]+$/)){
      alert("Name Only Include Alphabets");
      return;
    }
    if(!validator.matches(userContact.message,/^.{5,200}$/)){
      alert("Message Length Must Between 5 to 200 Characters");
      return;
    }
    toast.success("Message Sent !!");
    setUserContact(defaultContact);
    onSendMessage(userContact);
  }
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30767295.116023116!2d60.9460276840177!3d19.72227226514473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1710867860023!5m2!1sen!2sin"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md justify-around">
            <div className="lg:w-2/5 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                {contact.address}
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                {contact.email}
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">{contact.phone}</p>
            </div>
          </div>
        </div>
        <form
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            Are you looking for a dedicated professional to join your team or assist with your 
            projects? Look no further! I am currently available for hire and eager to bring my 
            skills and expertise to your organization or project.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={userContact.name}
              onChange={(e)=>{
                e.preventDefault();
                setUserContact({...userContact,name:e.target.value});
              }}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={userContact.email}
              onChange={(e)=>{
                setUserContact({...userContact,email:e.target.value})
              }}  
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              value={userContact.message}
              onChange={(e)=>{
                setUserContact({...userContact,message:e.target.value});
              }}
            />
          </div>
          <button
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={onSubmit}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
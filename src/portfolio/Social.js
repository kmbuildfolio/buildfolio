import { GlobeIcon, LinkIcon } from "@heroicons/react/solid";
import React from 'react'

const Social = ({ social }) => {
    return (
        <section id="social">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <LinkIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Social &amp; Links
                    </h1>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 justify-center">
                    {social.map((social,key) => (
                        <div key={key} className="p-2 sm:w-1/4 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center break-all">
                                <GlobeIcon className="text-blue-300 w-6 h-6 flex-shrink-0 mr-4" />
                                <a className="title-font font-medium text-white w-full text-center 
                                    hover:underline hover:text-blue-500" href={social.value} target="_blank">
                                    {social.key}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Social
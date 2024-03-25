import React from 'react'

const Header = ({handleFormPage}) => {
    return (
        <header className="h-[calc(100vh-50px)] flex justify-center content-center">
                <div className="self-center sm:w-1/2 w-full px-8">
                    <h1 className="font-sans font-bold text-5xl">
                        Now Create Your Own
                    </h1>
                    <h1 className='font-sans font-bold text-5xl py-2'>Portfolio</h1>
                    <p className="my-4">At BuildFolio, we believe in the power of simplicity. Our intuitive interface empowers users of all skill levels to create personalized portfolios that reflect their unique talents and accomplishments.</p>
                    <button className="px-4 py-2 bg-gray-300 rounded-md font-medium border border-gray-400" onClick={handleFormPage}>Let's Create</button>
                </div>
        </header>
    )
}

export default Header
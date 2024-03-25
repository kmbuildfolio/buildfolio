import React from 'react'
import { Button } from '@mui/material'

const Info = ({setLoginForm}) => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center p-6 lg:p-12">
                <div className="space-y-4 text-center lg:w-3/4 xl:space-y-6 xl:w-2/3">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold">Welcome back!</h1>
                        <p className="text-gray-500 dark:text-gray-400">Enter your email below to login to your account</p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold">New to Acme Inc?</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            Access all your data in one place after logging in. No account yet? Don't worry, you can sign up after
                            you've seen what we have to offer.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold">Forgot your password?</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            No problem! Click the button below and we'll help you get back into your account.
                        </p>
                    </div>
                    <Button className="w-full lg:w-auto" variant="outlined" onClick={(e)=>{setLoginForm(false)}}>
                        Reset password
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Info
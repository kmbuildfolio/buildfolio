import React from 'react'
import { Button } from '@mui/material'

const ResetPassInfo = ({setLoginForm}) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 lg:p-12 h-full">
        <div className="space-y-4 text-center lg:w-3/4 xl:space-y-6 xl:w-2/3">
            <div className="space-y-2">
                <h1 className="text-4xl font-bold">Forgot your password?</h1>
                <p className="text-gray-500 dark:text-gray-400">No problem! Enter Your Email And Verify It.</p>
            </div>
            <div className="space-y-2">
                <h2 className="text-3xl font-bold">Change Your Password !!</h2>
                <p className="text-gray-500 dark:text-gray-400">
                    After completing verification you can change your password.
                    Make Sure If You Cant Change Your Password Then It Will Not Reflect On Your Account.
                </p>
            </div>
            <div className="space-y-2">
                <h2 className="text-3xl font-bold"></h2>
                <p className="text-gray-500 dark:text-gray-400">
                    
                </p>
            </div>
            <Button className="py-2 px-4" variant="outlined" onClick={()=>{setLoginForm(true)}}>
                        Login
            </Button>
        </div>
    </div>
  )
}

export default ResetPassInfo
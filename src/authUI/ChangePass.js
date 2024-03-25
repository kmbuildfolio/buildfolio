import React, { useState } from 'react'

const ChangePass = ({handleOnSubmitPass}) => {
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const[error,setError] = useState(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(newPass !== confirmPass){
            setError("New and Confirm Password Must Be Same");
            return;
        }
        handleOnSubmitPass(newPass,confirmPass);
    }
  return (
    <div className="flex flex-col justify-center gap-4 w-full">
        <form action="" className="my-10">
            <div className='text-center'>
            {error && <span className="text-red-800 text-sm">{error}</span>}
            </div>
                <div className="flex flex-col space-y-5">
                    <label htmlFor="email">
                        <p className="font-medium text-slate-700 pb-2">New Password</p>
                        <input id="email" name="email" type="email" className="w-full py-[10px] borderrounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow bg-transparent custom-border" placeholder="Enter New Password" onChange={(e)=>{setNewPass(e.target.value)}} style={{border:"1px solid gray"}} value={newPass}/>
                    </label>

                    <label htmlFor="email">
                        <p className="font-medium text-slate-700 pb-2">Confirm New Password</p>
                        <input id="email" name="email" type="email" className="w-full py-[10px] borderrounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow bg-transparent custom-border" placeholder="Enter Confirm Password" onChange={(e)=>{setConfirmPass(e.target.value)}} value={confirmPass}/>
                    </label>

                    <button className="w-full py-[10px] font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center" onClick={handleSubmit} defaultValue={confirmPass}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                        </svg>

                        <span>Reset password</span>
                    </button>
                </div>
            </form>
    </div>
  )
}

export default ChangePass
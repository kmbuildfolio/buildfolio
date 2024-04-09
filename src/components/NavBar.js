import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Button } from '@mui/material'
import { useState } from 'react'
import { doLogout, isLogin } from '../authService/auth'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../service/PersonService'
import { toast } from 'react-toastify';

const NavBar = ({ props }) => {
  const [isNavLogin, setIsNavLogin] = useState(isLogin());
  const navigate = useNavigate();

  const logout = () =>{
    logoutUser()
    .then((data)=>{
      if(data.success){
        toast.success(data.message);
      }
      doLogout();
      navigate('/');
    })
    .catch(err =>{
      doLogout();
      navigate('/');
      toast.error("Somthing Went Wrong");
    });
  }
  
  return (
    <div className="flex-initial w-full pt-1 border-t bg-transparent h-[50px]">
      <div className="container flex items-center justify-between px-4 md:px-7 lg:px-20">
        <a className="flex items-center space-x-2 cursor-pointer" href='/'>
          <img src={'./buildfolio-logo.png'} className="bg-transparent h-[40px] w-auto" />
        </a>
        {/* <nav className="hidden space-x-4 text-[15px] font-semibold lg:flex w-9/12">
            <a
              className="text-gray-900/90 hover:text-gray-900/100 dark:text-gray-50/90 dark:hover:text-gray-50 no-underline"
              href="/#features"
            >
              Features
            </a>
            <a
              className="text-gray-900/90 hover:text-gray-900/100 dark:text-gray-50/90 dark:hover:text-gray-50 no-underline"
              href="/#contact"
            >
              Discuss
            </a>
          </nav> */}
        <div className="flex items-center space-x-4">
          <a href="mailto:vk783838@gmail.com" className="text-black">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="https://www.linkedin.com/in/vipin-886bab25a/" className="text-black" target='_blank'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/kmvipin" className="text-black" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          {isNavLogin ? <Button className='custom-nav-button text-black' size="sm" variant="outline-dark" onClick={logout}>
            LogOut
          </Button> :
            <Button className='custom-nav-button text-black' size="sm" variant="outline-dark" onClick={()=>{navigate('/login')}}>
              LogIn
            </Button>}
        </div>
      </div>
    </div>
  )
}

export default NavBar
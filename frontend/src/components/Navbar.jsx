import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useClerk,UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const {openSignIn}=useClerk()
  const { user }=useUser()

  const {setShowRecruiterLogin}=useContext(AppContext)
  return (
    <div className='shadow py-4'>
        <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
            <Link to="/">
            <img src={assets.sastra}
            style={{
              
              width: '225px',
              height: '55px',
              objectFit: 'contain', // Keeps the logo from distorting
              backgroundColor: 'transparent' // Ensures no background shows
            }}
            
            alt="Logo"/>
            </Link>
            { user?
            <div className='flex items-center gap-3'>
              <Link to={"/applications"}>Applied Jobs</Link>
              <p className='max-sm:hidden'>Hi, {user.firstName+" "+user.lastName}</p>
              <UserButton />
            </div>:
            <div className='flex gap-4 max-sm:text-xs'>
                <button onClick={e=>setShowRecruiterLogin(true)} className='text-gray-600'>Login as a recruiter</button>
                <button onClick={openSignIn} className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full'>Login</button>
            </div>
            }
        </div>
    </div>
  )
}

export default Navbar
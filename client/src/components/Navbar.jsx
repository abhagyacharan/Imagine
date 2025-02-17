import React, {useContext} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Navbar = () => {

  const {user, setShowLogin} = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between py-4'>
      <Link to='/'>
        <h1 className='text-4xl font-medium'>imagine.ai</h1>
      </Link>

      <div>
        {user ?
          <div className='flex items-center gap-2 sm:gap-3'>
            <button onClick={() => navigate('/buy')} className='flex items-center gap-2 bg-white/60 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
              <img className="w-5" src={assets.credit_star} alt="" />
              <p className='text-xs sm:text-sm font-medium text-gray-600'>Credits Left : 50</p>
            </button> 
            <p className='text-gray-600 max-sm:hidden pl-4'>Hi, Grog</p>
            <div className='relative group'>
              <img className="w-10 drop-shadow" src={assets.profile_icon} alt="" />
              <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                  <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm '>
                    <li className='py-1 px-2 pr-10 cursor-pointer'>Profile</li>
                  </ul>
              </div>
            </div>
          </div >
          :
          <div className='flex items-center gap-2 sm:gap-5'>
            <p onClick={() => navigate('/buy')} className='cursor-pointer'>Pricing</p>
            <button onClick={() => setShowLogin(true)} className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full'>Login</button>
          </div>
        }
      </div>

    </div>


  )
}

export default Navbar
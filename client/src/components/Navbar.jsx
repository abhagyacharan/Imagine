import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets';

const Navbar = () => {

  const [user, setUser] = useState(true);

  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between py-4'>
      <Link to='/'>
        <h1 className='text-4xl'>Imagine</h1>
      </Link>

      <div>
        {user ?
          <div>
            <button>
              <img className="w-5" src={assets.credit_star} alt="" />
              <p>Credits Left : 50</p>
            </button>
            <p>Hi, Grog</p>
            <div className='relative group'>
              <img className="w-10 drop-shadow" src={assets.profile_icon} alt="" />
              <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                  <ul>
                    <li>
                      Logout
                    </li>
                  </ul>
              </div>
            </div>
          </div >
          :
          <div className='flex items-center gap-2 sm:gap-5'>
            <p onClick={() => navigate('/buy')} className='cursor-pointer'>Pricing</p>
            <button className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full'>Login</button>
          </div>
        }
      </div>

    </div>


  )
}

export default Navbar
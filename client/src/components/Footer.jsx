import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='flex items-center justify-betweengap gap-4 py-3 mt-20'>

            <h1 className='text-3xl font-semibold '>Imagine</h1>
            <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>All Rights Reserved. Copyright @ABC</p>

            <div className='flex gap-3.5'>
                <a href="https://github.com/abhagyacharan" target="_blank" rel="noopener noreferrer">
                    <img src={assets.github} alt="Github Profile" className='w-8 hover:scale-105 cursor-pointer' />
                </a>
                <a href="https://x.com/abhagyacharan" target="_blank" rel="noopener noreferrer">
                    <img src={assets.x} alt="X Profile" className='w-8 hover:scale-105 cursor-pointer' />
                </a>
            </div>
        </div>
    )
}

export default Footer
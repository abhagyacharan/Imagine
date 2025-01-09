import React, { useContext } from 'react'
import { plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'motion/react'

const BuyCredit = () => {

  const { user } = useContext(AppContext)

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='min-h-[78vh] text-center pt-14 mb-10'>
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6 cursor-default'>Our Plans</button>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>Choose the plan</h1>

      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((plan, index) => (
          <div key={index}
            className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500'>
            <p className='mt-3 mb-1 text-2xl font-semibold'>{plan.id}</p>
            <p className='text-sm'>{plan.desc}</p>
            <p className='mt-12'>
              <span className='text-3xl font-medium'>$ {plan.price} </span>/ {plan.credits} credits</p>
            <button className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'>{user ? 'Purchase' : 'Get Started'}</button>
          </div>
        ))}
      </div>

    </motion.div>
  )
}

export default BuyCredit
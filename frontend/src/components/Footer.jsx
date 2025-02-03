import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* Blog Description */}
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="WeebTales Logo" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Welcome to <b>WeebTales</b>! Your go-to anime blog for the latest reviews, recommendations, and industry news. Dive into the world of anime with insightful posts that cater to both casual fans and die-hard enthusiasts.
            </p>
        </div>

        {/* Blog Links */}
        <div>
            <p className='text-xl font-medium mb-5'>BLOG LINKS</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Contact</li>
            </ul>
        </div>

        {/* Get in Touch */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-123-456-7890</li>
                <li>contact@weebtales.com</li>
                <li>Follow us: Twitter | Instagram</li>
            </ul>
        </div>

      </div>

      {/* Copyright Information */}
      <div>
          <hr />
          <p className='py-5 text-sm text-center'>Copyright 2025@ WeebTales.com - All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer

import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      {/* Section: About WeebTales */}
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'WEEBTALES'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="Anime Blogging" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Welcome to <b>WeebTales</b>, your go-to destination for anime blogs! We publish well-crafted articles covering anime reviews, industry news, character deep dives, and more.</p>
              <p>Our goal is simple: to create a space where anime fans can enjoy insightful blogs without distractions. Whether you're looking for the latest seasonal anime recommendations or revisiting classics, we’ve got you covered.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>WeebTales exists to provide high-quality, engaging, and informative content for you to read and enjoy.</p>
          </div>
      </div>

      {/* Section: What We Cover */}
      <div className='text-xl py-4'>
          <Title text1={'WHAT'} text2={'WE COVER'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Anime Reviews:</b>
            <p className='text-gray-600'>We provide in-depth reviews of seasonal and classic anime, analyzing story, animation, and character development.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Anime News & Announcements:</b>
            <p className='text-gray-600'>Stay updated with the latest anime industry news, upcoming releases, and event highlights.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Anime Recommendations:</b>
            <p className='text-gray-600'>Not sure what to watch next? We curate watchlists and genre-based suggestions to help you discover new favorites.</p>
          </div>
      </div>

      <NewsletterBox />
      
    </div>
  )
}

export default About

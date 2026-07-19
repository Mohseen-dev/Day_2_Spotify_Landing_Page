import React from 'react'
import Card from './Card'

const RightHero = ({componentHeading="Trending Songs"}) => {
  return (
    <div className='rightHero  bg-[#121212] rounded-md '>
      <div className='componentConainer bg-tekjal-600 p-6 '>
        <h1 className='componentHeading text-white text-2xl font-bold'>Trending Songs</h1>
        <div className='cardContainer bg-violet-700 flex justify-start gap-2 my-2 overflow-x-auto'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

        </div>

      </div>
    </div>
  )
}

export default RightHero

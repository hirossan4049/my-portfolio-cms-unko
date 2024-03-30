import React from 'react'

const SideMenu = () => {
  return (
    <ul className='flex flex-col items-center justify-evenly text-xl h-screen w-1/12 bg-primary text-white [&>li]:border-b-2 [&>li]:border-white [&>li]:p-3'>
      <li><a href="/home">Home {'>'}</a></li>
      <li><a href="/products">Products {'>'}</a></li>
      <li><a href="/learning">Learning {'>'}</a></li>
      <li><a href="/profile">Profile {'>'}</a></li>
      <li><a href="/contact">Contact {'>'}</a></li>
    </ul>
  )
}

export default SideMenu 
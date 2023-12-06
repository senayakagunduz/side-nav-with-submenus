"use client";
import React from 'react'
import sideNavItems from "./data"
import MenuItem from './MenuItem'

const SideBar = ({ collapsed }) => {
  return (
    <div className={`bg-white h-screen pt-5 ${collapsed ? 'w-20' : 'w-80 md:block'} duration-300 overflow-y-auto `}>
      <div className='flex flex-col space-y-2 w-full'>
        <div className='flex flex-col space-y-2 px-2 md:px-6 text-md'>
          {sideNavItems.map((item, index) => <MenuItem key={index} item={item} collapsed={collapsed} />)}
        </div>
      </div>
    </div>
  )
}

export default SideBar
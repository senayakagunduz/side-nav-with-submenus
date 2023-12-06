"use client";
import React from 'react'
import sideNavItems from "./data"
import MenuItem from './MenuItem'

const SideBar = ({ collapsed }) => {
  return (
    <aside className={`bg-white h-screen p-3 pt-5 ${collapsed ? 'w-20' : 'w-72 md:block'} duration-300 overflow-y-auto `}>
      <nav className='flex flex-col space-y-2 w-full'>
        <div className='flex flex-col space-y-2 md:px-6 text-md'>
          {sideNavItems.map((item, index) => <MenuItem key={index} item={item} collapsed={collapsed} />)}
        </div>
      </nav>
    </aside>
  )
}

export default SideBar
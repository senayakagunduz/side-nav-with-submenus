"use client";
import { useState } from "react";

import SideBar from "../../components/SideBar";
import Header from "@/components/Header";


export default function Layout(props) {
  const [collapsed, setCollapsed] = useState(false); //açık

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} collapsed={collapsed} />
      
      <main className="flex">
      <SideBar collapsed={collapsed}/>
        {props.children}
      </main>
    </div>
  )
}
 
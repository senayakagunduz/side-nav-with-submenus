"use client";
import { useState } from "react";
import Header from "../../components/header";
import SideBar from "../../components/SideBar";


export default function Layout(props) {
  const [collapsed, setCollapsed] = useState(false); //açık
  const [expand, setExpand]=useState(true);
  const [isActive, setIsActive] = useState(false);

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
 {/* <SideBar  toggleSidebar={toggleSidebar} collapsed={collapsed} setCollapsed={setCollapsed} isActive={isActive}/> */}
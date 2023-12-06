import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const MenuItem = ({ item, collapsed, index }) => {
    console.log(item, "item")
    const [selectedItem, setSelectedItem] = useState(null);
    const [subMenuOpen, setSubMenuOpen] = useState(true);

    const pathname = usePathname();
    const router = useRouter();

    const handleItemClick=(index,path)=>{
        setSelectedItem(index);

        if(item.submenuItems){
            toggleSubMenu()
        }
        if(path){
            router.push(path)
        }
    }

    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
      };

      useEffect(() => {
        setSubMenuOpen((item.submenuItems && item.submenuItems[0]?.icon))
      }, [pathname]);
    
      return ( 
      <>
            {!collapsed ? 
            (<>
                <div>
                    <div
                        onClick={() => handleItemClick(item?.path || '/')}
                        className={`flex ${
                        item.mainmenu ? 'text-red-800' : 'cursor-pointer link'
                        } items-center`}
                    >
                        <Link
                            href={item.path || "#"}
                            onClick={() => handleItemClick(index, item.path)}
                            className={`${
                                pathname === item.path && index === selectedItem
                                ? 'flex gap-2 items-center bg-purple-100 rounded-lg text-purple-800 font-bold transition duration-150 ease-in-out hover:bg-purple-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-400'
                                : ''
                            } text-sm flex justify-center items-center cursor-pointer pl-0`}
                            >
                                <span>{item.icon}</span>
                                <span>{item.title}</span>
                            </Link>
                    
                        {item.submenuItems && !item.submenuItems[0]?.icon && (subMenuOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />)}
                    </div>
            
                {subMenuOpen && item.submenuItems && (
                    <div className='pl-5'>
                    {item.submenuItems.map((child, index) => (
                        <Link href={item.path || "#"}>
                            <MenuItem key={index} item={child} />
                        </Link>
                        
                    ))}
                    <hr className="border-gray-100 my-2 px-2 w-full" />
                    </div>
                )}

                </div></>) 
                : (
                <> 
                    
                   {item.submenuItems.map((child, index)=>{
                    return (
                        <Link href={item.path || "#"}>
                        <div key={index} className='text-xl'>{child.icon}</div>
                        </Link>
                        
                    )
                   })}
                </>)}
      </>
                
      );
    };
    
    export default MenuItem;
//<hr className="border-gray-500 my-2 px-2 w-full" />
// onClick={()=>handleItemClick(index, item.path)} 
// if (item.submenuItems) {
//         return (
//             <li className='flex flex-1 flex-col'>
//                 <ul role="list" className='-mx-2 space-y-1'>
//                     <Link href={item.path || "#"} className='flex-column items-center'>
//                         <span>{item.icon}</span>
//                         <span>{item.title}</span>
//                     </Link>
//                     {/* <FiChevronDown onClick={()=>setOpen(!open)}></FiChevronDown>  */}
//                     </ul>
//                     <div className='flex'>
//                         {item.submenuItems.map((child, index) => <MenuItem key={index} item={child} />)}
//                     </div>
//                 </li>
//             )
    
//         } else {
//             return (
//                 <Link href={item.path || "#"} className='flex items-center'>
//                     <span>{item.icon}</span>
//                     <span>{item.title}</span>
//                 </Link>
//             )
//         }

// if (item?.submenuItems) {
//     return (
//         <>
//         <button onClick={toggleSubMenu}
//         className={`flex flex-row items-center p-2 rounded-lg hover:bg-purple-100 w-full justify-between ${
//         pathname.includes(item?.path) ? 'bg-purple-200' : ''}`}> 
//             <div className="flex flex-row space-x-4 items-center">
//                 {item?.icon}
//                 <span className="font-semibold text-xl  flex">{item?.title}</span>
//             </div>
//         </button>
//         {
//             subMenuOpen && (
//             <div className='my-2 ml-12 flex flex-col space-y-4'>
//                 {item.submenuItems?.map((subItem,idx)=>{
//                     return (
//                         <Link 
//                         key={idx}
//                         href={subItem?.path}
//                         className={`${subItem?.path === pathname ? 'font-bold text-purple-700' : ''}`}
//                         >
//                             <span>{subItem?.title}</span>
//                         </Link>
//                     )
//                 })}
//             </div>)
//         }
//         </>
//     )

// } else {
//     return (
//         <>
//         <Link href={item?.path}
//         className={`flex flex-row space-y-4 items-center p-2 rounded hover:bg-purple-100 ${item.path ===pathname ? 'bg-purple-100' : ''}`}>
//             {item?.icon}
//             <span className="font-semibold text-xl flex">{item?.title}</span>
//         </Link>
//         </>
//     )
// }

// }

// {item.submenu ? 
//     (<>
//     <Link href={item?.path || "/"} className=''>
//         <span className='text-red-800'>{item.title}</span>
//         <MdKeyboardArrowDown className="text-xl"/>
//     </Link> 
//     </>
    
//     ) : ( 

//     <>
//     <Link href={item?.path || "/"} className='link flex-column items-center'>
//         <span className='text-blue-800'>{item.title}</span>     
//     </Link>
//     </>
//     )}

// if (item.submenuItems) {
//     //itemın altında array(submenuItems) varsa
//     return (
//         <div  onClick={handleItemClick(item?.path || '/')}>
//             <div className='flex flex-col '>
//                 <div role="list" className='-mx-2 space-y-1 '>
//                     {item.mainmenu? 
//                     (
//                     <>
//                     <Link href={item?.path || "/"} 
//                     className='flex'>
//                         <span className='text-red-800'>{item.title}</span>  
//                     </Link> 

//                     </>
                    
//                     ) :
                    
//                     ( 
//                      item?.submenu &&  <>
//                         <Link href={item?.path || "/"} className='link flex items-center'>
//                             <span>{item.icon}</span>
//                             <span className='text-blue-800'>{item.title}</span>
//                             <MdKeyboardArrowDown/> 
//                         </Link>
//                         </>
//                     )}
//                 </div>
               
//                     {/**/}
//                     <div className='flex-column pl-5 text-yellow-600'>
//                         {item.submenuItems.map((child, index) => <MenuItem key={index} item={child} />)}
//                     </div>
//             </div>
            
//         </div>
        
//             )
//      //itemın altında array(submenuItems) yoksa
//         } else {
//             return (
//                 <Link href={item.path || "#"} className='flex items-center'>
//                     <span>{item.icon}</span>
//                     <span>{item.title}</span>
                    
//                 </Link>
//             )
//         }
// }

// export default MenuItem
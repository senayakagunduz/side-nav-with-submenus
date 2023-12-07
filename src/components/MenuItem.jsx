import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const MenuItem = ({ item, collapsed, index }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedIcon, setSelectedIcon] = useState(null);
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const pathname = usePathname();
    const router = useRouter();

    const handleItemClick = (index, path) => {

        if (selectedItem === index) {
            setSelectedItem(null); // Deselect if already selected
        } else {
            setSelectedItem(index);
        }

        if (item.submenuItems) {
            toggleSubMenu()
        }
        if (path) {
            router.push(path)
        }
    }

    const handleCollapsedIconClick = (index, path) => {
        if (selectedIcon === index) {
            setSelectedIcon(null); // Deselect if already selected
        } else {
            setSelectedIcon(index);
        }

        if (path) {
            router.push(path)
        }
    }

    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    useEffect(() => {

        if (!item.icon && item.submenuItems && item.submenuItems.length > 0) {
            setSubMenuOpen(true);

        }

        if (selectedItem === index && item.submenuItems) {
            setSubMenuOpen(true);
        }

    }, []);

    useEffect(() => {

    }, [pathname])

    return (
        <>
            {/*sidebar açıksa*/}
            {!collapsed ?
                (<>
                    <div>
                        {/*tüm linklerin hoverı*/}
                        {!item.mainmenu ?
                            (<div onClick={toggleSubMenu} key={index}
                                className={`flex py-1 items-center rounded-lg  `}>
                                {/*submenuitems*/}

                                <div className='flex items-center justify-between '>
                                    <Link
                                        key={index}
                                        href={item.path || "#"}
                                        onClick={() => handleItemClick(index, item.path)}
                                        className={`${((pathname === item.path || item.path === undefined) && index === selectedItem && !item?.leaf)
                                            ? 'flex flex-row space-x-4 items-center bg-purpleLight text-purple-800 transition-colors rounded-lg  font-bold'
                                            : 'bg-none'
                                            } ${((pathname === item.path || item.path === undefined) && index === selectedItem && item?.leaf)
                                                ? 'flex flex-row space-x-4 items-center text-purple-800  font-bold'
                                                : ''
                                            } text-sm flex justify-center items-center cursor-pointer py-2 px-4 rounded-lg 
                             `}
                                    >
                                        {item.leaf ?
                                            (
                                                <ul key={index} className='flex items-center justify-start ml-8 w-32 hover:bg-none'>
                                                    <li className='list-disc'>{item.title}</li>
                                                </ul>
                                            )
                                            :
                                            (
                                                <ul className='flex justify-items-start items-center w-40 py-2 px-3 '>
                                                    <li className='mr-3'>{item.icon}</li>
                                                    <li className=''>{item.title}</li>
                                                </ul>
                                            )}
                                        {item.submenuItems && !item.submenuItems[0]?.icon &&
                                            (subMenuOpen ?
                                                <div className='flex flex-row space-x-4'><MdKeyboardArrowUp /></div>
                                                :
                                                <div className='flex flex-row space-x-4'><MdKeyboardArrowDown /></div>
                                            )}
                                    </Link>
                                </div>
                            </div>
                            )
                            :
                            (
                                <>
                                    {!item.firstItem ? <hr className="border-gray-200 my-2 px-2 w-full" /> : <></>}
                                    <span>{item.title}</span></>)}

                        {subMenuOpen && item.submenuItems && (
                            <div className='pl-4'>
                                {/*Başlık dışıdakileri bastırıyor*/}
                                {item.submenuItems.map((child, index) => (
                                    <div as={Link} href={item.path || "#"} key={index}>
                                            <MenuItem key={index} item={child} />
                                    </div>
                                ))}

                            </div>
                        )}

                    </div>
                </>
                )
                :
                (

                    <>
                        {
                            item.submenuItems.filter((child) => child.path).map((child, index) => (
                                <div key={index} className='flex item-center ml-2 py-2 pr-4 cursor-pointer text-gray-700' style={{
                                    transition: 'background-color 0.3s',
                                }}>
                                    <Link key={index}
                                        href={child.path || "#"}
                                        onClick={() => handleCollapsedIconClick(index, child.path)}
                                        className='flex justify-center items-center '>
                                        <div className={` flex items-center justify-center rounded-lg p-3 text-xl hover:bg-purpleLight hover:rounded-lg
                                        ${pathname === child.path
                                                && index === selectedIcon ? 'text-textPurple bg-purpleLight w-8' : 'w-8'}`}>
                                            <span key={index} className=' flex justify-center items-center text-2xl '>
                                                {child.icon}
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }

                    </>
                )}
        </>

    );
};

export default MenuItem;

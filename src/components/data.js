// export const SIDENAV_ITEMS= [
//     {
//       title: 'Home',
//       path: '/',
//       icon: <Icon icon="lucide:home" width="24" height="24" />,
//     },
//     {
//       title: 'Projects',
//       path: '/projects',
//       icon: <Icon icon="lucide:folder" width="24" height="24" />,
//       submenu: true,
//       subMenuItems: [
//         { title: 'All', path: '/projects' },
//         { title: 'Web Design', path: '/projects/web-design' },
//         { title: 'Graphic Design', path: '/projects/graphic-design' },
//       ],
//     },
//     {
//       title: 'Messages',
//       path: '/messages',
//       icon: <Icon icon="lucide:mail" width="24" height="24" />,
//     },
//     {
//       title: 'Settings',
//       path: '/settings',
//       icon: <Icon icon="lucide:settings" width="24" height="24" />,
//       submenu: true,
//       subMenuItems: [
//         { title: 'Account', path: '/settings/account' },
//         { title: 'Privacy', path: '/settings/privacy' },
//       ],
//     },
//     {
//       title: 'Help',
//       path: '/help',
//       icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
//     },
//   ];

import { RiDashboardLine } from "react-icons/ri";
import { TbAutomaticGearbox, TbBasket, TbBasketBolt, TbClipboardTypography, TbColorPicker, TbDeviceAnalytics, TbMap2, TbScreenShare, TbShadow } from "react-icons/tb";
import { BsClipboardData } from "react-icons/bs";
import { FiUserCheck, FiUserPlus } from "react-icons/fi";
import { GiChart } from "react-icons/gi";
import { MdOutlineWifiTethering } from "react-icons/md";
import { CiDatabase } from "react-icons/ci";
import { IoBasket, IoTabletLandscape } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import { AirOutlined } from "@mui/icons-material";

const sideNavItems = [
  
  {
    title: 'Dashboard',
    path: '/',
    mainmenu: true,
    submenuItems: [
      { icon: <RiDashboardLine />, title: 'Default', path: '/' },
      { icon: <TbDeviceAnalytics />, title: 'Analytics', path: '/analytics' },
    ],
  },
  {
    title: 'Widget',
    mainmenu: true,
    submenuItems: [
      { icon: <MdOutlineWifiTethering />, title: 'Statistics', path: '/statistics' },
      { icon: <BsClipboardData />, title: 'Data', path: '/data' },
      { icon: <GiChart />, title: 'Chart', path: '/chart' },
    ],
  },
  {
    title: 'Application',
    mainmenu: true,
    submenuItems: [
      {
        icon: <FiUserCheck />,
        submenu: true,
        title: 'Users',
        submenuItems: [ 
          {
            title: 'AccountProfile',
            submenu: true,
            submenuItems: [
              { title: ' Profile01', path: '/users/account/profile1', leaf: true },
              { title: ' Profile02', path: '/users/account/profile2', leaf: true },
              { title: ' Profile03', path: '/users/account/profile3', leaf: true }
            ]
          },
        ]
      },
      {
        icon: <FiUserPlus/>,
        title: 'Customer',
        submenu: true,
        submenuItems: [
          { title: ' Customer List', path: '/users/customer/customerlist', leaf: true },
          { title: ' Order List', path: '/users/customer/orderlist', leaf: true },
          { title: ' Create Invoice', path: '/users/customer/invoice', leaf: true },
          { title: ' Product', path: '/users/customer/product', leaf: true },
        ]
      },
      {
        icon: <TbBasketBolt />,
        title: 'E-commerce',
        path:"/ecommerce",
        submenu: true,
        submenuItems: [
          { title: ' Products', path: '/users/customer/products', leaf: true },
          { title: ' Products Detail', path: '/users/customer/productdetail', leaf: true },
          { title: ' Product List', path: '/users/customer/productlist', leaf: true },
          { title: ' Checkout', path: '/users/customer/checkout', leaf: true },
        ]
    
      },
    ],
  },
  {
    title: 'Forms',
    mainmenu:true,
    submenuItems: [
      {
        icon: <TbScreenShare />,
        title: 'Components',
        path: "/components",
        submenu: true,
        submenuItems: [
          { title: 'Autocomplete', path: '/components/autocomplete', leaf: true },
          { title: 'Button', path: '/components/button', leaf: true },
          { title: 'Checkbox', path: '/components/checkbox', leaf: true },
          { title: 'Date & Time', path: '/components/datetime', leaf: true },
          { title: 'Radio', path: '/components/radio', leaf: true },
          { title: 'Slider', path: '/components/slider', leaf: true },
          { title: 'Switch', path: '/components/switch', leaf: true },
          { title: 'Text Field', path: '/components/text', leaf: true },

        ]
      }
    ]
  },
  {
    title: 'Others',
    mainmenu: true,
    submenuItems: [
          { icon: <TbClipboardTypography />, title: 'Typography', path: '/typography', leaf: true },
          { icon: <TbColorPicker />, title: 'Color', path: '/color', leaf: true },
          { icon: <TbShadow />, title: 'Shadow', path: '/shadow', leaf: true },
          { icon: <TbMap2 />, title: 'Map', path: '/map', leaf: true },
          { icon: <CiDatabase />, title: 'Data Grid', path: '/datagrid' , leaf: true},
          { icon: <IoTabletLandscape />, title: 'Table', path: '/table' , leaf: true},
    ],
  },
]
export default sideNavItems

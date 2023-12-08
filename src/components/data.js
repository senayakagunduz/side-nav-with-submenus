import { RiDashboardLine } from "react-icons/ri";
import { TbBasketBolt, TbClipboardTypography, TbColorPicker, TbDeviceAnalytics, TbMap2, TbScreenShare, TbShadow } from "react-icons/tb";
import { BsClipboardData } from "react-icons/bs";
import { FiUserCheck, FiUserPlus } from "react-icons/fi";
import { GiChart } from "react-icons/gi";
import { MdOutlineWifiTethering } from "react-icons/md";
import { CiDatabase } from "react-icons/ci";
import { IoTabletLandscape } from "react-icons/io5";


const sideNavItems = [
  
  {
    title: 'Dashboard',
    mainmenu: true,
    firstItem : true,
    submenuItems: [
      { icon: <RiDashboardLine />, title: 'Default', path: '/',submenu: false },
      { icon: <TbDeviceAnalytics />, title: 'Analytics', path: '/analytics',submenu: false },
    ],
  },
  {
    title: 'Widget',
    mainmenu: true,
    submenuItems: [
      { icon: <MdOutlineWifiTethering />, title: 'Statistics', path: '/statistics',submenu: false },
      { icon: <BsClipboardData />, title: 'Data', path: '/data',submenu: false },
      { icon: <GiChart />, title: 'Chart', path: '/chart',submenu: false },
    ],
  },
  {
    title: 'Application',
    mainmenu: true,
    submenuItems: [
      {
        icon: <FiUserCheck />,
        submenu: true,
        leaf:false,
        title: 'Users',
        submenuItems: [ 
          {
            title: 'AccountProfile',
            submenu: true,
            // leafparent:true,
            leaf:false,
            submenuItems: [
              { title: ' Profile01', path: '/users/account/profile1', leaf: true,submenu: false },
              { title: ' Profile02', path: '/users/account/profile2', leaf: true,submenu: false },
              { title: ' Profile03', path: '/users/account/profile3', leaf: true,submenu: false },
              { title: ' Profile04', path: '/users/account/profile1', leaf: true,submenu: false },
              { title: ' Profile05', path: '/users/account/profile2', leaf: true,submenu: false },
              { title: ' Profile06', path: '/users/account/profile3', leaf: true,submenu: false }
            ]
          },
          {
            title: 'Account',
            submenu: true,
            // leafparent:true,
            leaf:false,
            submenuItems: [
              { title: ' Profile01', path: '/users/account/profile1', leaf: true ,submenu: false},
              { title: ' Profile02', path: '/users/account/profile2', leaf: true, submenu: false},
              { title: ' Profile03', path: '/users/account/profile3', leaf: true,submenu: false },
              { title: ' Profile04', path: '/users/account/profile1', leaf: true,submenu: false },
              { title: ' Profile05', path: '/users/account/profile2', leaf: true,submenu: false },
              { 
                title: ' Profile06', 
                submenu: true,
                // path: '/users/account/profile3', 
                // leafparent:true,
                leaf: false,
                submenuItems: [
                  { title: ' Profile01', path: '/users/account/profile1', leaf: true ,submenu: false},
                  { title: ' Profile02', path: '/users/account/profile2', leaf: true,submenu: false },
                ]
               }
            ]
          },
        ]
      },
      {
        icon: <FiUserPlus/>,
        title: 'Customer',
        submenu: true,
        leaf:false,
        submenuItems: [
          { title: ' Customer List', path: '/customer/customerlist', leaf: true ,submenu: false},
          { title: ' Order List', path: '/customer/orderlist', leaf: true,submenu: false },
          { title: ' Create Invoice', path: '/customer/invoice', leaf: true,submenu: false },
          { title: ' Product', path: '/customer/product', leaf: true ,submenu: false},
        ]
      },
      {
        icon: <TbBasketBolt />,
        title: 'E-commerce',
        submenu: true,
        leaf:false,
        submenuItems: [
          { title: ' Products', path: '/ecommerce/products', leaf: true,submenu: false },
          { title: ' Products Detail', path: '/ecommerce/productdetail', leaf: true ,submenu: false},
          { title: ' Product List', path: '/ecommerce/productlist', leaf: true ,submenu: false},
          { title: ' Checkout', path: '/ecommerce/checkout', leaf: true,submenu: false },
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
        submenu: true,
        leaf:false,
        submenuItems: [
          { title: 'Autocomplete', path: '/components/autocomplete', leaf: true,submenu: false },
          { title: 'Button', path: '/components/button', leaf: true,submenu: false },
          { title: 'Checkbox', path: '/components/checkbox', leaf: true,submenu: false },
          { title: 'Date & Time', path: '/components/datetime', leaf: true ,submenu: false},
          { title: 'Radio', path: '/components/radio', leaf: true,submenu: false },
          { title: 'Slider', path: '/components/slider', leaf: true,submenu: false },
          { title: 'Switch', path: '/components/switch', leaf: true,submenu: false },
          { title: 'Text Field', path: '/components/text', leaf: true,submenu: false },

        ]
      }
    ]
  },
  {
    title: 'Others',
    mainmenu: true,
    leaf:false,
    submenuItems: [
          { icon: <TbClipboardTypography />, title: 'Typography', path: '/typography',submenu: false},
          { icon: <TbColorPicker />, title: 'Color', path: '/color' ,submenu: false},
          { icon: <TbShadow />, title: 'Shadow', path: '/shadow' ,submenu: false},
          { icon: <TbMap2 />, title: 'Map', path: '/map',submenu: false },
          { icon: <CiDatabase />, title: 'Data Grid', path: '/datagrid',submenu: false},
          { icon: <IoTabletLandscape />, title: 'Table', path: '/table',submenu: false },
    ],
  },
]
export default sideNavItems

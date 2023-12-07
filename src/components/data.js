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
        leaf:false,
        title: 'Users',
        submenuItems: [ 
          {
            title: 'AccountProfile',
            // submenu: true,
            leafparent:true,
            leaf:false,
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
        leaf:false,
        submenuItems: [
          { title: ' Customer List', path: '/customer/customerlist', leaf: true },
          { title: ' Order List', path: '/customer/orderlist', leaf: true },
          { title: ' Create Invoice', path: '/customer/invoice', leaf: true },
          { title: ' Product', path: '/customer/product', leaf: true },
        ]
      },
      {
        icon: <TbBasketBolt />,
        title: 'E-commerce',
        submenu: true,
        leaf:false,
        submenuItems: [
          { title: ' Products', path: '/ecommerce/products', leaf: true },
          { title: ' Products Detail', path: '/ecommerce/productdetail', leaf: true },
          { title: ' Product List', path: '/ecommerce/productlist', leaf: true },
          { title: ' Checkout', path: '/ecommerce/checkout', leaf: true },
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
    leaf:false,
    submenuItems: [
          { icon: <TbClipboardTypography />, title: 'Typography', path: '/typography'},
          { icon: <TbColorPicker />, title: 'Color', path: '/color' },
          { icon: <TbShadow />, title: 'Shadow', path: '/shadow' },
          { icon: <TbMap2 />, title: 'Map', path: '/map' },
          { icon: <CiDatabase />, title: 'Data Grid', path: '/datagrid'},
          { icon: <IoTabletLandscape />, title: 'Table', path: '/table' },
    ],
  },
]
export default sideNavItems

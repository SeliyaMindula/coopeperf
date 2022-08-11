import React from 'react';

//import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import BusinessOutlinedIcon from "@material-ui/icons/BusinessOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";


export const SidebarData = [
  {
    title: 'Dashboard',
    icon: <DashboardOutlinedIcon/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Perpective',
        path: '/Perspectives',
       
      },
      {
        title: 'Goal',
        path: '/Goals',
        
      },
      {
        title: 'Strategy',
        path: '/Strategyies',
      
      },
      {
        title: 'KPI',
        path: '/KPI',
      
      },
    ]
  },

  {
    title: 'My Profile',
    path: '/EditEmployee',
    icon: <PersonOutlineOutlinedIcon/>
  },

  {
    title: 'Organization Details',
    path: '/Hierarchy',
    icon: <BusinessOutlinedIcon/>,
 

  },
  {
    title: 'Organization Chart',
    path: '/HierStru',
    icon: <PeopleAltOutlinedIcon />
  },
  {
    title: 'Hierarchy Table',
    path: '/HierarchyTable',
    icon: <PeopleAltOutlinedIcon />
  },
  {
    title: 'Company Configuration',
    path: '/CompanyConfig',
    icon: <TrendingUpOutlinedIcon/>
  },
  {
    title: 'Notification Setting',
    path: '/CreateNotification',
    icon: <AddAlertOutlinedIcon />,


  },
  {
    title: 'Configuration Settings',
    path: '/Configurations',
    icon: <TuneOutlinedIcon/>
  }
];

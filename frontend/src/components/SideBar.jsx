import * as React from 'react'
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';

import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import FolderCopySharpIcon from '@mui/icons-material/FolderCopySharp';
import ListAltSharpIcon from '@mui/icons-material/ListAltSharp';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { useDemoRouter } from '@toolpad/core/internal';
import AssessmentIcon from '@mui/icons-material/Assessment';


const NAVIGATION = [
  
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "projects",
    title: "Projects",
    icon: < FolderCopySharpIcon/>,
  },

  {
    segment: "tasks",
    title: "Tasks",
    icon: <ListAltSharpIcon />,
  },
  {
    segment: "contracts",
    title: "Contracts",
    icon: <NoteAltIcon />,
  },
  {
    segment: "invoice",
    title: "Invoice",
    icon: <DescriptionOutlinedIcon  />,
  },
  {
    segment: "team",
    title: "Team",
    icon: <GroupsIcon />,
  },
  {
    segment:"tickets",
    title : "Tickets",
    icon :<AssessmentIcon/>,
  },
  {
    segment: 'profile',
    title: 'Profile',
    icon: <AccountCircleOutlinedIcon />,
  },
];

 const demoTheme = extendTheme({
  cssVariables:{
    colorSchemeSelector : 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: false },//we have changed the color mode 
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({pathname}){
  return(
    <Box
    sx={{
      py: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Typography>Dashboard content for {pathname}</Typography>
          </Box>
        );
      }

DemoPageContent.propTypes ={
  pathname:PropTypes.string.isRequired,
}; 

function SideBar({children}) {
  //const { window } = props;

  const router = useDemoRouter('/dashboard');
 


  

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      branding={{
        logo :'',
        title:'Project Management',
        homeUrl:'./toolpad/core/introduction',
      }}
    
    >
    <DashboardLayout>
        {children}
      </DashboardLayout>
    </AppProvider>
 );
}

 export default SideBar;
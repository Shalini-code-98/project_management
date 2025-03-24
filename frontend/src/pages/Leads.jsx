import React from 'react'
import { Box,Paper, Breadcrumbs, Button, IconButton, Link, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SideBar from '../components/SideBar';

const Leads = () => {
  return (
    <div>
        <SideBar>
    
      
      <div className="m-6">
                    <Breadcrumbs aria-label="breadcrumb">
                      <Link underline="hover" color="inherit" href="/">
                        Dashboard
                      </Link>
          
                      <Typography sx={{ color: "text.primary" }}>Leads</Typography>
                    </Breadcrumbs>
                  </div>
      </SideBar>
    </div>
  )
}

export default Leads
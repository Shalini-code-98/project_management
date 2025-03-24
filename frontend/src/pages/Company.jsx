import React from 'react'
import SideBar from '../components/SideBar';
import { Box,Paper, Breadcrumbs, Button, IconButton, Link, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const Company = () => {
  return (
    <div>
    <SideBar>

  
  <div className="m-6">
                <Breadcrumbs aria-label="breadcrumb">
                  <Link underline="hover" color="inherit" href="/">
                    Dashboard
                  </Link>
      
                  <Typography sx={{ color: "text.primary" }}>Company</Typography>
                </Breadcrumbs>
              </div>
  </SideBar>
</div>
  )
}

export default Company
import React from 'react'
import SideBar from '../components/SideBar';

import { Box,Paper, Breadcrumbs, Button, IconButton, Link, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const Team = () => {
  return (
    <div>
      <SideBar>

    <div className="m-6">
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                      Dashboard
                    </Link>
        
                    <Typography sx={{ color: "text.primary" }}>Team</Typography>
                  </Breadcrumbs>
                
                </div>
            </SideBar>
        </div>
              

        
  )
}

export default Team
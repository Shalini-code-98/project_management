import React from 'react'
import { Box,Paper, Breadcrumbs, Button, IconButton, Link, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const Tasks = () => {
  return (
    //<div>Tasks</div>
    <div className="m-6">
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                      Dashboard
                    </Link>
        
                    <Typography sx={{ color: "text.primary" }}>Tasks</Typography>
                  </Breadcrumbs>
                </div>
        
  )
}

export default Tasks
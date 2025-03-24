import React from 'react'
import Sidebar from '../components/SideBar'
import {Breadcrumbs ,Link, Typography} from '@mui/material'

const Clients = () => {
  return (
     
        <div>
          <Sidebar>
      
        
        <div className="m-6">
                      <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                          Dashboard
                        </Link>
            
                        <Typography sx={{ color: "text.primary" }}>Clients</Typography>
                      </Breadcrumbs>
                    </div>
        </Sidebar>
      </div>
  )
}

export default Clients
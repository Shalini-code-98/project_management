import React from 'react'
import Sidebar from '../components/SideBar'

const Contracts = ()=> {
    return(
    <div>
      <Sidebar>
        <div className="m-6">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Dashboard
            </Link>
            <Typography sx={{ color: "text.primary" }}>Contracts</Typography>
          </Breadcrumbs>
        </div>
    </Sidebar>
</div>
    )
}
export default Contracts
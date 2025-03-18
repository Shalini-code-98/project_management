import React from 'react'
import { useState } from 'react';
import SideBar from '../components/SideBar'
import { Box,Paper, Breadcrumbs, Button, IconButton, Link, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";


const style = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

 const Projects =()=> {
const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

    return(
        <div>
            <SideBar>
                <div className="m-6">
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                      Dashboard
                    </Link>
        
                    <Typography sx={{ color: "text.primary" }}>Projects</Typography>
                  </Breadcrumbs>
                </div>
        
                <div className="flex flex-row place-content-between px-6 gap-x-2 flex-wrap">
                  <div>
                    <h4 className="text-2xl font-bold">Projects</h4>
                  </div>
                  <div>
                    <Button onClick = {handleOpen} variant="contained" startIcon={<AddIcon />} color="info">
                      Add Project
                    </Button>
                  </div>
                </div>
        
                <div className="mt-8">
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <TableCell>ID</TableCell>
                          <TableCell>Project Name</TableCell>
                          <TableCell>Description</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell>Start Date</TableCell>
                          <TableCell>End Date</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>1</TableCell>
                          <TableCell>Project</TableCell>
                          <TableCell>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            In, commodi.
                          </TableCell>
                          <TableCell>Pending</TableCell>
                          <TableCell>10-5-2025</TableCell>
                          <TableCell>10-8-2025</TableCell>
                          <TableCell>
                            <IconButton aria-label="edit">
                              <EditIcon />
                            </IconButton>
        
                            <IconButton aria-label="delete">
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
        
                {/* MODAL */}
        
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="child-modal-title"
                  aria-describedby="child-modal-description"
                >
                  <Box sx={{ ...style, width: 200 }}>
                    <h2 id="child-modal-title">Text in a child modal</h2>
                    <p id="child-modal-description">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Button onClick={handleClose}>Close Child Modal</Button>
                  </Box>
                </Modal>
              </SideBar>
              </div>
    )
 }
 export default Projects
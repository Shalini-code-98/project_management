import React, { useState } from "react";
import SideBar from "../components/SideBar";
import {
  Box,
  Breadcrumbs,
  Button,
  IconButton,
  Link,
  MenuItem,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const status = [
  { value: "todo", label: "To Do" },
  { value: "in progress", label: "In Progress" },
  { value: "completed", label: "Completed" },
];

const Project = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
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

        <div className="flex flex-row flex-wrap place-content-between px-6 gap-x-2 gap-y-4">
          <h4 className="text-2xl font-bold">Projects</h4>
          <Button onClick={handleOpen} variant="contained" startIcon={<AddIcon />} className="bg-[var(--primary1)_!important]">
            Add Project
          </Button>
        </div>

        <div className="m-6 mt-8">
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
                  <TableCell>Lorem ipsum dolor sit amet.</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>2025-05-10</TableCell>
                  <TableCell>2025-08-10</TableCell>
                  <TableCell>
                    <IconButton onClick={handleOpen} aria-label="edit" color="warning">
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        {/* Add/Edit Project Modal */}
        <Modal open={open} onClose={handleClose}>
          <Box sx={style} className="rounded-2xl">
            <h5 className="text-2xl font-bold">Add/Update Project</h5>
            <form className="mt-8 flex flex-col gap-y-4">
              <div className="flex flex-row flex-wrap sm:flex-nowrap gap-4 w-full">
                <TextField id="projectName" type="text" fullWidth label="Project Name" variant="outlined" />
                <TextField id="projectStatus" select fullWidth label="Status" variant="outlined">
                  {status.map((data) => (
                    <MenuItem key={data.value} value={data.value}>{data.label}</MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="flex flex-row flex-wrap sm:flex-nowrap gap-4 w-full">
                <TextField id="startDate" type="date" fullWidth label="Start Date" InputLabelProps={{ shrink: true }} variant="outlined" />
                <TextField id="endDate" type="date" fullWidth label="End Date" InputLabelProps={{ shrink: true }} variant="outlined" />
              </div>
              <TextField multiline label="Description" rows={4} fullWidth id="projectDescription" />
              <div className="flex flex-row flex-wrap gap-4 justify-end">
                <Button onClick={handleClose} variant="contained" color="inherit">Cancel</Button>
                <Button color="primary" variant="contained">Submit</Button>
              </div>
            </form>
          </Box>
        </Modal>
      </SideBar>
    </div>
  );
};

export default Project;

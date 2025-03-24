import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import {
  Breadcrumbs,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Modal,
  Box,
  Grid2,
  IconButton,
} from "@mui/material";
import { Link } from "react-router";
import AddIcon from "@mui/icons-material/Add";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Tickets = () => {
  const data = Array.from({ length: 50 }, (_, i) => ({
    ticketTitle: `Ticket ${i + 1}`,
    projectName: `Project ${i + 1}`,
    assignTo: `Member ${i + 1}`,
    client: `Client ${i + 1}`,
    priority: `High`,
    status: `In progress`,
  }));

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);


  const handleChangePage = (_, newPage) => { setPage(newPage); };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [createTicketsOpen, setCreateTicketsOpen] = useState(false);

  const handleCreateTicketsOpen = () => {
    setCreateTicketsOpen(true);
  };
  const handleCreateTicketsClose = () => {
    setCreateTicketsOpen(false);
  };
  //Delete ticket modal
  const [deleteTicketsOpen, setDeleteTicketsOpen] = useState(false);
  const handleDeleteTicketsOpen = () => {
    setDeleteTicketsOpen(true);
  };
  const handleDeleteTicketsClose = () => {
    setDeleteTicketsOpen(false);
  };

  // Edit ticket Modal
  const [editTicketsOpen, setEditTicketsOpen] = useState(false);

  const handleEditTicketsOpen = () => {
    setEditTicketsOpen(true);
  };
  const handleEditTicketsClose = () => {
    setEditTicketsOpen(false);
  };

  //view modal
  const [viewTicketsOpen, setViewTicketsOpen] = useState(false);
  const handleViewTicketsOpen = () => {
    setViewTicketsOpen(true);
  };
  const handleViewTicketsClose = () => {
    setViewTicketsOpen(false);
  };

  //tab panel in view modal
  const [activeTab, setActiveTab] = useState("Ticket Details");

  return (
    <Sidebar>
      <div className="px-6 w-full">
        {/* Breadcrumbs */}
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to={"/"}>
            Dashboard
          </Link>
          <Typography sx={{ color: "text.primary" }}>Tickets</Typography>
        </Breadcrumbs>

        {/* Header */}
        <div className="flex flex-row flex-wrap justify-between mt-6 gap-x-2 gap-y-4">
          <h4 className="text-2xl font-bold">Tickets</h4>
          <button
            className="bg-[var(--primary1)_!important] text-white px-4 py-2 rounded flex items-center gap-2"
            onClick={() => setCreateTicketsOpen(true)}
          >
            <AddIcon /> Create Tickets
          </button>
        </div>

        {/* Data Table */}
        <div className="overflow-x-scroll no-scrollbar w-full">
          <TableContainer
            component={Paper}
            className="mx-auto shadow-md"
            sx={{ minWidth: 1000, mt: 4 }}
          >
            <Table>
              <TableHead>
                <TableRow className="bg-gray-200">
                  <TableCell>Ticket Title</TableCell>
                  <TableCell>Project Name</TableCell>
                  <TableCell>Assigned To</TableCell>
                  <TableCell>Client</TableCell>
                  <TableCell>Priority</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.ticketTitle}</TableCell>
                      <TableCell>{row.projectName}</TableCell>
                      <TableCell>{row.assignTo}</TableCell>
                      <TableCell>{row.client}</TableCell>
                      <TableCell>{row.priority}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>
                        <IconButton
                          onClick={handleViewTicketsOpen}
                          aria-label="edit" color="success">
                          <RemoveRedEyeIcon />
                        </IconButton>
                        <IconButton
                          onClick={handleEditTicketsOpen}
                          aria-label="edit"
                          color="warning"
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          onClick={handleDeleteTicketsOpen}
                          aria-label="delete" color="error">
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            {/* Pagination */}
            <TablePagination
              rowsPerPageOptions={[5, 10, 20]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </div>

        {/* Create Tickets Modal */}
        <Modal
          open={createTicketsOpen}
          onClose={handleCreateTicketsClose}
          className="flex justify-center items-center h-screen overflow-y-scroll"
        >
          <Box
            className="bg-white rounded-md p-6 overflow-scroll h-[85vh] md:h-[35rem] no-scrollbar"
            sx={{ width: "90%", maxWidth: 700 }}
          >
            <div className="p-6 h-fit">
              <h2 className="text-2xl font-bold">Create Tickets</h2>
              <form action="">
                <div className="mt-4 space-y-2">

                  <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="ticketTitle">
                        Ticket Title <span className="text-red-600">*</span>
                      </label>
                      <input
                        required
                        placeholder="Ticket Title"
                        type="text"
                        name="ticketTitle"
                        id="ticketTitle"
                        className="w-full border px-2 py-1 rounded"
                      />
                      <small></small>
                    </Grid2>

                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="ticketProjectName">
                        Project Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        required
                        placeholder="Project Name"
                        type="text"
                        name="ticketProjectName"
                        id="ticketProjectName"
                        className="w-full border px-2 py-1 rounded"
                      />
                      <small></small>
                    </Grid2>
                  </Grid2>




                  <Grid2 container spacing={2}>
                    {/* Assign To */}
                    <Grid2 xs={12} sm={6} className="inputData">
                      <label htmlFor="ticketAssignTo">
                        Assign To <span className="text-red-600">*</span>
                      </label>
                      <select
                        name="ticketAssignTo"
                        id="ticketAssignTo"
                        className="w-full border px-2 py-1 rounded"
                      >
                        <option value="">Select Member</option>
                        <option value="Member 1">Member 1</option>
                        <option value="Member 2">Member 2</option>
                        <option value="Member 3">Member 3</option>
                        <option value="Member 4">Member 4</option>
                      </select>
                      <small></small>
                    </Grid2>

                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="ticketClient">
                        Client <span className="text-red-600">*</span>
                      </label>
                      <input
                        required
                        placeholder="Client Name"
                        type="text"
                        name="ticketclient"
                        id="ticketclient"
                        className="w-full border px-2 py-1 rounded"
                      />
                      <small></small>
                    </Grid2>
                  </Grid2>

                  <Grid2 container spacing={2}>
                    <Grid2 xs={12} sm={6} className="inputData">
                      <label htmlFor="ticketPriority">
                        Priority <span className="text-red-600">*</span>
                      </label>
                      <select
                        name="ticketPriority"
                        id="ticketPriority"
                        className="w-full border px-2 py-1 rounded"
                      >
                        <option value="">Select Priority</option>
                        <option value="Highest">Highest</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                        <option value="Lowest">Lowest</option>
                      </select>
                      <small></small>
                    </Grid2>
                    <Grid2 xs={12} sm={6} className="inputData">
                      <label htmlFor="ticketStatus">
                        Status <span className="text-red-600">*</span>
                      </label>
                      <select
                        name="ticketStatus"
                        id="ticketStatus"
                        className="w-full border px-2 py-1 rounded"
                      >
                        <option value="">Select Status</option>
                        <option value="Highest">Open</option>
                        <option value="High">Resolve</option>
                        <option value="Medium">Pending</option>
                        <option value="Low">Closed</option>
                      </select>
                      <small></small>
                    </Grid2>
                  </Grid2>


                  <div className="inputData">
                    <label htmlFor="ticketDescription">
                      Description <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      placeholder="Ticket Description"
                      rows={4}
                      name="ticketDescription"
                      id="ticketDescription"
                      className="w-full border px-2 py-1 rounded"
                    ></textarea>
                    <small></small>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 justify-end">
                    <button
                      type="button"
                      onClick={() => setCreateTicketsOpen(false)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Box>
        </Modal>

        {/* Edit Tickets Modal */}
        <Modal
          open={editTicketsOpen}
          onClose={handleEditTicketsClose}
          className="flex justify-center items-center h-screen overflow-y-scroll"
        >
          <Box
            className="bg-white rounded-md p-6 overflow-scroll h-[85vh] md:h-[35rem] no-scrollbar"
            sx={{ width: "90%", maxWidth: 700 }}
          >
            <div className="p-6 h-fit">
              <h2 className="text-2xl font-bold">Edit Tickets</h2>
              <form action="">
                <div className="mt-4 space-y-2">
                  <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="editTicketTitle">
                        Ticket Title <span className="text-red-600">*</span>
                      </label>
                      <input
                        required
                        placeholder="Ticket Title"
                        type="text"
                        name="editTicketTitle"
                        id="editTicketTitle"
                        className="w-full border px-2 py-1 rounded"
                      />
                      <small></small>
                    </Grid2>

                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="ticketProjectName">
                        Project Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        required
                        placeholder="Project Name"
                        type="text"
                        name="ticketProjectName"
                        id="ticketProjectName"
                        className="w-full border px-2 py-1 rounded"
                      />
                      <small></small>
                    </Grid2>
                  </Grid2>

                  <Grid2 container spacing={2}>
                    {/* Assign To */}
                    <Grid2 xs={12} sm={6} className="inputData">
                      <label htmlFor="ticketAssignTo">
                        Assign To <span className="text-red-600">*</span>
                      </label>
                      <select
                        name="ticketAssignTo"
                        id="ticketAssignTo"
                        className="w-full border px-2 py-1 rounded"
                      >
                        <option value="">Select Member</option>
                        <option value="Member 1">Member 1</option>
                        <option value="Member 2">Member 2</option>
                        <option value="Member 3">Member 3</option>
                        <option value="Member 4">Member 4</option>
                      </select>
                      <small></small>
                    </Grid2>

                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="ticketClient">
                        Client <span className="text-red-600">*</span>
                      </label>
                      <input
                        required
                        placeholder="Client Name"
                        type="text"
                        name="ticketClient"
                        id="ticketClient"
                        className="w-full border px-2 py-1 rounded"
                      />
                      <small></small>
                    </Grid2>
                  </Grid2>

                  <Grid2 container spacing={2}>
                    <Grid2 xs={12} sm={6} className="inputData">
                      <label htmlFor="ticketPriority">
                        Priority <span className="text-red-600">*</span>
                      </label>
                      <select
                        name="ticketPriority"
                        id="ticketPriority"
                        className="w-full border px-2 py-1 rounded"
                      >
                        <option value="">Select Priority</option>
                        <option value="Highest">Highest</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                        <option value="Lowest">Lowest</option>
                      </select>
                      <small></small>
                    </Grid2>
                    <Grid2 xs={12} sm={6} className="inputData">
                      <label htmlFor="ticketStatus">
                        Status <span className="text-red-600">*</span>
                      </label>
                      <select
                        name="ticketStatus"
                        id="ticketStatus"
                        className="w-full border px-2 py-1 rounded"
                      >
                        <option value="">Select Status</option>
                        <option value="Highest">Open</option>
                        <option value="High">Resolve</option>
                        <option value="Medium">Pending</option>
                        <option value="Low">Closed</option>
                      </select>
                      <small></small>
                    </Grid2>
                  </Grid2>



                  <div className="inputData">
                    <label htmlFor="ticketDescription">
                      Description <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      placeholder="Ticket Description"
                      rows={4}
                      name="ticketDescription"
                      id="ticketDescription"
                      className="w-full border px-2 py-1 rounded"
                    ></textarea>
                    <small></small>
                  </div>




                  {/* Buttons */}
                  <div className="flex gap-3 justify-end">
                    <button
                      type="button"
                      onClick={() => setEditTicketsOpen(false)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>

          </Box>
        </Modal>

        {/* Delete Modal*/}

        <Modal
          open={deleteTicketsOpen}
          onClose={handleDeleteTicketsClose}
          className=""
        >
          <Box sx={{ ...style, width: 400 }} className="rounded-[.5rem]">
            <div className="w-full py-3">

              <div>Are you sure you want to delete ?</div>
              <div className="flex mt-8 justify-end gap-4">

              </div>
              <div className="flex gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => setDeleteTicketsOpen(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Delete
                </button>
              </div>
            </div>

          </Box>
        </Modal>

        {/*view modal*/}
        <Modal
          open={viewTicketsOpen}
          onClose={handleViewTicketsClose}
          className=""
        >
          <Box sx={{ ...style }} className="rounded-[.5rem] ">
            <div className="w-full  ">
              <div>
                <div className="  mx-auto ">
                  {/* Tab Navigation */}
                  <div className="flex flex-row justify-between items-start ">
                    <div className="flex max-w-md w-full gap-2">
                      {["Project Details", "Client Details", "Tickets"].map(
                        (tab) => (
                          <button
                            key={tab}
                            className={`flex-1 mb-4 cursor-pointer bg-gray-300 py-2 text-center  capitalize border-b-2  
            ${activeTab === tab ? " border-[var(--primary1)] text-[var(--primary1)] font-bold" : "text-gray-800 border-transparent font-semibold"}`}
                            onClick={() => setActiveTab(tab)}
                          >
                            {tab}
                          </button>
                        )
                      )}
                    </div>
                    <div className="w-[2rem] text-black">
                      <IconButton onClick={handleViewTicketsClose}>
                        <CancelIcon className="text-gray-800" />
                      </IconButton>
                    </div>

                  </div>

                  {/* Tab Content */}
                  <div className="h-[20rem] overflow-scroll no-scrollbar">
                    <div className="p- h-fit">
                      {activeTab === "Project Details" && (
                        <div className="space-y-2">
                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Project Title : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>Project Name</div>
                            </Grid2>
                          </Grid2>
                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Project Status : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>Pending</div>
                            </Grid2>
                          </Grid2>


                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Assigned To : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>Lorem ipsum</div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Project Client : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>Lorem ipsum</div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Description : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Blanditiis id totam
                                perspiciatis necessitatibus voluptate pariatur
                                dicta voluptatem modi eos assumenda ut itaque
                                eligendi laboriosam alias minima impedit
                                debitis, tempore quo explicabo. Perferendis,
                                vero sed laborum unde porro eum animi quos qui
                                amet maiores perspiciatis autem ad consequuntur
                                nam molestiae doloribus dignissimos ab, sapiente
                                iusto corporis? Delectus tenetur cupiditate
                                repellendus debitis deleniti assumenda autem
                                sapiente sequi, soluta a nulla vero, vel, ab
                                libero? Unde quidem necessitatibus quos ducimus
                                atque voluptas est inventore accusamus
                                voluptatem dolorum assumenda magni repellat,
                                aliquid sequi, doloribus cum, quaerat obcaecati
                                incidunt neque molestiae excepturi distinctio
                                nulla ea!
                              </div>
                            </Grid2>
                          </Grid2>
                        </div>
                      )}
                      {activeTab === "Client Details" && (
                        <div className="space-y-2">
                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Client Name : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>name</div>
                            </Grid2>
                          </Grid2>
                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Client Email : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>example@email.com</div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Client Number : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>1093735</div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Client Address : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>Lorem ipsum </div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Country :  </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>India</div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Company Name : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>Lorem ipsum</div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Company Email : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>company@gmail.com</div>
                            </Grid2>
                          </Grid2>
                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Comapny Contact : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>
                                837355738
                              </div>
                            </Grid2>
                          </Grid2>
                        </div>
                      )}
                      {activeTab === "Tickets" && (
                        <div className="">
                          <Grid2 container >
                            <Grid2 size={6} className="">

                            </Grid2>

                            <Grid2 size={6}>

                            </Grid2>
                          </Grid2>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <button
                  type="button"
                  onClick={handleViewTicketsClose}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Close
                </button>


              </div>
            </div>
          </Box>
        </Modal>


      </div>
    </Sidebar>
  );
};

export default Tickets;

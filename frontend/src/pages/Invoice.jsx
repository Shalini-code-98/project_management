import React, { useState } from "react";
import SideBar from "../components/SideBar";
import { Breadcrumbs, Button, IconButton, Menu, MenuItem, Typography, Modal, Box, TextField } from "@mui/material";
import { Link } from "react-router";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  color: "black",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  textAlign: "center",
};

const Invoices = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editedInvoice, setEditedInvoice] = useState({});
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [newInvoice, setNewInvoice] = useState({ name: "", amount: "", status: "", dueDate: "" });


  const invoices = [
    { id: "INV-001", name: "Cloud Migration", amount: "$13000", status: "Overdue", dueDate: "2025-04-21", statusColor: "bg-red-500", paymentmethod:"online",paymentid:"1",bankaccount:"11",note:""},
    { id: "INV-002", name: "Website Redesign", amount: "$15200", status: "Paid", dueDate: "2025-06-24", statusColor: "bg-green-500", paymentmethod:"Cheque",paymentid:"2" ,bankaccount:"12",note:""},
    { id: "INV-003", name: "SEO Optimization", amount: "$6000", status: "Pending", dueDate: "2025-06-01", statusColor: "bg-orange-500" , paymentmethod:"Credit Card",paymentid:"3",bankaccount:"13",note:""},
    { id: "INV-004", name: "CRM System Implementation", amount: "$10200", status: "Paid", dueDate: "2025-07-20", statusColor: "bg-green-500", paymentmethod:"online" ,paymentid:"4",bankaccount:"14",note:""},
    { id: "INV-005", name: "Cloud Migration", amount: "$9200", status: "Pending", dueDate: "2025-08-21", statusColor: "bg-orange-500", paymentmethod:"online",paymentid:"5",bankaccount:"15",note:"" },
    { id: "INV-006", name: "Social Media Campaign", amount: "$1200", status: "Paid", dueDate: "2025-09-11", statusColor: "bg-green-500" , paymentmethod:"Credit Card",paymentid:"6",bankaccount:"16",note:""},
    { id: "INV-007", name: "API Integration", amount: "$13200", status: "Overdue", dueDate: "2025-05-17", statusColor: "bg-red-500" , paymentmethod:"Cheque",paymentid:"7",bankaccount:"17",note:""},
    { id: "INV-008", name: "Custom Dashboard Development", amount: "$7200", status: "Pending", dueDate: "2025-06-29", statusColor: "bg-orange-500" , paymentmethod:"online",paymentid:"8",bankaccount:"18",note:""},
    { id: "INV-009", name: "Mobile App Development", amount: "$8100", status: "Paid", dueDate: "2025-05-18", statusColor: "bg-green-500" , paymentmethod:"online",paymentid:"9",bankaccount:"19",note:""},
    { id: "INV-010", name: "API Integration", amount: "$11100", status: "Paid", dueDate: "2025-10-21", statusColor: "bg-green-500" , paymentmethod:"online",paymentid:"10",bankaccount:"20",note:""},
    { id: "INV-011", name: "SEO Optimization", amount: "$8600", status: "Overdue", dueDate: "2025-09-07", statusColor: "bg-red-500" , paymentmethod:"Cheque",paymentid:"11",bankaccount:"21",note:""},
    { id: "INV-012", name: "Website Redesign", amount: "$4200", status: "Pending", dueDate: "2025-07-22", statusColor: "bg-orange-500" , paymentmethod:"Credit Card",paymentid:"22"},
  ]

  const handleClick = (event, invoice) => {
    setAnchorEl(event.currentTarget);
    setSelectedInvoice(invoice);
  };

  const handleClose = () => setAnchorEl(null);
  const handleOpenViewModal = () => {
    setViewModalOpen(true);
    handleClose();
  };
  const handleCloseViewModal = () => setViewModalOpen(false);
  const handleOpenEditModal = () => {
    setEditedInvoice(selectedInvoice);
    setEditModalOpen(true);
    handleClose();
  };
  const handleCloseEditModal = () => setEditModalOpen(false);
  const handleEditChange = (e) => {
    setEditedInvoice({ ...editedInvoice, [e.target.name]: e.target.value });
  };
  const handleSaveEdit = () => {
    console.log("Updated Invoice:", editedInvoice);
    setEditModalOpen(false);
  };

  const handleOpenDeleteModal = () => {
    setDeleteModalOpen(true);
    handleClose();
  };
  const handleCloseDeleteModal = () => setDeleteModalOpen(false);
  const handleDelete = () => {
    console.log(`Deleted Invoice: ${selectedInvoice?.name}`);
    setDeleteModalOpen(false);
  };
  const handleOpenCreateModal = () => {
    setCreateModalOpen(true);
};

const handleCloseCreateModal = () => {
    setCreateModalOpen(false);
    setNewInvoice({ name: "", amount: "", status: "", dueDate: "" }); // Reset form
};

const handleCreateChange = (e) => {
    setNewInvoice({ ...newInvoice, [e.target.name]: e.target.value });
};

const handleSaveCreate = () => {
    console.log("New Invoice Created:", newInvoice);
    // Here, you can add logic to update the invoice list with the new invoice
    handleCloseCreateModal();
};

  

  return (
    <div>
      <SideBar>
        <div className="m-6">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/"> Dashboard </Link>
            <Typography sx={{ color: "#1A2975" }}>Invoices</Typography>
          </Breadcrumbs>
        </div>
      


        <div className="flex flex-row flex-wrap place-content-between px-6 gap-x-2 gap-y-4">
          <h5 className="text-2xl font-bold">Invoices</h5>
          <Button variant="contained" sx={{ bgcolor: "#1a2975", color: "white" }} startIcon={<AddIcon />} color="info"onClick={handleOpenCreateModal}>
          Create Invoices
          </Button>
        </div>

        {/* Invoice List */}
        <div className="px-6 mt-8 flex flex-col gap-4">
          {invoices.map((invoice) => (
            <div key={invoice.id} className="flex justify-between gap-2 bg-gray-100 border border-gray-300 rounded-[10px] py-4 px-4">
              <div>
                <h5 className="text-[1.2rem] font-bold">{invoice.name} ({invoice.id})</h5>
                <div className="mt-2 text-gray-500">Amount: {invoice.amount}</div>
                <div className={`${invoice.statusColor} rounded-2xl w-[9rem] text-center text-white mt-2 leading-[1.7rem]`}>
                  {invoice.status}
                </div>
              </div>
              <div>
                <div className="leading-[.5rem] text-right cursor-pointer">
                  <IconButton onClick={(event) => handleClick(event, invoice)}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} sx={{
                    "& .MuiPaper-root": {
                      backgroundColor: "#1a2975", // Change background color to blue
                       color: "white", // Ensure text is white for contrast
                      }
                      }}
                      >
                        <MenuItem  sx={{ display: "flex", justifyContent: "center" }}>
                      <Button startIcon={<RemoveRedEyeIcon />} color="inherit" onClick={handleOpenViewModal}>View</Button>
                    </MenuItem>
                    <MenuItem sx={{ display: "flex", justifyContent: "center" }}>
                      <Button startIcon={<EditIcon />} color="inherit" onClick={handleOpenEditModal}>Edit</Button>
                    </MenuItem>
                    <MenuItem sx={{ display: "flex", justifyContent: "center" }}>
                      <Button startIcon={<DeleteIcon />} color="inherit" onClick={handleOpenDeleteModal}>Delete</Button>
                    </MenuItem>
                  </Menu>
                </div>
                <div className="mt-6">Due Date: {invoice.dueDate}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Delete Confirmation Modal */}
        <Modal open={deleteModalOpen} onClose={handleCloseDeleteModal}>
          <Box sx={style}>
            <WarningAmberIcon color="error" sx={{ fontSize: 50, marginBottom: 1 }} />
            <Typography variant="h6" fontWeight="bold" color="error">Delete Invoice?</Typography>
            <Typography sx={{ mt: 1, mb: 2 }}>
              Are you sure you want to delete <strong>{selectedInvoice?.name}</strong>? This action cannot be undone.
            </Typography>
            <div className="flex justify-around mt-3">
             
            <Button variant="contained" color="inherit" onClick={handleCloseDeleteModal} sx={{ color: "black" }}>Cancel</Button>

              <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>
            </div>
          </Box>
        </Modal>

        {/* View Invoice Modal */}
        <Modal open={viewModalOpen} onClose={handleCloseViewModal}>
          <Box sx={style}>
            <Typography variant="h5" fontWeight="bold" sx={{ textDecoration: "underline" }}>
              Invoice Details
              </Typography>

            {selectedInvoice && (
              <>
                <p><strong>ID:</strong> {selectedInvoice.id}</p>
                <p><strong>Project:</strong> {selectedInvoice.name}</p>
                <p><strong>Amount:</strong> {selectedInvoice.amount}</p>
                <p><strong>Status:</strong> {selectedInvoice.status}</p>
                <p><strong>Due Date:</strong> {selectedInvoice.dueDate}</p>
                <p><strong>Payment Method:</strong> {selectedInvoice.paymentmethod}</p>
                <p><strong>Payment ID:</strong> {selectedInvoice.paymentid}</p>
                <p><strong>Bank Account:</strong> {selectedInvoice.bankaccount}</p>
                <p><strong>Note:</strong> {selectedInvoice.note}</p>
              </>
            )}
           <Button 
           variant="contained" 
           onClick={handleCloseViewModal} 
           sx={{ mt: 2, bgcolor: "#e34450", color: "black", "&:hover": { bgcolor: "#e5b2b5" } }}
           >
            <b>CLOSE</b>
            </Button>

          </Box>
        </Modal>

        {/* Edit Invoice Modal */}
        <Modal open={editModalOpen} onClose={handleCloseEditModal}>
        <Box sx={{ ...style, color: "black",
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "black" }, // Static black border
    "&:hover fieldset": { borderColor: "black" }, // No change on hover
    "&.Mui-focused fieldset": { borderColor: "black" }, // No blue border on focus
  },

 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ textDecoration: "underline" }}>
              Edit Invoice
              </Typography>
            <TextField fullWidth margin="normal" label="Project Name" name="name" value={editedInvoice.name || ""} onChange={handleEditChange} InputLabelProps={{ style: { color: "black" },shrink: true }} InputProps={{ style: { color: "black" } }}  sx={{ 
        fieldset: { borderColor: "black" } 
      }} />
            <TextField fullWidth margin="normal" label="Amount" name="amount" value={editedInvoice.amount || ""} onChange={handleEditChange} InputLabelProps={{ style: { color: "black" },shrink: true }} InputProps={{ style: { color: "black" } }}  sx={{ 
        fieldset: { borderColor: "black" } 
      }}/>
            <TextField fullWidth margin="normal" label="Status" name="status" value={editedInvoice.status || ""} onChange={handleEditChange} InputLabelProps={{ style: { color: "black" },shrink: true }} InputProps={{ style: { color: "black" } }}  sx={{ 
        fieldset: { borderColor: "black" } 
      }}/>
            <TextField fullWidth margin="normal" label="Due Date" name="dueDate" value={editedInvoice.dueDate || ""} onChange={handleEditChange} InputLabelProps={{ style: { color: "black" } ,shrink: true}} InputProps={{ style: { color: "black" } }}  sx={{ 
        fieldset: { borderColor: "black" } // Blue border
      }}/>
          <TextField fullWidth margin="normal" label="Client" name="client" value={editedInvoice.client|| ""} onChange={handleEditChange} InputLabelProps={{ style: { color: "black" } ,shrink: true}} InputProps={{ style: { color: "black" } }}  sx={{ 
        fieldset: { borderColor: "black" } 
      }}/>
          <TextField fullWidth margin="normal" label="Payment Method" name="paymentmethod" value={editedInvoice.paymentmethod|| ""} onChange={handleEditChange} InputLabelProps={{ style: { color: "black" } ,shrink: true}} InputProps={{ style: { color: "black" } }}  sx={{ 
        fieldset: { borderColor: "black" } 
      }}/>
          <TextField fullWidth margin="normal" label="Payment  ID" name="paymentid" value={editedInvoice.paymentid || ""} onChange={handleEditChange} InputLabelProps={{ style: { color: "black" } }} InputProps={{ style: { color: "black" } }}  sx={{ 
        fieldset: { borderColor: "black" } 
      }}/>
          <TextField fullWidth margin="normal" label="Bank Acount" name="bankaccount" value={editedInvoice.bankaccount || ""} onChange={handleEditChange} InputLabelProps={{ style: { color: "black" } }} InputProps={{ style: { color: "black" } }}  sx={{ 
        fieldset: { borderColor: "black" } 
      }}/>
          <TextField fullWidth margin="normal" label="Note" name="note" value={editedInvoice.note || ""} onChange={handleEditChange} InputLabelProps={{ style: { color: "black" } }} InputProps={{ style: { color: "black" } }}  sx={{ 
        fieldset: { borderColor: "black" } 
      }}/>
            <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
              <Button variant="contained" color="error" onClick={handleCloseEditModal}>Cancel</Button>
              <Button variant="contained" color="primary" onClick={handleSaveEdit}>Save</Button>
            </Box>
          </Box>
        </Modal>

         {/* Create Invoice Modal */}
         <Modal open={createModalOpen} onClose={handleCloseCreateModal}>
          <Box sx={style}>
          <Typography variant="h5" fontWeight="bold" sx={{ textDecoration: "underline" }}>
              Create Invoice
              </Typography>
            <TextField fullWidth margin="normal" label="Project Name" name="name" value={newInvoice.name} onChange={handleCreateChange} InputLabelProps={{ style: { color: "black" } }} InputProps={{ style: { color: "black" } }}  sx={{ 
        fieldset: { borderColor: "black" } // Blue border
      }}/>
            <TextField fullWidth margin="normal" label="Amount" name="amount" value={newInvoice.amount} onChange={handleCreateChange} InputLabelProps={{ style: { color: "black" } }} InputProps={{ style: { color: "black" } }}  sx={{ 
        fieldset: { borderColor: "black" } // Blue border
      }}/>
            <TextField fullWidth margin="normal" label="Status" name="status" value={newInvoice.status} onChange={handleCreateChange} InputLabelProps={{ style: { color: "black" } }} InputProps={{ style: { color: "black" } }}  sx={{ 
        fieldset: { borderColor: "black" } // Blue border
      }}/>
            <TextField fullWidth margin="normal" label="Due Date" name="dueDate" value={newInvoice.dueDate} onChange={handleCreateChange} InputLabelProps={{ style: { color: "black" } }} InputProps={{ style: { color: "black" } }}  sx={{ 
        fieldset: { borderColor: "black" } // Blue border
      }}/>
      <TextField fullWidth margin="normal" label="Payment Method" name="payment method" value={newInvoice.paymentmethod} onChange={handleCreateChange} InputLabelProps={{ style: { color: "black" } }} InputProps={{ style: { color: "black" } }}  sx={{ 
        fieldset: { borderColor: "black" } // Blue border
      }}/>
      <TextField fullWidth margin="normal" label="Payment ID" name="paymentid" value={newInvoice.paymentid} onChange={handleCreateChange} InputLabelProps={{ style: { color: "black" } }} InputProps={{ style: { color: "black" } }}  sx={{ 
        fieldset: { borderColor: "black" } // Blue border
      }}/>
      <TextField fullWidth margin="normal" label="Bank Account" name="bank account" value={newInvoice.bankaccount} onChange={handleCreateChange} InputLabelProps={{ style: { color: "black" } }} InputProps={{ style: { color: "black" } }}  sx={{ 
        fieldset: { borderColor: "black" } // Blue border
      }}/>
      <TextField fullWidth margin="normal" label="Note" name="note" value={newInvoice.dueDate} onChange={handleCreateChange} InputLabelProps={{ style: { color: "black" } }} InputProps={{ style: { color: "black" } }}  sx={{ 
        fieldset: { borderColor: "black" } // Blue border
      }}/>
            <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
              <Button variant="contained" color="error" onClick={handleCloseCreateModal}>Cancel</Button>
              <Button variant="contained" color="primary" onClick={handleSaveCreate}>Save</Button>
            </Box>
          </Box>
        </Modal>
      </SideBar>
    </div>
  );
};

export default Invoices;

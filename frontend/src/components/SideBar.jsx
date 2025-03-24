import { useEffect, useRef, useState } from "react";
// import { Menu, X, Home, Settings, User } from "lucide-react";
import CancelIcon from '@mui/icons-material/Cancel';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
//import logo from "../../public/logo.png";
import logo from "./logo.png";
import SideBarListItem from "./SideBarListItem";
import DashboardIcon from '@mui/icons-material/Dashboard';
import FolderIcon from "@mui/icons-material/Folder";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TaskIcon from "@mui/icons-material/Task";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DescriptionIcon from "@mui/icons-material/Description";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import GroupsIcon from "@mui/icons-material/Groups";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CampaignIcon from "@mui/icons-material/Campaign";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import ChatIcon from "@mui/icons-material/Chat";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLocation } from "react-router";
import LoadingBar from "react-top-loading-bar";
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { Logout } from "@mui/icons-material";
import LockResetIcon from '@mui/icons-material/LockReset';

export default function SideBar({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const [isListOpen, setIsListOpen] = useState(false);
  const [isReportsOpen, setIsReportsOpen] = useState(false);

  // To activate the sidebar list item
  const location = useLocation();
  const isActive = (path) =>
    location.pathname == path ? " sideBarItemActive" : " ";

  // Loading Bar
  const loadingBar = useRef(null);
  useEffect(() => {
    loadingBar.current.continuousStart(); // Start loading bar
    const timer = setTimeout(() => {
      loadingBar.current.complete(); // Complete loading after delay
    }, 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Avatar/Profile Handle Menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className=" w-full ">
      <LoadingBar color="#282C6C" height={3} ref={loadingBar} />
      {/* Header */}
      <div className="flex justify-between items-center px-8 py-2 h-[5rem bg-white w-full border-b border-gray-400 shadow-[10px_10px_50px_5px] shadow-gray-300">
        <div className="flex gap-x-8">
          {/* Menu Button */}
          <button
            className=" cursor-pointer  text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuOpenIcon />
          </button>
          <div className="w-[7rem]">
            <img
              className="w-full object-contain "
              src={logo}
              loading="true"
              alt="Logo"
            />
          </div>
        </div>
        <div className="">
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2}}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> Profile
            </MenuItem>
            <Divider />

            <MenuItem onClick={handleClose}>
              <ListItemIcon><LockResetIcon/></ListItemIcon>
              Reset Password
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
      {/* Sidebar */}
      <div className="flex flex-auto h-[calc(100vh_-_5rem)] w-full relative ">
        <div
          className={`absolute left-0 lg:static z-10 h-full   transition-transform transform  ${isOpen ? "translate-x-0 w-full lg:w-[16rem]" : "-translate-x-[20rem]"} w-0`}
        >
          <div
            className={` overflow-y-scroll no-scrollbar h-full  w-full sm:w-[16rem]  bg-[var(--primary1)] text-white p-5 translate-[visibility]   
       `}
          >
            {/* <h2 className="text-2xl font-bold mb-5">Sidebar</h2> */}
            <ul className="space-y-4">
              <SideBarListItem to={"/"} className={isActive("/")}>
                <DashboardIcon /> Dashboard
              </SideBarListItem>

              <SideBarListItem
                to={"/projects"}
                className={isActive("/projects")}
              >
                <FolderIcon /> Project
              </SideBarListItem>

              <SideBarListItem to={"/tasks"} className={isActive("/tasks")}>
                <TaskIcon /> Tasks
              </SideBarListItem>

              <SideBarListItem to={"/clients"} className={isActive("/clients")}>
                <AssignmentIndIcon /> Clients
              </SideBarListItem>

              <SideBarListItem to={"/company"} className={isActive("/company")}>
                <BusinessIcon /> Company
              </SideBarListItem>

              <SideBarListItem to={"/leads"} className={isActive("/leads")}>
                <PeopleAltIcon /> Leads
              </SideBarListItem>

              <SideBarListItem to={"/deals"} className={isActive("/deals")}>
                <DescriptionIcon /> Deals
              </SideBarListItem>

              <div>
                <div onClick={() => setIsListOpen(!isListOpen)}>
                  <SideBarListItem>
                    <div className="flex justify-between items-center gap-2 w-full">
                      <div className="flex gap-x-4">
                        <MonetizationOnIcon /> Sales
                      </div>
                      <div>
                        <ExpandMoreIcon />
                      </div>
                    </div>
                  </SideBarListItem>
                </div>
                <div
                  className={`space-y-2 ps-2  ${isListOpen ? " h-full visible mt-2" : "h-0 invisible"} `}
                >
                  <div className="">
                    <SideBarListItem to={"/invoice"}className={isActive("/invoice")} >
                      <MonetizationOnIcon /> Invoice
                    </SideBarListItem>
                  </div>
                  <div className="">
                    <SideBarListItem to={"/estimate"}className={isActive("/estimate")}>
                      <MonetizationOnIcon /> Estimate
                    </SideBarListItem>
                  </div>
                  <div className="">
                    <SideBarListItem to={"/expenses"}className={isActive("/expenses")}>
                      <MonetizationOnIcon /> Expenses
                    </SideBarListItem>
                  </div>
                  <div className="">
                    <SideBarListItem to={"/bank account"}className={isActive("/bank account")}>
                      <MonetizationOnIcon /> Bank Account
                    </SideBarListItem>
                  </div>
                </div>
              </div>

              <SideBarListItem to={"/team"}className={isActive("/team")}>
                <GroupsIcon /> Team
              </SideBarListItem>

              <div>
                <div onClick={() => setIsReportsOpen(!isReportsOpen)}>
                  <SideBarListItem>
                    <div className="flex justify-between items-center gap-2 w-full">
                      <div className="flex gap-x-4">
                        <AssessmentIcon /> Reports
                      </div>
                      <div>
                        <ExpandMoreIcon />
                      </div>
                    </div>
                  </SideBarListItem>
                </div>
                <div
                  className={`space-y-2 ps-2  ${isReportsOpen ? " h-full visible mt-2" : "h-0 invisible"} `}
                >
                  <div className="">
                    <SideBarListItem>Project Report</SideBarListItem>
                  </div>
                  <div className="">
                    <SideBarListItem>Tasks Report</SideBarListItem>
                  </div>
                  <div className="">
                    <SideBarListItem>Leads Report</SideBarListItem>
                  </div>
                  <div className="">
                    <SideBarListItem>Expense Report</SideBarListItem>
                  </div>
                </div>
              </div>

              <SideBarListItem to={"/tickets"}
                className={isActive("/tickets")}>
                
                <SupportAgentIcon /> Tickets
              </SideBarListItem>

              <SideBarListItem>
                <CampaignIcon /> Announcements
              </SideBarListItem>

              <SideBarListItem>
                <CircleNotificationsIcon /> Notifications
              </SideBarListItem>

              <SideBarListItem>
                <ChatIcon /> Chats
              </SideBarListItem>

              <SideBarListItem>
                <EventNoteIcon /> Timesheet
              </SideBarListItem>

              <SideBarListItem>
                <AccountCircleIcon /> Profile
              </SideBarListItem>
            </ul>
          </div>
        </div>

        <div className="  h-[calc(100vh_-_5rem)] w-full relative overflow-y-scroll no-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
}
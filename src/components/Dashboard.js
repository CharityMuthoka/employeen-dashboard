import React, { useState, useRef, useEffect} from "react";
import LeaveModal from "./LeaveModal.js";
import LogTaskModal from "./LogTaskModal.js";
import { QRCodeCanvas } from 'qrcode.react';
import FlippableCard from "./FlippableCard.js";




  

const Dashboard = ({ setActivePage, activePage }) => {
  const [activeTab, setActiveTab] = useState('websiteActivity');
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
  const [isLogTaskModalOpen, setIsLogTaskModalOpen] = useState(false);

  

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "/images/dashboard.png", whiteIcon: "/images/whitedashboard.png" },
    { id: "task", label: "Task", icon: "/images/task.png", whiteIcon: "/images/whitetask.png" },
    { id: "leave", label: "Leave & Attendance", icon: "/images/leave.png", whiteIcon: "/images/whiteleave.png" },
    { id: "payslips", label: "Pay Slips", icon: "/images/payslip.png", whiteIcon: "/images/whitepayslip.png" },
    { id: "trainings", label: "Trainings", icon: "/images/training.png", whiteIcon: "/images/whitetraining.png" },
    { id: "cards", label: "My Cards", icon: "/images/cards.png", whiteIcon: "/images/whitecards.png" },
    { id: "profile", label: "My Profile", icon: "/images/profile.png", whiteIcon: "/images/whiteprofile.png" },
    { id: "announcements", label: "Announcements", icon: "/images/announcements.png", whiteIcon: "/images/whiteannouncements.png" },
    { id: "support", label: "Help & Support", icon: "/images/help.png", whiteIcon: "/images/whitehelp.png" },
  ];

  const handleLeaveSubmit = (formData) => {
    // Handle the form submission here
    console.log("Leave application submitted:", formData);
    // You can add API call here to submit the leave application
  };

  // Handle Log Task form submission
  const handleLogTaskSubmit = (formData) => {
    console.log("New task submitted:", formData);
    // Add API call  here
  };

//dummy staff data
const name="Victor Emefo";
const role="Product Designer";
const department="Design";
const staffId="EMP4526";
const validThru = "05/24/2026";
const profileUrl = "/images/avatar_5.png";
const org="Ontap Global Workspace";
const phoneNumber="0734253627";
const signature="signature";


<FlippableCard
  name={name}
  role={role}
  department={department}
  staffId={staffId}
  validThru={validThru}
  profileUrl={profileUrl}
  org={org}
  phoneNumber={phoneNumber}
  signature={signature}
/>



const [isMenuOpen, setIsMenuOpen] = useState(false);
const menuRef = useRef(null);
// Close dropdown if clicked outside
useEffect(() => {
  function handleClickOutside(event) {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  }
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* Fixed Sidebar */}
      <div className="flex flex-col w-[272px] h-full border-r border-slate-100 bg-white shrink-0">
        {/* Logo Section */}
        <div className="flex flex-col items-center gap-2 p-2 h-24">
          <div className="flex items-end p-3 w-64 h-20">
            <img
              src="/images/logo.png"
              alt="Logo"
              width="180px"
              height="52.2px"
            />
          </div>
        </div>

        {/* Search Section */}
        <div className="flex flex-col items-start gap-2 p-4 h-16">
          <div className="flex items-center gap-2 p-2 rounded-lg border border-slate-100 h-9 w-[240px] bg-white">
            <div className="h-5">
              <img
                width="16.5px"
                height="16.5px"
                src="/images/search.png"
                alt="Search icon"
              />
            </div>
            <div className="text-base text-gray-400 font-normal min-w-[160px]">
              Search
            </div>
            <div className="flex items-center p-1 h-5 rounded shadow-sm bg-gray-200">
              <img
                width="15px"
                height="15px"
                src="/images/command.png"
                alt="Command icon"
              />
            </div>
          </div>
        </div>

        {/* Main Menu Section */}
        <div className="flex flex-col items-start gap-2 mt-0.5 h-[calc(100%-200px)] relative pl-4 overflow-y-auto">
          {/* Active indicator */}
          {activePage && (
            <div
              className="absolute left-0 top-2.5 h-9 transition-all duration-200"
              style={{
                transform: `translateY(${menuItems.findIndex(item => item.id === activePage) * (36 + 8) + 28}px)`
              }}
            >
              <div className="w-1 h-8 bg-teal-500 rounded-r-full"></div>
            </div>
          )}

          {/* Menu Content */}
          <div className="flex items-center gap-2 p-1 px-3 h-7 w-[240px]">
            <div className="text-sm text-neutral-900/60 font-medium">
              Main Menu
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 w-60">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className={`flex items-center gap-2 p-2 px-3 rounded-lg h-9 w-[240px] relative ${activePage === item.id
                  ? "bg-teal-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
                  }`}
                onClick={() => setActivePage(item.id)}
              >
                <div className="h-5">
                  <img
                    width="20px"
                    height="20px"
                    src={activePage === item.id ? item.whiteIcon : item.icon}
                    alt={`${item.label} icon`}
                  />
                </div>
                <div className="text-base font-normal">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logout Section */}
        <div className="mt-auto w-full border-t border-slate-200">
          <div className="flex items-center p-3 pl-8">
            <div className="flex flex-row items-center gap-2 cursor-pointer">
              <img
                width="30px"
                height="30px"
                src="/images/logout.png"
                alt="Logout icon"
              />
              <span className="font-inter text-lg text-teal-500 font-normal">
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-y-auto overflow-x-hidden bg-white z-10">
        {/* Fixed Header */}
        <div className="fixed top-0 left-[272px] flex justify-between items-center p-3 w-[calc(100vw-272px)] border-b border-gray-200 bg-white z-50">
          {/* Greeting */}
          <div className="flex flex-col gap-2 w-96">
            <div className="text-[22px] text-neutral-900 font-semibold">
              Good Morning Victor! 👋
            </div>
            <div className="text-sm text-neutral-500 font-normal">
              Product Designer · Design Team
            </div>
          </div>

          {/* Right Section: Date, Notification, Avatar */}
          <div className="flex items-center gap-6">
            {/* Date Button */}
            <div
              className="flex items-center gap-2 p-2 pl-3 rounded-lg border border-neutral-200 h-8 min-w-[88px] cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => alert(`Today's date is ${new Date().toDateString()}`)}
            >
              <div className="h-4">
                <img
                  width="13px"
                  height="14.3px"
                  src="/images/calendar.png"
                  alt="Calendar icon"
                />
              </div>
              <div className="text-xs text-neutral-900 font-semibold">
                {new Date().toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>

            {/* Notifications + Avatar */}
            <div className="flex items-center gap-3 w-20">
              <div className="w-6 h-4">
                <img
                  width="21.5px"
                  height="21.5px"
                  src="/images/notification.png"
                  alt="Notification icon"
                />
              </div>
              {/*  thin vertical line */}
              <div className="w-px h-6 bg-gray-300"></div>
              <img
                className="rounded-full border-2"
                src="/images/avatar.png"
                alt="Profile"
                width="50px"
                height="50px"
              />
            </div>
          </div>
        </div>

        {/* Scrollable section */}
        <div className="flex flex-col gap-6 px-8 pt-[25px] pb-8 max-w-[calc(100vw-272px)] mt-[110px]">
          {/* Status Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">

<div className="relative flex items-center p-4 rounded-xl h-[120px] shadow-lg text-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl overflow-hidden">
  <img
    src="/images/card1.png"
    alt="Sticker background"
    className="absolute inset-0 w-full h-full object-cover rounded-xl z-0"
  />

  {/* Content */}
  <div className="flex flex-col justify-center h-full w-full relative z-10">
    {/* Status Text & Clock Icon */}
    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex flex-col">
        <div className="text-sm font-medium">Today's Status</div>
        <div className="text-lg font-semibold">Clocked In: 9:05 AM</div>
      </div>
      <div className="flex items-center justify-center p-1 rounded-2xl h-8 w-8 bg-white">
        <img
          width="23"
          height="23"
          src="/images/clock.png"
          alt="Clock Icon"
        />
      </div>
    </div>
  </div>
</div>


 
 
 
 


 


{/* === card 3 === */}
{/* === Card Section === */}
<div className="relative flex flex-col sm:flex-row items-stretch justify-between p-3 sm:p-4 rounded-xl shadow-lg bg-[#0B1E35] text-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl overflow-hidden min-h-[160px] max-h-[220px] w-full">

  {/* === Left Column: Logo + Profile === */}
  <div className="flex flex-col justify-between h-full flex-shrink-0 space-y-1 sm:space-y-2">
    
    {/* Logo */}
    <div className="flex flex-col items-start -mt-1 sm:-mt-2">
      <div className="flex items-center space-x-1">
        <img 
          src="images/logo.png" 
          alt="ONTAP logo" 
          className="w-3.5 h-3.5 object-contain sm:w-4 sm:h-4"
        />        
        <h1 className="text-[12px] sm:text-[13px] font-bold tracking-wide">ONTAP</h1>
      </div>
      <p className="text-[6.5px] sm:text-[7px] text-gray-300 tracking-widest">GLOBAL WORKSPACE</p>
    </div>

    {/* Profile Image */}
    <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] rounded-lg overflow-hidden border border-gray-500">

      <img
        src={profileUrl}
        alt={`${name} Profile`}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Name & Staff ID */}
    <div className="flex items-center justify-between mt-2 w-full space-x-2">
  <h3 className="font-semibold italic text-[9px] sm:text-[10px] truncate max-w-[80px] sm:max-w-[90px]">
    {signature}
  </h3>
  <div className="flex flex-col leading-tight min-w-0">
    <p className="text-[8px] sm:text-[9px] text-gray-400 uppercase">Staff ID</p>
    <p className="text-[9px] sm:text-[10px] font-semibold text-white break-all">{staffId}</p>
  </div>
</div>
  </div>

  {/* === Middle Section: Staff Details === */}
  <div className="flex flex-col justify-center flex-grow h-full px-1 sm:px-2 mt-2 sm:mt-0 overflow-hidden">
  <div className="min-w-0">
    <h2 className="text-[13px] sm:text-[14px] font-bold leading-tight truncate">{name}</h2>
    <p className="text-[10px] sm:text-[11px] text-gray-200 truncate">{role}</p>
  </div>

  <div className="min-w-0 mt-2 sm:mt-2.5">
    <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wide">Department</p>
    <p className="text-[11px] sm:text-[12px] font-semibold text-white truncate">{department}</p>
  </div>
</div>

  {/* === Right Section: QR + NFC + Menu === */}
  <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-around h-full mt-5 sm:mt-4 relative gap-2 sm:gap-2">

    {/* QR Code */}
    <div className="bg-white rounded-md p-[2px] flex items-center justify-center shadow-md w-16 h-16 border border-gray-200 mt-3">

    <QRCodeCanvas
      value={`BEGIN:VCARD
VERSION:3.0
FN:${name}
TITLE:${role}
ORG:${org}
TEL:${phoneNumber}
EMAIL:${name.split(" ")[0].toLowerCase()}@ontapke.com
URL:https://ontapke.com
END:VCARD`}
      size={60}
      bgColor="#ffffff"
      fgColor="#000000"
      level="H"
    />
  </div>

    {/* NFC Icons Row */}
    <div className="flex sm:flex-col items-center justify-center gap-2 sm:gap-1">
      <div className="flex items-center justify-center w-6 h-6 rounded-full border border-blue-400 bg-[#102A49] hover:bg-blue-900 transition">
        <img
          src="/images/nfc_card.png"
          alt="NFC"
          className="w-4 h-4 object-contain animate-pulse"
        />
      </div>
      <div className="relative flex items-center justify-center w-6 h-6 rounded-full border border-blue-400 bg-[#102A49] hover:bg-blue-900 transition">
        <img
          src="/images/nfc_card.png"
          alt="NFC"
          className="w-4 h-4 object-contain animate-pulse"
        />

        {/* Menu */}
        <div className="absolute top-1/2 left-full ml-1 -translate-y-1/2" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-gray-700 focus:outline-none"
            aria-label="Options"
          >
            <svg
              className="w-3.5 h-3.5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="3" r="2" />
              <circle cx="10" cy="10" r="2" />
              <circle cx="10" cy="17" r="2" />
            </svg>
          </button>

          {/* Dropdown */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-1 w-20 bg-[#102A49] rounded-md shadow-lg z-10">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setActivePage('cards');
                }}
                className="block w-full text-left px-3 py-1 text-white hover:bg-blue-700 rounded-md"
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>

  {/* === Valid Thru === */}
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
    <p className="text-[8px] sm:text-[9px] text-gray-400 font-semibold uppercase leading-tight">
      Valid Thru
    </p>
    <p className="text-[8px] sm:text-[9px] font-semibold text-white leading-tight">
      {validThru}
    </p>
  </div>
</div>


{/* === }
<div>
<FlippableCard
  name={name}
  role={role}
  department={department}
  staffId={staffId}
  validThru={validThru}
  profileUrl={profileUrl}
  org={org}
  phoneNumber={phoneNumber}
  signature={signature}
/>
</div>

===*/}





            {/* Action Buttons */}
            <div className="flex flex-col gap-2 justify-center h-[120px]">
              <button 
          onClick={() => setIsLeaveModalOpen(true)}
          className="flex justify-center items-center rounded-md h-10 bg-teal-500 text-white text-sm font-normal hover:bg-teal-600 transition-colors"
        >
          Apply Leave
        </button>
              <button 
          onClick={() => setIsLogTaskModalOpen(true)}
          className="flex justify-center items-center rounded-md h-10 shadow-sm bg-white text-neutral-900 text-sm font-normal hover:bg-gray-100 transition-colors"
        >
          Log Task
        </button>
            </div>
          </div>

          {/* My Tasks Section */}
<div className="flex flex-col gap-6 mt-6">
  <div className="flex justify-between items-center h-8">
    <div className="text-lg text-neutral-900 font-semibold">My Tasks</div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
    {/* To Do Column */}
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img width="14" height="14" src="/images/todo.png" alt="To Do icon" />
          <div className="text-base text-neutral-900 font-medium">To Do</div>
        </div>
        <div className="flex items-center justify-center rounded border border-neutral-200 w-5 h-5">
          <div className="text-xs text-neutral-900 font-semibold">3</div>
        </div>
      </div>

      {/* Task Cards */}
      <div className="flex flex-col gap-4">
        {/* Task 1 */}
        <div className="flex flex-col gap-3 p-4 rounded-xl bg-slate-50/80 cursor-pointer hover:bg-slate-100/80 transition-colors">
          <div className="flex justify-between items-start">
            <div className="text-sm text-neutral-900 font-medium">
              Complete Q3 Performance Review
            </div>
            <img width="16.5" height="16.3" src="/images/redflag.png" alt="Red flag" />
          </div>
          <div className="text-xs text-neutral-900 font-normal">
            Fill out the quarterly performance form and submit to HR
          </div>
          <div className="flex justify-between items-center pt-2">
            <div className="flex items-center gap-1">
              <img width="12.2" height="12.2" src="/images/calendar1.png" alt="Calendar" />
              <div className="text-[10px] text-gray-600 font-medium">Aug 26, 2025</div>
            </div>
            <div className="flex items-center justify-center py-0.5 px-2 rounded-md bg-red-100">
              <div className="text-[10.5px] text-pink-800 font-semibold">High</div>
            </div>
          </div>
          <div className="pt-2 border-t border-neutral-200">
            <div className="flex items-center gap-1">
              <img width="11.5" height="12.8" src="/images/assignee.png" alt="Assignee" />
              <div className="text-[10px] text-gray-600 font-medium">Assigned by Mildred</div>
            </div>
          </div>
        </div>

        {/* Task 2 */}
        <div className="flex flex-col gap-3 p-4 rounded-xl bg-slate-50/80 cursor-pointer hover:bg-slate-100/80 transition-colors">
          <div className="flex justify-between items-start">
            <div className="text-sm text-neutral-900 font-medium">Design Review for Ontap</div>
            <img width="16.5" height="16.3" src="/images/greenflag.png" alt="Green flag" />
          </div>
          <div className="text-xs text-neutral-900 font-normal">
            Review the new design mockups for the Ontap project
          </div>
          <div className="flex justify-between items-center pt-2">
            <div className="flex items-center gap-1">
              <img width="12.2" height="12.2" src="/images/calendar1.png" alt="Calendar" />
              <div className="text-[10px] text-gray-600 font-medium">Aug 28, 2025</div>
            </div>
            <div className="flex items-center justify-center py-0.5 px-2 rounded-md bg-green-100">
              <div className="text-[10.5px] text-green-800 font-semibold">Medium</div>
            </div>
          </div>
          <div className="pt-2 border-t border-neutral-200">
            <div className="flex items-center gap-1">
              <img width="11.5" height="12.8" src="/images/assignee.png" alt="Assignee" />
              <div className="text-[10px] text-gray-600 font-medium">Assigned by me</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* In Progress Column */}
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img width="14" height="14" src="/images/inprogress.png" alt="In Progress" />
          <div className="text-base text-neutral-900 font-medium">In Progress</div>
        </div>
        <div className="flex items-center justify-center rounded border border-neutral-200 w-5 h-5">
          <div className="text-xs text-neutral-900 font-semibold">2</div>
        </div>
      </div>

      {/* Task Cards */}
      <div className="flex flex-col gap-4">
        {/* Task 1 */}
        <div className="flex flex-col gap-3 p-4 rounded-xl bg-slate-50/80 cursor-pointer hover:bg-slate-100/80 transition-colors">
          <div className="flex justify-between items-start">
            <div className="text-sm text-neutral-900 font-medium">Update User Documentation</div>
            <img width="16.5" height="16.3" src="/images/redflag.png" alt="Red flag" />
          </div>
          <div className="text-xs text-neutral-900 font-normal">
            Update user guides for the new features released last week
          </div>
          <div className="flex justify-between items-center pt-2">
            <div className="flex items-center gap-1">
              <img width="12.2" height="12.2" src="/images/calendar1.png" alt="Calendar" />
              <div className="text-[10px] text-gray-600 font-medium">Sep 2, 2025</div>
            </div>
            <div className="flex items-center justify-center py-0.5 px-2 rounded-md bg-yellow-100">
              <div className="text-[10.5px] text-yellow-800 font-semibold">Low</div>
            </div>
          </div>
          <div className="pt-2 border-t border-neutral-200">
            <div className="flex items-center gap-1">
              <img width="11.5" height="12.8" src="/images/assignee.png" alt="Assignee" />
              <div className="text-[10px] text-gray-600 font-medium">Assigned by Thaddeus</div>
            </div>
          </div>
        </div>

        {/* Task 2 */}
        <div className="flex flex-col gap-3 p-4 rounded-xl bg-slate-50/80 cursor-pointer hover:bg-slate-100/80 transition-colors">
          <div className="flex justify-between items-start">
            <div className="text-sm text-neutral-900 font-medium">Design Review for Ontap</div>
            <img width="16.5" height="16.3" src="/images/greenflag.png" alt="Green flag" />
          </div>
          <div className="text-xs text-neutral-900 font-normal">
            Review the new design mockups for the Ontap project
          </div>
          <div className="flex justify-between items-center pt-2">
            <div className="flex items-center gap-1">
              <img width="12.2" height="12.2" src="/images/calendar1.png" alt="Calendar" />
              <div className="text-[10px] text-gray-600 font-medium">Aug 26, 2025</div>
            </div>
            <div className="flex items-center justify-center py-0.5 px-2 rounded-md bg-green-100">
              <div className="text-[10.5px] text-green-800 font-semibold">High</div>
            </div>
          </div>
          <div className="pt-2 border-t border-neutral-200">
            <div className="flex items-center gap-1">
              <img width="11.5" height="12.8" src="/images/assignee.png" alt="Assignee" />
              <div className="text-[10px] text-gray-600 font-medium">Assigned by me</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Completed Column section*/}
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img width="14" height="14" src="/images/completed.png" alt="Completed" />
          <div className="text-base text-neutral-900 font-medium">Completed</div>
        </div>
        <div className="flex items-center justify-center rounded border border-neutral-200 w-5 h-5">
          <div className="text-xs text-neutral-900 font-semibold">1</div>
        </div>
      </div>

      {/* Task Cards */}
      <div className="flex flex-col gap-4">
        {/* Task 1 */}
        <div className="flex flex-col gap-3 p-4 rounded-xl bg-slate-50/80 cursor-pointer hover:bg-slate-100/80 transition-colors">
          <div className="flex justify-between items-start">
            <div className="text-sm text-neutral-900 font-medium">Team Meeting Preparation</div>
            <img width="16.5" height="16.3" src="/images/redflag.png" alt="Red flag" />
          </div>
          <div className="text-xs text-neutral-900 font-normal">
            Prepare agenda and materials for the weekly team meeting
          </div>
          <div className="flex justify-between items-center pt-2">
            <div className="flex items-center gap-1">
              <img width="12.2" height="12.2" src="/images/calendar1.png" alt="Calendar" />
              <div className="text-[10px] text-gray-600 font-medium">Aug 25, 2025</div>
            </div>
            <div className="flex items-center justify-center py-0.5 px-2 rounded-md bg-blue-100">
              <div className="text-[10.5px] text-blue-800 font-semibold">Normal</div>
            </div>
          </div>
          <div className="pt-2 border-t border-neutral-200">
            <div className="flex items-center gap-1">
              <img width="11.5" height="12.8" src="/images/assignee.png" alt="Assignee" />
              <div className="text-[10px] text-gray-600 font-medium">Assigned by me</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



          {/* Announcements & Trainings Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {/* Announcements */}
            <div className="flex flex-col gap-4 p-4 rounded-xl shadow-lg bg-white">
              <div className="text-lg text-neutral-900 font-semibold">
                Announcements
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center p-3 rounded bg-gray-50">
                  <div className="flex flex-col">
                    <div className="text-sm text-neutral-900 font-medium">
                      Company Holiday: Labor Day Schedule
                    </div>
                    <div className="text-[10px] text-gray-600 font-medium">
                      Aug 26, 2025
                    </div>
                  </div>
                </div>
                <div className="flex items-center p-3 rounded bg-gray-50">
                  <div className="flex flex-col">
                    <div className="text-sm text-neutral-900 font-medium">
                      Office Relocation Update
                    </div>
                    <div className="text-[10px] text-gray-600 font-medium">
                      Aug 28, 2025
                    </div>
                  </div>
                </div>
                <div className="flex items-center p-3 rounded bg-gray-50">
                  <div className="flex flex-col">
                    <div className="text-sm text-neutral-900 font-medium">
                      New Remote Work Policy
                    </div>
                    <div className="text-[10px] text-gray-600 font-medium">
                      Aug 28, 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trainings */}
            <div className="flex flex-col gap-4 p-4 rounded-xl shadow-lg bg-white">
              <div className="text-lg text-neutral-900 font-semibold">
                Trainings
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-neutral-900 font-medium">
                      Effective Communication Skills
                    </div>
                    <div className="text-xs text-neutral-900 font-normal">
                      65%
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-teal-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-neutral-900 font-medium">
                      Hands-on Manager
                    </div>
                    <div className="text-xs text-neutral-900 font-normal">
                      83%
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-teal-500 h-2 rounded-full" style={{ width: '83%' }}></div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-neutral-900 font-medium">
                      New Staff Onboarding
                    </div>
                    <div className="text-xs text-neutral-900 font-normal">
                      95%
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-teal-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leave Modal */}
      <LeaveModal 
        isOpen={isLeaveModalOpen}
        onClose={() => setIsLeaveModalOpen(false)}
        onSubmit={handleLeaveSubmit}
      />

      {/* Log Task Modal */}
      <LogTaskModal 
        isOpen={isLogTaskModalOpen}
        onClose={() => setIsLogTaskModalOpen(false)}
        onSubmit={handleLogTaskSubmit}
      />
    </div>
  );
};

export default Dashboard;
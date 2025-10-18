import React from "react";
import { QRCodeCanvas } from 'qrcode.react';

const Cards = ({ setActivePage, activePage }) => {
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

  //dummy staff data
const name="Victor Emefo";
const role="Product Designer";
const department="Design";
const staffId="EMP4526";
const validThru = "05/24/2026";
const profileUrl = "/images/avatar_5.png";
const org="Lety techconsultancy firm";
const workspace = "Global Workspace";
const phoneNumber="0734253627"
const signature="signature";


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

      {/* Scrollable Content Area */}
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
              {/* Replaced image with actual thin vertical line */}
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

        {/* Scrollable Content */}
        <div className="flex flex-col gap-6 px-8 pt-[45px] pb-8 max-w-[calc(100vw-272px)] mt-[62px]">
          {/* Cards Header */}
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col justify-start items-start gap-1.5">
              <div className="text-lg text-neutral-900 font-semibold">
                My Cards
              </div>
              <div className="text-sm text-gray-600 font-normal">
                Manage your digital business cards and track their performance.
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-row justify-center items-center rounded-lg border border-slate-100 h-10 bg-slate-50 overflow-hidden">
            <div className="flex flex-row justify-center items-center h-10 bg-white min-w-[50%] cursor-pointer border-r border-slate-100">
              <div className="flex flex-row justify-center items-center gap-1">
                <div className="flex justify-center items-center h-5">
                  <img
                    width="16.6px"
                    height="13.1px"
                    src="/images/id.png"
                    alt="ID Card icon"
                  />
                </div>
                <div className="text-xs text-neutral-900 font-semibold tracking-wide">
                  ID Cards
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center h-10 min-w-[50%] cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="flex flex-row justify-center items-center gap-1">
                <div className="flex justify-center items-center h-5">
                  <img
                    width="16.6px"
                    height="13.1px"
                    src="/images/business.png"
                    alt="Business Card icon"
                  />
                </div>
                <div className="text-xs text-neutral-900 font-semibold tracking-wide">
                  Business Cards
                </div>
              </div>
            </div>
          </div>




 
{/* two grid cards scetion */}
  {/* === Card Section Grid === */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

  {/* === card 1 === */}
  
  {/* === Each Card Wrapper === */}
<div className="flex flex-col w-full rounded-3xl shadow bg-transparent p-0 hover:shadow-lg transition-shadow duration-200">

{/* === The Main Card === */}
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
  <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-around h-full mt-6 sm:mt-4 relative gap-2 sm:gap-0">
 
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

    {/* NFC Icons */}
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
{/* === BELOW THE CARD SECTION === */}
<div className="flex flex-col justify-start items-start gap-2.5 w-full mt-3">

  
  {/* Department & Access Level */}
  <div className="flex justify-center items-center rounded-lg w-full h-16 bg-gray-50">
    <div className="flex flex-row justify-between items-center w-full px-4">
      <div className="flex flex-col justify-start items-center gap-0.5">
        <div className="text-sm text-neutral-900 font-semibold">{role}</div>
        <div className="text-xs text-gray-500 font-medium">{department}</div>
      </div>
      <div className="flex flex-col justify-center items-center gap-0.5">
        <div className="text-sm text-neutral-900 font-semibold">Standard</div>
        <div className="text-xs text-gray-500 font-medium">Access Level</div>
      </div>
    </div>
  </div>

  {/* Expiry + Actions */}
  <div className="flex flex-col justify-start items-start gap-4 w-full">
    <div className="flex flex-row justify-start items-center gap-2">
      <img width="16.3" height="16.3" src="/images/expiry.png" alt="Expiry icon" />
      <div className="text-sm text-gray-600 font-medium">Expires: {validThru}</div>
    </div>

    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex flex-row justify-start items-center gap-4">
        <img width="18.5" height="18.5" src="/images/pencil.png" alt="Edit" className="cursor-pointer hover:bg-gray-100 p-1 rounded transition" />
        <img width="17.3" height="17.3" src="/images/download.png" alt="Download" className="cursor-pointer hover:bg-gray-100 p-1 rounded transition" />
        <img width="16" height="18.5" src="/images/trash.png" alt="Delete" className="cursor-pointer hover:bg-gray-100 p-1 rounded transition" />
      </div>

      <div className="flex flex-row justify-center items-center gap-1 px-4 py-1.5 rounded-lg border border-teal-500 h-8 cursor-pointer hover:bg-teal-50 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md mr-3 mb-3">

        <img width="16" height="16" src="/images/preview.png" alt="Preview" />
        <div className="text-xs text-teal-500 font-medium">Preview</div>
      </div>
    </div>
  </div>
</div>
</div>
 
 {/* === card 2 === */}
 {/* === Each Card Wrapper === */}
 <div className="flex flex-col w-full rounded-3xl shadow bg-transparent p-0 hover:shadow-lg transition-shadow duration-200">

{/* === The Main Card === */}
<div className="relative flex flex-col sm:flex-row items-stretch justify-between p-3 sm:p-4 rounded-xl shadow-lg bg-[#0d99ff] text-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl overflow-hidden min-h-[160px] max-h-[220px] w-full">
  
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
    <p className="text-[8px] sm:text-[9px] text-[#0057ce] uppercase">Staff ID</p>
    <p className="text-[9px] sm:text-[10px] font-semibold text-white break-all">{staffId}</p>
  </div>
</div>

  </div>

  {/* === Middle Section: Staff Details === */}
  <div className="flex flex-col justify-center flex-grow h-full px-1 sm:px-2 mt-2 sm:mt-0 overflow-hidden">
    <div className="min-w-0">
      <h2 className="text-[13px] sm:text-[14px] font-bold leading-tight truncate">{name}</h2>
      <p className="text-[10px] sm:text-[11px] text-gray-300 truncate">{role}</p>
    </div>

    <div className="min-w-0 mt-1.5 sm:mt-2">
      <p className="text-[9px] sm:text-[10px] text-[#0057ce] uppercase">Department</p>
      <p className="text-[10px] sm:text-[11px] font-semibold text-white truncate">{department}</p>
    </div>
  </div>

  {/* === Right Section: QR + NFC + Menu === */}
  <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-around h-full mt-6 sm:mt-4 relative gap-2 sm:gap-0">
 
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

    {/* NFC Icons */}
<div className="flex sm:flex-col items-center justify-center gap-2 sm:gap-1 mt-2 sm:mt-3">

    <div className="flex items-center justify-center w-6 h-6 rounded-full border border-blue-400 bg-[#0d99ff] hover:bg-blue-900 transition">
    <img
          src="/images/nfc card5.png"
          alt="NFC"
          className="w-4 h-4 object-contain animate-pulse"
        />
      </div>
      <div className="flex items-center justify-center w-6 h-6 rounded-full border border-blue-400 bg-[#0d99ff] hover:bg-blue-900 transition">
      <img
          src="/images/nfc card5.png"
          alt="NFC"
          className="w-4 h-4 object-contain animate-pulse"
        />
      </div> 
    </div>
  </div>

  {/* === Valid Thru === */}
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
    <p className="text-[8px] sm:text-[9px] text-[#0057ce] font-semibold uppercase leading-tight">
      Valid Thru
    </p>
    <p className="text-[8px] sm:text-[9px] font-semibold text-white leading-tight">
      {validThru}
    </p>
  </div>
</div>
{/* === BELOW THE CARD SECTION === */}
<div className="flex flex-col justify-start items-start gap-2.5 w-full mt-3">

  
  {/* Department & Access Level */}
  <div className="flex justify-center items-center rounded-lg w-full h-16 bg-gray-50">
    <div className="flex flex-row justify-between items-center w-full px-4">
      <div className="flex flex-col justify-start items-center gap-0.5">
        <div className="text-sm text-neutral-900 font-semibold">{role}</div>
        <div className="text-xs text-gray-500 font-medium">{department}</div>
      </div>
      <div className="flex flex-col justify-center items-center gap-0.5">
        <div className="text-sm text-neutral-900 font-semibold">Standard</div>
        <div className="text-xs text-gray-500 font-medium">Access Level</div>
      </div>
    </div>
  </div>

  {/* Expiry + Actions */}
  <div className="flex flex-col justify-start items-start gap-4 w-full">
    <div className="flex flex-row justify-start items-center gap-2">
      <img width="16.3" height="16.3" src="/images/expiry.png" alt="Expiry icon" />
      <div className="text-sm text-gray-600 font-medium">Expires: {validThru}</div>
    </div>

    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex flex-row justify-start items-center gap-4">
        <img width="18.5" height="18.5" src="/images/pencil.png" alt="Edit" className="cursor-pointer hover:bg-gray-100 p-1 rounded transition" />
        <img width="17.3" height="17.3" src="/images/download.png" alt="Download" className="cursor-pointer hover:bg-gray-100 p-1 rounded transition" />
        <img width="16" height="18.5" src="/images/trash.png" alt="Delete" className="cursor-pointer hover:bg-gray-100 p-1 rounded transition" />
      </div>

      <div className="flex flex-row justify-center items-center gap-1 px-4 py-1.5 rounded-lg border border-teal-500 h-8 cursor-pointer hover:bg-teal-50 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md mr-3 mb-3">

        <img width="16" height="16" src="/images/preview.png" alt="Preview" />
        <div className="text-xs text-teal-500 font-medium">Preview</div>
      </div>
    </div>
  </div>
</div>
</div>

{/* === card 3 === */}
{/* === Each Card Wrapper === */}
<div className="flex flex-col w-full rounded-3xl shadow bg-transparent p-0 hover:shadow-lg transition-shadow duration-200">

{/* === The Main Card === */}
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
  <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-around h-full mt-6 sm:mt-4 relative gap-2 sm:gap-0">
 
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

    {/* NFC Icons */}
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
{/* === BELOW THE CARD SECTION === */}
<div className="flex flex-col justify-start items-start gap-2.5 w-full mt-3">

  
  {/* Department & Access Level */}
  <div className="flex justify-center items-center rounded-lg w-full h-16 bg-gray-50">
    <div className="flex flex-row justify-between items-center w-full px-4">
      <div className="flex flex-col justify-start items-center gap-0.5">
        <div className="text-sm text-neutral-900 font-semibold">{role}</div>
        <div className="text-xs text-gray-500 font-medium">{department}</div>
      </div>
      <div className="flex flex-col justify-center items-center gap-0.5">
        <div className="text-sm text-neutral-900 font-semibold">Standard</div>
        <div className="text-xs text-gray-500 font-medium">Access Level</div>
      </div>
    </div>
  </div>

  {/* Expiry + Actions */}
  <div className="flex flex-col justify-start items-start gap-4 w-full">
    <div className="flex flex-row justify-start items-center gap-2">
      <img width="16.3" height="16.3" src="/images/expiry.png" alt="Expiry icon" />
      <div className="text-sm text-gray-600 font-medium">Expires: {validThru}</div>
    </div>

    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex flex-row justify-start items-center gap-4">
        <img width="18.5" height="18.5" src="/images/pencil.png" alt="Edit" className="cursor-pointer hover:bg-gray-100 p-1 rounded transition" />
        <img width="17.3" height="17.3" src="/images/download.png" alt="Download" className="cursor-pointer hover:bg-gray-100 p-1 rounded transition" />
        <img width="16" height="18.5" src="/images/trash.png" alt="Delete" className="cursor-pointer hover:bg-gray-100 p-1 rounded transition" />
      </div>

      <div className="flex flex-row justify-center items-center gap-1 px-4 py-1.5 rounded-lg border border-teal-500 h-8 cursor-pointer hover:bg-teal-50 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md mr-3 mb-3">

        <img width="16" height="16" src="/images/preview.png" alt="Preview" />
        <div className="text-xs text-teal-500 font-medium">Preview</div>
      </div>
    </div>
  </div>
</div>
</div>


{/* === card 4 === */}
{/* === Each Card Wrapper === */}
<div className="flex flex-col w-full rounded-3xl shadow bg-transparent p-0 hover:shadow-lg transition-shadow duration-200">

{/* === The Main Card === */}
<div className="relative flex flex-col sm:flex-row items-stretch justify-between p-3 sm:p-4 rounded-xl shadow-lg bg-[#0B1E35] text-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl overflow-hidden min-h-[120px] max-h-[180px] w-full">
  
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
      <h3 className="font-semibold italic text-[14px] sm:text-[12px] truncate max-w-[100px] sm:max-w-[120px]">ID:{staffId}</h3>

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
    {/* NFC Icons */}
    <div className="flex sm:flex-col items-center justify-center gap-2 sm:gap-1">
      
      <div className="bg-white rounded-md p-[2px] flex items-center justify-center shadow-md w-16 h-16 border border-gray-200">
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
      {/* NFC Icons */}
    <div className="flex sm:flex-col items-center justify-center gap-2 sm:gap-1 mt-2">
      <div className="flex items-center justify-center w-6 h-6 rounded-full border border-blue-400 bg-[#102A49] hover:bg-blue-900 transition">
        <img
          src="/images/nfc_card.png"
          alt="NFC"
          className="w-4 h-4 object-contain animate-pulse"
        />
      </div>
      </div>
    </div>
  </div>

  {/* === name section === */}
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
    
  <h3 className="font-semibold italic text-[14px] sm:text-[12px] truncate max-w-[100px] sm:max-w-[120px]">
  {signature}
    </h3>
  </div>
</div>
{/* === BELOW THE CARD SECTION === */}
<div className="flex flex-col justify-start items-start gap-2.5 w-full mt-3">

  
  {/* Department & Access Level */}
  <div className="flex justify-center items-center rounded-lg w-full h-16 bg-gray-50">
    <div className="flex flex-row justify-between items-center w-full px-4">
      <div className="flex flex-col justify-start items-center gap-0.5">
        <div className="text-sm text-neutral-900 font-semibold">{role}</div>
        <div className="text-xs text-gray-500 font-medium">{department}</div>
      </div>
      <div className="flex flex-col justify-center items-center gap-0.5">
        <div className="text-sm text-neutral-900 font-semibold">Standard</div>
        <div className="text-xs text-gray-500 font-medium">Access Level</div>
      </div>
    </div>
  </div>

  {/* Expiry + Actions */}
  <div className="flex flex-col justify-start items-start gap-4 w-full">
    <div className="flex flex-row justify-start items-center gap-2">
      <img width="16.3" height="16.3" src="/images/expiry.png" alt="Expiry icon" />
      <div className="text-sm text-gray-600 font-medium">Expires: {validThru}</div>
    </div>

    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex flex-row justify-start items-center gap-4">
        <img width="18.5" height="18.5" src="/images/pencil.png" alt="Edit" className="cursor-pointer hover:bg-gray-100 p-1 rounded transition" />
        <img width="17.3" height="17.3" src="/images/download.png" alt="Download" className="cursor-pointer hover:bg-gray-100 p-1 rounded transition" />
        <img width="16" height="18.5" src="/images/trash.png" alt="Delete" className="cursor-pointer hover:bg-gray-100 p-1 rounded transition" />
      </div>

      <div className="flex flex-row justify-center items-center gap-1 px-4 py-1.5 rounded-lg border border-teal-500 h-8 cursor-pointer hover:bg-teal-50 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md mr-3 mb-3">

        <img width="16" height="16" src="/images/preview.png" alt="Preview" />
        <div className="text-xs text-teal-500 font-medium">Preview</div>
      </div>
    </div>
  </div>
  </div>
  </div>
</div>
            
            </div>
            
          </div>
        </div>
  );
};

export default Cards;
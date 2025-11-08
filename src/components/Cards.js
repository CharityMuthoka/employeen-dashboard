import React, {useState} from "react";
//import { QRCodeCanvas } from 'qrcode.react';
import FlippableCard from "./FlippableCard.js";


const Cards = ({ setActivePage, activePage }) => {
  const [activeTab, setActiveTab] = useState('id cards');
  
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "/images/dashboard.png", whiteIcon: "/images/whitedashboard.png" },
    { id: "task", label: "Task", icon: "/images/task.png", whiteIcon: "/images/whitetask.png" },
    { id: "leave", label: "Leave & Attendance", icon: "/images/leave.png", whiteIcon: "/images/whiteleave.png" },
    { id: "trainings", label: "Trainings", icon: "/images/training.png", whiteIcon: "/images/whitetraining.png" },
    { id: "cards", label: "My Cards", icon: "/images/cards.png", whiteIcon: "/images/whitecards.png" },
    { id: "announcements", label: "Announcements", icon: "/images/announcements.png", whiteIcon: "/images/whiteannouncements.png" },
  ];

 
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

            {/* Notifications and Avatar */}
            <div className="flex items-center gap-3 w-20">
              <div className="w-6 h-4">
                <img
                  width="21.5px"
                  height="21.5px"
                  src="/images/notification.png"
                  alt="Notification icon"
                />
              </div>
              {/*  image  */}
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

    {/*tabs switcher section */}
<div className="mt-10">
      <div className="flex rounded-lg border border-slate-100 bg-slate-50 overflow-hidden">
          {/* ID Cards Tab */}
            <div
              className={`flex items-center justify-center h-10 w-1/2 ${
                activeTab === 'id cards' ? 'bg-white' : '#c7d6db'
              }`}
              onClick={() => setActiveTab('id cards')}
              >
                <div className={`text-sm text-neutral-900 ${activeTab === 'id cards' ? 'font-semibold' : 'font-medium'}`}>
                ID Cards
                </div>
              </div>
              {/* Business cards Tab */}
              <div
              className={`flex items-center justify-center h-10 w-1/2 ${
                activeTab === 'business cards' ? 'bg-white' : '#c7d6db'
              }`}
              onClick={() => setActiveTab('business cards')}
              >
                <div className={`text-sm text-neutral-900 ${activeTab === 'business cards' ? 'font-semibold' : 'font-medium'}`}>
                  business cards
                </div>
              </div>
            </div>
          </div>

  {activeTab === 'id cards' && (
    <>

{/* two grid cards scetion */}
  {/* === Card Section Grid === */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">


  {/* === card 1 === */}
<FlippableCard
        name="Victor Emefo"
        role="Product Designer"
        department="Design"
        staffId="EMP4526"
        validThru="05/24/2026"
        profileUrl="/images/avatar_5.png"
        org="OnTap Global Workspace"
        phoneNumber="0734253627"
        signature="Signature"
        websiteUrl="https://ontapke.com"
        bgColor="#0B1E35"
      /> 
 {/* === card 2 === */}

<FlippableCard
        name="Victor Emefo"
        role="Product Designer"
        department="Design"
        staffId="EMP4526"
        validThru="05/24/2026"
        profileUrl="/images/avatar_5.png"
        org="OnTap Global Workspace"
        phoneNumber="0734253627"
        signature="Signature"
        websiteUrl="https://ontapke.com"
        bgColor="silver-gradient" 
      /> 

{/* === card 3 === */}
  <FlippableCard
        name="Victor Emefo"
        role="Product Designer"
        department="Design"
        staffId="EMP4526"
        validThru="05/24/2026"
        profileUrl="/images/avatar_5.png"
        org="OnTap Global Workspace"
        phoneNumber="0734253627"
        signature="Signature"
        websiteUrl="https://ontapke.com"
        bgColor="blue-purple-gradient"   
           /> 


  </div>

 
  <div>

</div>
  </>
)}



{activeTab === 'business cards' && (
    <>
    <div className="text-sm font-semibold text-center">business cards coming soon</div>
    </>
    )}
  </div>

  
 
            </div>
            
          </div>
        
  );
};

export default Cards;

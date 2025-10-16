import React, { useState } from "react";
import LeaveModal from "./LeaveModal.js";

const Leave = ({ setActivePage, activePage }) => {
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('leaveManagement');

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
    console.log("Leave form submitted:", formData);
    // You would typically send this data to an API
  };

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
          
          {/* Leave Header */}
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
              <div className="text-lg text-neutral-900 font-semibold">
                Leave & Attendance
              </div>
              <div className="text-sm text-gray-600 font-normal">
                Manage your leave requests and track attendance
              </div>
            </div>
            <div 
            className="flex justify-center items-center rounded-md w-[180px] h-12 bg-teal-500 cursor-pointer hover:bg-teal-600 transition-colors"
            onClick={() => setIsLeaveModalOpen(true)}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex justify-center items-center w-5 h-5">
                <img
                  width="15.4px"
                  height="15.3px"
                  src="/images/addtask.png"
                  alt="Apply Leave icon"
                />
              </div>
              <div className="text-sm text-white font-medium">
                Apply for Leave
              </div>
            </div>
          </div>
          </div>

          {/* Status Cards */}
          <div className="grid grid-cols-4 gap-4 w-full items-center">
            {/* Today's Status with Sticker */}
            <div className="relative flex items-center p-4 rounded-xl h-[120px] shadow-lg text-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl overflow-hidden">
              {/* Sticker Image as Background */}
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
                  <div className="flex items-center justify-center p-1 rounded-2xl h-8 w-8 bg-white shadow-md">
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

            {/* Hours Today Card */}
            <div className="flex flex-col justify-between p-4 rounded-xl h-[120px] shadow-lg bg-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600 font-medium">
                  Hours Today
                </div>
                <div className="flex items-center justify-center p-1 rounded-2xl h-8 w-8 bg-blue-100 shadow-sm">
                  <img
                    width="20px"
                    height="18px"
                    src="/images/payday.png"
                    alt="Payday icon"
                  />
                </div>
              </div>
              <div className="text-lg text-neutral-900 font-semibold">
                6h 45m
              </div>
            </div>

            {/* Status Card */}
            <div className="flex flex-col justify-between p-4 rounded-xl h-[120px] shadow-lg bg-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600 font-medium">
                  Status
                </div>
                <div className="flex items-center justify-center p-1 rounded-2xl h-8 w-8 bg-green-100 shadow-sm">
                  <img
                    width="20px"
                    height="18px"
                    src="/images/greenclock.png"
                    alt="Status icon"
                  />
                </div>
              </div>
              <div className="text-lg text-teal-500 font-semibold">
                Present
              </div>
            </div>

            {/* Clock Out Button */}
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center rounded-md w-[260px] h-[60px] bg-red-600 cursor-pointer hover:bg-red-700 transition-colors">
                <div className="font-inter text-sm min-w-[66px] whitespace-nowrap text-white text-opacity-100 leading-snug tracking-normal font-normal">
                  Clock out
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex rounded-lg border border-slate-100 h-10 bg-slate-50 overflow-hidden">
            <div
              className={`flex items-center justify-center h-10 w-1/2 cursor-pointer ${activeTab === 'leaveManagement' ? 'bg-white' : ''}`}
              onClick={() => setActiveTab('leaveManagement')}
            >
              <div className={`text-xs text-neutral-900 ${activeTab === 'leaveManagement' ? 'font-semibold' : 'font-medium'}`}>
                Leave Management
              </div>
            </div>
            <div
              className={`flex items-center justify-center h-10 w-1/2 cursor-pointer ${activeTab === 'leaveBalance' ? 'bg-white' : ''}`}
              onClick={() => setActiveTab('leaveBalance')}
            >
              <div className={`text-xs text-neutral-900 ${activeTab === 'leaveBalance' ? 'font-semibold' : 'font-medium'}`}>
                Leave Balance
              </div>
            </div>
          </div>

          {activeTab === 'leaveManagement' ? (
            /* Leave Requests Table */
            <div className="flex flex-col rounded-xl w-full shadow-sm bg-white overflow-hidden">
              {/* Table Header */}
              <div className="flex flex-row justify-between items-center p-4 w-full h-20 border-b border-neutral-200">
                <div className="text-lg text-neutral-900 font-medium">
                  My Leave Requests
                </div>
                <div className="flex flex-row justify-center items-center gap-2 p-2 rounded-lg border border-neutral-200 w-[75px] h-11 bg-white cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-1">
                    <div className="flex justify-center items-center h-5">
                      <img
                        width="16.3px"
                        height="16.3px"
                        src="/images/filter.png"
                        alt="Filter icon"
                      />
                    </div>
                    <div className="text-xs text-neutral-900 font-semibold">
                      Filter
                    </div>
                  </div>
                </div>
              </div>

              {/* Table Content */}
              <div className="w-full overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="p-4 text-xs text-gray-500 font-medium text-left">Type</th>
                      <th className="p-4 text-xs text-gray-500 font-medium text-left">Duration</th>
                      <th className="p-4 text-xs text-gray-500 font-medium text-left">Days</th>
                      <th className="p-4 text-xs text-gray-500 font-medium text-left">Status</th>
                      <th className="p-4 text-xs text-gray-500 font-medium text-left">Applied On</th>
                      <th className="p-4 text-xs text-gray-500 font-medium text-left">Approver</th>
                      <th className="p-4 text-xs text-gray-500 font-medium text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Row 1 - Annual Leave */}
                    <tr className="border-b border-neutral-200">
                      <td className="p-4">
                        <div className="flex justify-center items-center gap-2.5 py-1 px-5 rounded-lg h-9 bg-blue-50 min-w-[90px]">
                          <div className="text-xs text-blue-900 font-medium">
                            Annual Leave
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-xs text-gray-800 font-normal">
                          <span className="font-medium">2025-08-25</span> to 2025-09-10
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-sm text-gray-800 font-medium">
                          15
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex justify-center items-center gap-2.5 py-1 px-5 rounded-lg w-[90px] h-9 bg-yellow-100">
                          <div className="flex items-center gap-1">
                            <div className="flex justify-center items-center w-4 h-4">
                              <img
                                width="16"
                                height="16"
                                src="/images/pending.png"
                                alt="Pending icon"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div className="text-xs text-yellow-800 font-medium">
                              Pending
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-xs text-gray-800 font-medium">
                          2025-08-10
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-xs text-gray-800 font-medium">
                          HR
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <div className="flex justify-center items-center gap-2.5 py-1 px-5 rounded-lg border border-neutral-200 h-9 min-w-[90px] cursor-pointer hover:bg-gray-50 transition-colors">
                            <div className="text-xs text-gray-800 font-medium">
                              View
                            </div>
                          </div>
                          <div className="flex justify-center items-center gap-2.5 py-1 px-5 rounded-lg border border-neutral-200 h-9 min-w-[90px] cursor-pointer hover:bg-gray-50 transition-colors">
                            <div className="text-xs text-red-600 font-medium">
                              Cancel
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Row 2 - Sick Leave */}
                    <tr className="border-b border-neutral-200">
                      <td className="p-4">
                        <div className="flex justify-center items-center gap-2.5 py-1 px-5 rounded-lg h-9 bg-orange-50 min-w-[90px]">
                          <div className="text-xs text-yellow-800 font-medium">
                            Sick Leave
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-xs text-gray-800 font-normal">
                          <span className="font-medium">2025-08-25</span> to 2025-09-10
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-sm text-gray-800 font-medium">
                          2
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex justify-center items-center gap-2.5 py-1 px-5 rounded-lg w-[90px] h-9 bg-green-100">
                          <div className="flex items-center gap-1">
                            <div className="flex justify-center items-center w-4 h-4">
                              <img
                                width="16"
                                height="16"
                                src="/images/approved.png"
                                alt="Approved icon"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div className="text-xs text-green-800 font-medium">
                              Approved
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-xs text-gray-800 font-medium">
                          2025-08-10
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-xs text-gray-800 font-medium">
                          HR
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <div className="flex justify-center items-center gap-2.5 py-1 px-5 rounded-lg border border-neutral-200 h-9 min-w-[90px] cursor-pointer hover:bg-gray-50 transition-colors">
                            <div className="text-xs text-gray-800 font-medium">
                              View
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Row 3 - Personal Leave */}
                    <tr>
                      <td className="p-4">
                        <div className="flex justify-center items-center gap-2.5 py-1 px-5 rounded-lg h-9 bg-purple-50 min-w-[90px]">
                          <div className="text-xs text-purple-900 font-medium">
                            Personal Leave
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-xs text-gray-800 font-normal">
                          <span className="font-medium">2025-08-25</span> to 2025-09-10
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-sm text-gray-800 font-medium">
                          2
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex justify-center items-center gap-2.5 py-1 px-5 rounded-lg w-[90px] h-9 bg-red-100">
                          <div className="flex items-center gap-1">
                            <div className="flex justify-center items-center w-4 h-4">
                              <img
                                width="16"
                                height="16"
                                src="/images/denied.png"
                                alt="Denied icon"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div className="text-xs text-orange-800 font-medium">
                              Denied
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-xs text-gray-800 font-medium">
                          2025-08-10
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-xs text-gray-800 font-medium">
                          HR
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <div className="flex justify-center items-center gap-2.5 py-1 px-5 rounded-lg border border-neutral-200 h-9 min-w-[90px] cursor-pointer hover:bg-gray-50 transition-colors">
                            <div className="text-xs text-gray-800 font-medium">
                              View
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* Leave Balance Content */
            <div className="flex flex-col justify-between items-center gap-6 w-full">
              {/* Leave Balance Cards */}
<div className="flex flex-row justify-between items-center gap-3 w-full h-[123px]">
  <div className="flex flex-col justify-between p-4 rounded-xl w-64 h-[121px] shadow-lg bg-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
    <div className="flex justify-between items-center">
      <div className="text-sm text-gray-600 font-medium">
        Annual Leave
      </div>
      <div className="flex flex-col justify-start items-start gap-2.5 p-1 rounded border border-neutral-200 h-5 overflow-hidden">
        <div className="flex flex-row justify-center items-center gap-1 h-4">
          <div className="text-xs text-neutral-900 font-semibold">
            8/25
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-start items-start gap-1.5 h-[53px] w-full">
      <div className="flex flex-row justify-between items-center w-full h-4">
        <div className="text-xs text-gray-600 font-medium">
          Used
        </div>
        <div className="text-xs text-neutral-900 font-medium">
          8 days
        </div>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div className="h-full bg-blue-500 rounded-full" style={{ width: '32%' }}></div>
      </div>
      <div className="flex flex-row justify-between items-center w-full h-3.5">
        <div className="text-xs text-gray-600 font-medium">
          Remaining
        </div>
        <div className="text-xs text-teal-500 font-medium">
          17 days
        </div>
      </div>
    </div>
  </div>

  <div className="flex flex-col justify-between p-4 rounded-xl w-64 h-[121px] shadow-lg bg-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
    <div className="flex justify-between items-center">
      <div className="text-sm text-gray-600 font-medium">
        Sick Leave
      </div>
      <div className="flex flex-col justify-start items-start gap-2.5 p-1 rounded border border-neutral-200 h-5 overflow-hidden">
        <div className="flex flex-row justify-center items-center gap-1 h-4">
          <div className="text-xs text-neutral-900 font-semibold">
            3/10
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-start items-start gap-1.5 h-[53px] w-full">
      <div className="flex flex-row justify-between items-center w-full h-4">
        <div className="text-xs text-gray-600 font-medium">
          Used
        </div>
        <div className="text-xs text-neutral-900 font-medium">
          3 days
        </div>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div className="h-full bg-green-500 rounded-full" style={{ width: '30%' }}></div>
      </div>
      <div className="flex flex-row justify-between items-center w-full h-3.5">
        <div className="text-xs text-gray-600 font-medium">
          Remaining
        </div>
        <div className="text-xs text-teal-500 font-medium">
          7 days
        </div>
      </div>
    </div>
  </div>

  <div className="flex flex-col justify-between p-4 rounded-xl w-64 h-[121px] shadow-lg bg-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
    <div className="flex justify-between items-center">
      <div className="text-sm text-gray-600 font-medium">
        Personal Leave
      </div>
      <div className="flex flex-col justify-start items-start gap-2.5 p-1 rounded border border-neutral-200 h-5 overflow-hidden">
        <div className="flex flex-row justify-center items-center gap-1 w-8 h-4">
          <div className="text-xs text-neutral-900 font-semibold">
            2/5
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-start items-start gap-1.5 h-[53px] w-full">
      <div className="flex flex-row justify-between items-center w-full h-4">
        <div className="text-xs text-gray-600 font-medium">
          Used
        </div>
        <div className="text-xs text-neutral-900 font-medium">
          2 days
        </div>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div className="h-full bg-purple-500 rounded-full" style={{ width: '40%' }}></div>
      </div>
      <div className="flex flex-row justify-between items-center w-full h-3.5">
        <div className="text-xs text-gray-600 font-medium">
          Remaining
        </div>
        <div className="text-xs text-teal-500 font-medium">
          3 days
        </div>
      </div>
    </div>
  </div>

  <div className="flex flex-col justify-between p-4 rounded-xl w-64 h-[121px] shadow-lg bg-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
    <div className="flex justify-between items-center">
      <div className="text-sm text-gray-600 font-medium">
        Maternity Leave
      </div>
      <div className="flex flex-col justify-start items-start gap-2.5 p-1 rounded border border-neutral-200 h-5 overflow-hidden">
        <div className="flex flex-row justify-center items-center gap-1 h-4">
          <div className="text-xs text-neutral-900 font-semibold">
            0/90
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-start items-start gap-1.5 h-[53px] w-full">
      <div className="flex flex-row justify-between items-center w-full h-4">
        <div className="text-xs text-gray-600 font-medium">
          Used
        </div>
        <div className="text-xs text-neutral-900 font-medium">
          0 days
        </div>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div className="h-full bg-pink-500 rounded-full" style={{ width: '0%' }}></div>
      </div>
      <div className="flex flex-row justify-between items-center w-full h-3.5">
        <div className="text-xs text-gray-600 font-medium">
          Remaining
        </div>
        <div className="text-xs text-teal-500 font-medium">
          90 days
        </div>
      </div>
    </div>
  </div>
</div>

              {/* Leave Policy Section */}
              <div className="flex flex-col justify-start items-start gap-6 h-[334px] w-full">
                <div className="flex flex-row justify-start items-center gap-4 py-4 h-14 w-full">
                  <div className="text-lg text-neutral-900 font-medium">
                    Leave Policy
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-4 h-64 w-full">
                  <div className="flex justify-start items-center p-3 rounded-lg w-full h-[74px] bg-blue-50">
                    <div className="flex flex-col justify-start items-start gap-2 w-full">
                      <div className="text-base text-blue-900 font-medium">
                        Annual leave
                      </div>
                      <div className="text-xs text-blue-700 font-medium">
                        You are entitled to 25 days of annual leave per year. Unused leave
                        can be carried forward to the next year (maximum 5 days).
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start items-center p-3 rounded-lg w-full h-[74px] bg-orange-50">
                    <div className="flex flex-col justify-start items-start gap-2 w-full">
                      <div className="text-base text-yellow-800 font-medium">
                        Sick leave
                      </div>
                      <div className="text-xs text-orange-700 font-medium">
                        You can take up to 10 days of sick leave per year. Medical
                        certificate required for leaves longer than 2 consecutive days.
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start items-center p-3 rounded-lg w-full h-[74px] bg-purple-50">
                    <div className="flex flex-col justify-start items-start gap-2 w-full">
                      <div className="text-base text-purple-900 font-medium">
                        Personal Leave
                      </div>
                      <div className="text-xs text-purple-700 font-medium">
                        You are entitled to 5 days of personal leave per year for urgent
                        personal matters that cannot be scheduled outside work hours.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Leave Modal */}
      <LeaveModal
        isOpen={isLeaveModalOpen}
        onClose={() => setIsLeaveModalOpen(false)}
        onSubmit={handleLeaveSubmit}
      />
    </div>
  );
};

export default Leave;
import React from "react";

const Support = ({ setActivePage, activePage }) => {
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

  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="flex flex-col w-[272px] h-full border-r border-slate-100 bg-white shrink-0">
        {/* Logo */}
        <div className="flex flex-col items-center gap-2 p-2 h-24">
          <div className="flex items-end p-3 w-64 h-20">
            <img src="/images/logo.png" alt="Logo" width="180px" height="52.2px" />
          </div>
        </div>

        {/* Search */}
        <div className="flex flex-col items-start gap-2 p-4 h-16">
          <div className="flex items-center gap-2 p-2 rounded-lg border border-slate-100 h-9 w-[240px] bg-white">
            <img width="16.5px" height="16.5px" src="/images/search.png" alt="Search icon" />
            <div className="text-base text-gray-400 font-normal flex-1">Search</div>
            <div className="flex items-center p-1 h-5 rounded shadow-sm bg-gray-200">
              <img width="15px" height="15px" src="/images/command.png" alt="Command icon" />
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="flex flex-col items-start gap-2 mt-0.5 h-[calc(100%-200px)] relative pl-4 overflow-y-auto">
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

          <div className="flex items-center gap-2 p-1 px-3 h-7 w-[240px]">
            <div className="text-sm text-neutral-900/60 font-medium">Main Menu</div>
          </div>

          <div className="flex flex-col items-start gap-2 w-60">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className={`flex items-center gap-2 p-2 px-3 rounded-lg h-9 w-[240px] relative ${
                  activePage === item.id ? "bg-teal-500 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setActivePage(item.id)}
              >
                <img
                  width="20px"
                  height="20px"
                  src={activePage === item.id ? item.whiteIcon : item.icon}
                  alt={`${item.label} icon`}
                />
                <div className="text-base font-normal">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Logout */}
        <div className="mt-auto w-full border-t border-slate-200">
          <div className="flex items-center p-3 pl-8 cursor-pointer">
            <img width="30px" height="30px" src="/images/logout.png" alt="Logout icon" />
            <span className="ml-2 text-lg text-teal-500 font-normal">Logout</span>
          </div>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col h-full overflow-y-auto overflow-x-hidden bg-white">
        {/* Header */}
        <div className="fixed top-0 left-[272px] flex justify-between items-center p-3 w-[calc(100vw-272px)] border-b border-gray-200 bg-white z-50">
          {/* Greeting */}
          <div className="flex flex-col gap-1 w-96">
            <div className="text-[22px] text-neutral-900 font-semibold">Good Morning Victor! 👋</div>
            <div className="text-sm text-neutral-500 font-normal">Product Designer · Design Team</div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            {/* Date */}
            <div
              className="flex items-center gap-2 p-2 pl-3 rounded-lg border border-neutral-200 h-8 min-w-[88px] cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => alert(`Today's date is ${new Date().toDateString()}`)}
            >
              <img width="13px" height="14.3px" src="/images/calendar.png" alt="Calendar icon" />
              <div className="text-xs text-neutral-900 font-semibold">
                {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              </div>
            </div>

            {/* Notifications + Avatar */}
            <div className="flex items-center gap-3">
              <img width="21.5px" height="21.5px" src="/images/notification.png" alt="Notification icon" />
              <div className="w-px h-6 bg-gray-300"></div>
              <img className="rounded-full border-2" src="/images/avatar.png" alt="Profile" width="40px" height="40px" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 px-8 pt-[45px] pb-8 max-w-[calc(100vw-272px)] mt-[62px]">
          {/* Support Header */}
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-1.5">
              <div className="text-lg text-neutral-900 font-semibold">Help & Support</div>
              <div className="text-sm text-gray-600">Get help and support for your questions</div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-teal-500 cursor-pointer hover:bg-teal-600 transition-colors">
              <img width="18px" height="18px" src="/images/ticket.png" alt="Create Ticket" />
              <div className="text-sm text-white font-medium">Create Ticket</div>
            </div>
          </div>

          {/* Tabs */}
<div className="flex rounded-lg border border-slate-100 bg-slate-50 overflow-hidden">
  <div className="flex-1 flex items-center justify-center h-10 bg-white border-r border-slate-100 cursor-pointer">
    <div className="text-xs text-neutral-900 font-semibold tracking-wide">My Tickets</div>
  </div>
  <div className="flex-1 flex items-center justify-center h-10 cursor-pointer hover:bg-gray-50">
    <div className="text-xs text-neutral-900 font-medium tracking-wide">Resources</div>
  </div>
  <div className="flex-1 flex items-center justify-center h-10 cursor-pointer hover:bg-gray-50">
    <div className="text-xs text-neutral-900 font-medium tracking-wide">Contact Info</div>
  </div>
</div>


          {/* Support Tickets */}
          <div className="flex flex-col gap-4">
            <div className="text-lg text-neutral-900 font-medium">My Support Tickets</div>

            {/* Ticket 1 */}
            <div className="flex flex-col p-4 rounded-xl shadow-sm bg-white hover:shadow-md transition-shadow">
              {/* Top Row */}
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-4">
                  <div className="text-sm text-neutral-900 font-semibold">Request for additional vacation days</div>
                  <div className="px-4 py-1 rounded-lg border border-neutral-200 text-xs text-gray-800 font-medium">TICK-089</div>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 rounded-md bg-blue-100 text-[10px] text-blue-800 font-medium">Open</span>
                  <span className="px-2 py-1 rounded-md bg-yellow-100 text-[10px] text-yellow-800 font-medium">Medium</span>
                </div>
              </div>
              {/* Description */}
              <div className="text-xs text-gray-600 mb-3">
                Example ticket description goes here. Add more details if needed...
              </div>
              {/* Bottom Row */}
              <div className="flex justify-between items-end text-xs text-gray-600 font-medium">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-8">
                    <div>Category: HR</div>
                    <div>Assigned to: HR Team</div>
                  </div>
                  <div>Created: Aug 26, 2025</div>
                </div>
                <div>Last update: Aug 9, 2024</div>
              </div>
            </div>

            {/* Ticket 2 */}
            <div className="flex flex-col p-4 rounded-xl shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-4">
                  <div className="text-sm text-neutral-900 font-semibold">Unable to access payslip portal</div>
                  <div className="px-4 py-1 rounded-lg border border-neutral-200 text-xs text-gray-800 font-medium">TICK-090</div>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 rounded-md bg-yellow-100 text-[10px] text-yellow-800 font-medium">In Progress</span>
                  <span className="px-2 py-1 rounded-md bg-red-100 text-[10px] text-red-800 font-medium">High</span>
                </div>
              </div>
              <div className="text-xs text-gray-600 mb-3">
                Example ticket description goes here. Add more details if needed...
              </div>
              <div className="flex justify-between items-end text-xs text-gray-600 font-medium">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-8">
                    <div>Category: Technical</div>
                    <div>Assigned to: IT Support</div>
                  </div>
                  <div>Created: Aug 26, 2025</div>
                </div>
                <div>Last update: Aug 9, 2024</div>
              </div>
            </div>

            {/* Ticket 3 */}
            <div className="flex flex-col p-4 rounded-xl shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-4">
                  <div className="text-sm text-neutral-900 font-semibold">VPN access issue resolved</div>
                  <div className="px-4 py-1 rounded-lg border border-neutral-200 text-xs text-gray-800 font-medium">TICK-091</div>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 rounded-md bg-green-100 text-[10px] text-green-800 font-medium">Resolved</span>
                  <span className="px-2 py-1 rounded-md bg-green-100 text-[10px] text-green-800 font-medium">Low</span>
                </div>
              </div>
              <div className="text-xs text-gray-600 mb-3">
                Example ticket description goes here. Add more details if needed...
              </div>
              <div className="flex justify-between items-end text-xs text-gray-600 font-medium">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-8">
                    <div>Category: Technical</div>
                    <div>Assigned to: IT Support</div>
                  </div>
                  <div>Created: Aug 26, 2025</div>
                </div>
                <div>Last update: Aug 9, 2024</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Support
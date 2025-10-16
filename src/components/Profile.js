import React from "react";

const Profile = ({ setActivePage, activePage }) => {
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
          {/* Profile Header */}
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col justify-start items-start gap-1.5">
              <div className="text-lg text-neutral-900 font-semibold">
                My Profile
              </div>
              <div className="text-sm text-gray-600 font-normal">
                Manage your personal information and preferences
              </div>
            </div>
            <div className="flex justify-center items-center rounded-md w-[140px] h-12 bg-teal-500 cursor-pointer hover:bg-teal-600 transition-colors">
              <div className="flex flex-row justify-center items-center gap-2">
                <div className="flex justify-center items-center h-5">
                  <img
                    width="18.6px"
                    height="18.6px"
                    src="/images/editprofile.png"
                    alt="Edit Profile icon"
                  />
                </div>
                <div className="text-sm text-white font-medium">
                  Edit Profile
                </div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="flex flex-row gap-6 w-full">
            {/* Profile Sidebar */}
            <div className="flex flex-col justify-start items-center rounded-xl w-[300px] shadow-sm bg-white p-6">
              <div className="flex flex-col justify-start items-center gap-8 w-full">
                <div className="flex flex-col justify-start items-center gap-4 w-full">
                  <div className="relative w-[140px] h-[140px]">
                    {/* Profile Image */}
                    <img
                      className="rounded-full w-full h-full object-cover border-4 border-white shadow-md"
                      src="/images/profilepic.png"
                      alt="Profile"
                    />
                    {/* Camera Icon Overlay */}
                    <div className="absolute bottom-0 right-0 flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md border border-gray-200">
                      <img
                        className="w-7 h-7 object-contain"
                        src="/images/camera.png"
                        alt="Camera icon"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-center gap-1 text-center">
                    <div className="text-base text-neutral-900 font-semibold">
                      Victor Emefo
                    </div>
                    <div className="text-sm text-gray-600 font-normal">
                      Junior Product Designer
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-3 w-full">
                  <div className="flex flex-row justify-start items-center gap-2 w-full">
                    <div className="flex justify-center items-center w-5 h-5">
                      <img
                        width="19.3px"
                        height="15.1px"
                        src="/images/email.png"
                        alt="Email icon"
                      />
                    </div>
                    <div className="text-sm text-gray-600 font-normal">
                      victor.emefo@company.com
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-2 w-full">
                    <div className="flex justify-center items-center w-5 h-5">
                      <img
                        width="17.9px"
                        height="17.9px"
                        src="/images/phone.png"
                        alt="Phone icon"
                      />
                    </div>
                    <div className="text-sm text-gray-600 font-normal">
                      +234 7099767789
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-2 w-full">
                    <div className="flex justify-center items-center w-5 h-5">
                      <img
                        width="17.9px"
                        height="17.9px"
                        src="/images/calendar2.png"
                        alt="Calendar icon"
                      />
                    </div>
                    <div className="text-sm text-gray-600 font-normal">
                      Started 2023-08-13
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="flex flex-col rounded-xl w-full shadow-sm bg-white">
              {/* Tabs */}
              <div className="flex flex-row justify-center items-center border-b border-slate-100 h-10 bg-slate-50">
                <div className="flex flex-row justify-center items-center h-10 bg-white min-w-[33%] cursor-pointer border-r border-slate-100">
                  <div className="text-xs text-neutral-900 font-semibold tracking-wide">
                    Personal Info
                  </div>
                </div>
                <div className="flex flex-row justify-center items-center h-10 min-w-[33%] cursor-pointer hover:bg-gray-50 transition-colors border-r border-slate-100">
                  <div className="text-xs text-neutral-900 font-medium tracking-wide">
                    Emergency Info
                  </div>
                </div>
                <div className="flex flex-row justify-center items-center h-10 min-w-[34%] cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="text-xs text-neutral-900 font-medium tracking-wide">
                    Preferences
                  </div>
                </div>
              </div>

              {/* Personal Info Content */}
              <div className="flex flex-col justify-start items-start gap-6 p-6">
                <div className="flex flex-row justify-start items-center gap-2">
                  <div className="flex justify-center items-center w-6 h-6">
                    <img
                      width="18px"
                      height="20px"
                      src="/images/personalinfo.png"
                      alt="Personal Info icon"
                    />
                  </div>
                  <div className="text-base text-neutral-900 font-medium">
                    Personal Info
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 w-full">
                  {/* Full Name */}
                  <div className="flex flex-col justify-start items-start gap-2">
                    <div className="text-sm text-gray-600 font-medium">
                      Full Name <span className="text-red-500">*</span>
                    </div>
                    <div className="flex justify-start items-center pl-4 rounded-lg w-full h-12 bg-gray-50">
                      <div className="text-sm text-gray-600 font-normal">
                        Emefo Victor Ebubechukwu
                      </div>
                    </div>
                  </div>

                  {/* Gender */}
                  <div className="flex flex-col justify-start items-start gap-2">
                    <div className="text-sm text-gray-600 font-medium">
                      Gender <span className="text-red-500">*</span>
                    </div>
                    <div className="flex justify-start items-center pl-4 rounded-lg w-full h-12 bg-gray-50">
                      <div className="text-sm text-gray-600 font-normal">
                        Male
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col justify-start items-start gap-2 col-span-2">
                    <div className="text-sm text-gray-600 font-medium">
                      Email <span className="text-red-500">*</span>
                    </div>
                    <div className="flex justify-start items-center pl-4 rounded-lg w-full h-12 bg-gray-50">
                      <div className="text-sm text-gray-600 font-normal">
                        victor.emefo@company.com
                      </div>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col justify-start items-start gap-2 col-span-2">
                    <div className="text-sm text-gray-600 font-medium">
                      Phone Number <span className="text-red-500">*</span>
                    </div>
                    <div className="flex justify-start items-center pl-4 rounded-lg w-full h-12 bg-gray-50">
                      <div className="text-sm text-gray-600 font-normal">
                        +234 7099767789
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex flex-col justify-start items-start gap-2 col-span-2">
                    <div className="text-sm text-gray-600 font-medium">
                      Address <span className="text-red-500">*</span>
                    </div>
                    <div className="flex justify-start items-center pl-4 rounded-lg w-full h-12 bg-gray-50">
                      <div className="text-sm text-gray-600 font-normal">
                        123 Main St, San Francisco, CA 94102
                      </div>
                    </div>
                  </div>

                  {/* Department */}
                  <div className="flex flex-col justify-start items-start gap-2">
                    <div className="text-sm text-gray-600 font-medium">
                      Department <span className="text-red-500">*</span>
                    </div>
                    <div className="flex justify-start items-center pl-4 rounded-lg w-full h-12 bg-gray-50">
                      <div className="text-sm text-gray-600 font-normal">
                        Design Team
                      </div>
                    </div>
                  </div>

                  {/* Position */}
                  <div className="flex flex-col justify-start items-start gap-2">
                    <div className="text-sm text-gray-600 font-medium">
                      Position <span className="text-red-500">*</span>
                    </div>
                    <div className="flex justify-start items-center pl-4 rounded-lg w-full h-12 bg-gray-50">
                      <div className="text-sm text-gray-600 font-normal">
                        Head of design
                      </div>
                    </div>
                  </div>

                  {/* Employee ID */}
                  <div className="flex flex-col justify-start items-start gap-2">
                    <div className="text-sm text-gray-600 font-medium">
                      Employee ID <span className="text-red-500">*</span>
                    </div>
                    <div className="flex justify-start items-center pl-4 rounded-lg w-full h-12 bg-gray-50">
                      <div className="text-sm text-gray-600 font-normal">
                        EMP0035
                      </div>
                    </div>
                  </div>

                  {/* Start Date */}
                  <div className="flex flex-col justify-start items-start gap-2">
                    <div className="text-sm text-gray-600 font-medium">
                      Start Date <span className="text-red-500">*</span>
                    </div>
                    <div className="flex justify-start items-center pl-4 rounded-lg w-full h-12 bg-gray-50">
                      <div className="text-sm text-gray-600 font-normal">
                        2023-08-13
                      </div>
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

export default Profile;
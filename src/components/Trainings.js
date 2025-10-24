import React from "react";

const Trainings = ({ setActivePage, activePage }) => {
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
          {/* Training Header */}
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col justify-start items-start gap-1.5 w-96">
              <div className="text-lg text-neutral-900 font-semibold">
                Training & Development
              </div>
              <div className="text-sm text-gray-600 font-normal">
                Access training materials and track your progress
              </div>
            </div>
          </div>

          {/* Stats Cards */}
<div className="grid grid-cols-4 gap-4 w-full">
  {/* Overall Progress Card */}
<div className="flex flex-col justify-between p-4 rounded-xl h-[120px] shadow-lg bg-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
  <div className="flex justify-between items-center">
    <div className="flex flex-col">
      <div className="text-sm text-gray-600 font-medium">
        Overall Progress
      </div>
      <div className="mt-2 text-lg text-neutral-900 font-semibold">
        72%
      </div>
      <div className="mt-1 text-xs text-gray-600 font-normal">
        3 active courses
      </div>
    </div>
    <div className="flex items-center justify-center p-1 rounded-2xl h-8 w-8 bg-teal-100 shadow-sm">
      <img
        className="h-5 w-5 object-contain"
        src="/images/progress.png"
        alt="Overall Progress icon"
      />
    </div>
  </div>
</div>


  {/* Completed Card */}
<div className="flex flex-col justify-between p-4 rounded-xl h-[120px] shadow-lg bg-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
  <div className="flex justify-between items-center">
    <div className="flex flex-col">
      <div className="text-sm text-gray-600 font-medium">
        Completed
      </div>
      <div className="mt-2 text-lg text-neutral-900 font-semibold">
        1
      </div>
      <div className="mt-1 text-xs text-gray-600 font-normal">
        This month
      </div>
    </div>
    <div className="flex items-center justify-center p-1 rounded-2xl h-8 w-8 bg-green-400 shadow-sm">
      <img
        className="h-5 w-5 object-contain"
        src="/images/check.png"
        alt="Completed icon"
      />
    </div>
  </div>
</div>

{/* Learning Hours Card */}
<div className="flex flex-col justify-between p-4 rounded-xl h-[120px] shadow-lg bg-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
  <div className="flex justify-between items-center">
    <div className="flex flex-col">
      <div className="text-sm text-gray-600 font-medium">
        Learning Hours
      </div>
      <div className="mt-2 text-lg text-neutral-900 font-semibold">
        33h
      </div>
      <div className="mt-1 text-xs text-gray-600 font-normal">
        This year
      </div>
    </div>
    <div className="flex items-center justify-center p-1 rounded-2xl h-8 w-8 bg-blue-100 shadow-sm">
      <img
        className="h-5 w-5 object-contain"
        src="/images/learninghours.png"
        alt="Learning Hours icon"
      />
    </div>
  </div>
</div>

{/* Achievements Card */}
<div className="flex flex-col justify-between p-4 rounded-xl h-[120px] shadow-lg bg-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
  <div className="flex justify-between items-center">
    <div className="flex flex-col">
      <div className="text-sm text-gray-600 font-medium">
        Achievements
      </div>
      <div className="mt-2 text-lg text-neutral-900 font-semibold">
        3
      </div>
      <div className="mt-1 text-xs text-gray-600 font-normal">
        Badges earned
      </div>
    </div>
    <div className="flex items-center justify-center p-1 rounded-2xl h-8 w-8 bg-violet-100 shadow-sm">
      <img
        className="h-5 w-5 object-contain"
        src="/images/achievements.png"
        alt="Achievements icon"
      />
    </div>
  </div>
</div>

</div>


          {/* Tabs */}
          <div className="flex flex-row justify-center items-center rounded-lg border border-slate-100 h-10 bg-slate-50 overflow-hidden">
            <div className="flex flex-row justify-center items-center h-10 bg-white min-w-[50%] cursor-pointer border-r border-slate-100">
              <div className="text-xs text-neutral-900 font-semibold tracking-wide">
                My Courses
              </div>
            </div>
            <div className="flex flex-row justify-center items-center h-10 min-w-[50%] cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="text-xs text-neutral-900 font-medium tracking-wide">
                Course Catalog
              </div>
            </div>
          </div>

          {/* Current Training Section */}
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="flex flex-row justify-start items-center h-14">
              <div className="text-lg text-neutral-900 font-semibold">
                Current Training
              </div>
            </div>

            {/* Course List */}
<div className="flex flex-col justify-start items-start gap-4 w-full">
  {/* Course 1 */}
  <div className="flex flex-col justify-center items-center rounded-lg w-full shadow-sm bg-white p-6">
    <div className="flex flex-row justify-between items-start w-full mb-4">
      <div className="flex flex-col justify-start items-start gap-2">
        <div className="text-sm text-neutral-900 font-semibold">
          Leadership Skills Development
        </div>
        <div className="flex flex-row justify-start items-center gap-4">
          <div className="flex flex-row justify-center items-center gap-1">
            <div className="flex justify-center items-center h-3.5">
              <img
                width="11.5px"
                height="12.8px"
                src="/images/instructor.png"
                alt="Instructor icon"
              />
            </div>
            <div className="text-[12px] text-gray-600 font-medium">
              Sarah Chen
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-1">
            <div className="flex justify-center items-center h-3.5">
              <img
                width="12.2px"
                height="12.2px"
                src="/images/duration.png"
                alt="Duration icon"
              />
            </div>
            <div className="text-[12px] text-gray-600 font-medium">
              4 hours
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-1">
            <img
              width="15px"
              height="15px"
              src="/images/rating.png"
              alt="Rating icon"
            />
            <div className="text-[12px] text-gray-600 font-medium">
              4.5
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center rounded w-28 h-9 bg-teal-500 cursor-pointer hover:bg-teal-600 transition-colors">
        <div className="flex flex-row justify-center items-center gap-1">
          <div className="flex justify-center items-center w-4 h-4">
            <img
              width="14px"
              height="15px"
              src="/images/continue.png"
              alt="Continue icon"
            />
          </div>
          <div className="text-xs text-white font-medium">
            Continue
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-start items-start gap-2 w-full">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="text-xs text-gray-600 font-medium">
          Progress
        </div>
        <div className="text-xs text-neutral-900 font-medium">
          1/4 Modules
        </div>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div className="h-2 bg-teal-500 rounded-full" style={{ width: '25%' }}></div>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="text-xs text-gray-600 font-medium">
          Next: Effective Communication
        </div>
        <div className="text-xs text-teal-500 font-normal">
          Due 30 Aug 2025
        </div>
      </div>
    </div>
  </div>

  {/* Course 2 */}
  <div className="flex flex-col justify-center items-center rounded-lg w-full shadow-sm bg-white p-6">
    <div className="flex flex-row justify-between items-start w-full mb-4">
      <div className="flex flex-col justify-start items-start gap-2">
        <div className="text-sm text-neutral-900 font-semibold">
          Effective Communication
        </div>
        <div className="flex flex-row justify-start items-center gap-4">
          <div className="flex flex-row justify-center items-center gap-1">
            <div className="flex justify-center items-center h-3.5">
              <img
                width="11.5px"
                height="12.8px"
                src="/images/instructor.png"
                alt="Instructor icon"
              />
            </div>
            <div className="text-[12px] text-gray-600 font-medium">
              Sarah Chen
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-1">
            <div className="flex justify-center items-center h-3.5">
              <img
                width="12.2px"
                height="12.2px"
                src="/images/duration.png"
                alt="Duration icon"
              />
            </div>
            <div className="text-[12px] text-gray-600 font-medium">
              4 hours
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-1">
            <img
              width="15px"
              height="15px"
              src="/images/rating.png"
              alt="Rating icon"
            />
            <div className="text-[12px] text-gray-600 font-medium">
              4.5
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center rounded w-28 h-9 bg-teal-500 cursor-pointer hover:bg-teal-600 transition-colors">
        <div className="flex flex-row justify-center items-center gap-1">
          <div className="flex justify-center items-center w-4 h-4">
            <img
              width="14px"
              height="15px"
              src="/images/continue.png"
              alt="Continue icon"
            />
          </div>
          <div className="text-xs text-white font-medium">
            Continue
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-start items-start gap-2 w-full">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="text-xs text-gray-600 font-medium">
          Progress
        </div>
        <div className="text-xs text-neutral-900 font-medium">
          6/6 Modules
        </div>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div className="h-2 bg-teal-500 rounded-full" style={{ width: '100%' }}></div>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="text-xs text-gray-600 font-medium">
          Next: Effective Communication
        </div>
        <div className="text-xs text-teal-500 font-normal">
          Completed
        </div>
      </div>
    </div>
  </div>

  {/* Course 3 */}
  <div className="flex flex-col justify-center items-center rounded-lg w-full shadow-sm bg-white p-6">
    <div className="flex flex-row justify-between items-start w-full mb-4">
      <div className="flex flex-col justify-start items-start gap-2">
        <div className="text-sm text-neutral-900 font-semibold">
          Leadership Skills Development
        </div>
        <div className="flex flex-row justify-start items-center gap-4">
          <div className="flex flex-row justify-center items-center gap-1">
            <div className="flex justify-center items-center h-3.5">
              <img
                width="11.5px"
                height="12.8px"
                src="/images/instructor.png"
                alt="Instructor icon"
              />
            </div>
            <div className="text-[12px] text-gray-600 font-medium">
              Sarah Chen
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-1">
            <div className="flex justify-center items-center h-3.5">
              <img
                width="12.2px"
                height="12.2px"
                src="/images/duration.png"
                alt="Duration icon"
              />
            </div>
            <div className="text-[12px] text-gray-600 font-medium">
              4 hours
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-1">
            <img
              width="15px"
              height="15px"
              src="/images/rating.png"
              alt="Rating icon"
            />
            <div className="text-[12px] text-gray-600 font-medium">
              4.5
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center rounded w-28 h-9 bg-teal-500 cursor-pointer hover:bg-teal-600 transition-colors">
        <div className="flex flex-row justify-center items-center gap-1">
          <div className="flex justify-center items-center w-4 h-4">
            <img
              width="14px"
              height="15px"
              src="/images/continue.png"
              alt="Continue icon"
            />
          </div>
          <div className="text-xs text-white font-medium">
            Continue
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-start items-start gap-2 w-full">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="text-xs text-gray-600 font-medium">
          Progress
        </div>
        <div className="text-xs text-neutral-900 font-medium">
          3/6 Modules
        </div>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div className="h-2 bg-teal-500 rounded-full" style={{ width: '50%' }}></div>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="text-xs text-gray-600 font-medium">
          Next: Effective Communication
        </div>
        <div className="text-xs text-teal-500 font-normal">
          Due 30 Aug 2025
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

export default Trainings;
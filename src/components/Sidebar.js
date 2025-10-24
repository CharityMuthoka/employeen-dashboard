import React from 'react';

import logo from '../assets/ontap.png';
import dashboardIcon from '../assets/dashboard_2.png';
import taskIcon from '../assets/task.png';
import leaveIcon from '../assets/leave_attendance.png';
import trainingsIcon from '../assets/graduate.png';
import cardsIcon from '../assets/cardss.png';
import profileIcon from '../assets/user_1.png';
import announcementsIcon from '../assets/announcement.png';



const menuItems = [
  { name: 'Dashboard', icon: dashboardIcon, active: true },
  { name: 'Task', icon: taskIcon },
  { name: 'Leave & Attendance', icon: leaveIcon },
  { name: 'Trainings', icon: trainingsIcon },
  { name: 'My Cards', icon: cardsIcon },
  { name: 'My Profile', icon: profileIcon },
  { name: 'Announcements', icon: announcementsIcon },
];

export default function Sidebar() {
    return (
      <div className="w-64 bg-white shadow-lg flex flex-col h-screen overflow-hidden">
        {/* Logo */}
        <div className="flex items-center justify-center py-4 px-4">
          <img src={logo} alt="Logo" className="w-32 object-contain" />
        </div>
  
        {/* Search */}
        <div className="px-4 mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
  
        {/* Scrollable Menu Section */}
        <div className="flex-grow overflow-y-auto px-4">
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={`mb-3 cursor-pointer flex items-center px-3 py-2 rounded ${
                  item.active ? 'bg-teal-500 text-white' : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                <img src={item.icon} alt={`${item.name} icon`} className="w-5 h-5 mr-3" />
                {item.name}
              </li>
            ))}
          </ul>
        </div>
  
        {/* Logout */}
        <div className="px-4 py-4 text-teal-500 cursor-pointer hover:underline">
          Logout
        </div>
      </div>
    );
  }
  
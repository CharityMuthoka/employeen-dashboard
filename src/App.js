

import { useState } from 'react';
import Signin from './Signin';
import Dashboard from './components/Dashboard';
import Task from './components/Task';
import Leave from './components/Leave';
import Announcements from './components/Announcements';
import Payslip from './components/Payslip';
import Training from './components/Trainings';
import Cards from './components/Cards';
import Profile from './components/Profile';
import Support from './components/Support';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activePage, setActivePage] = useState("dashboard"); 

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard setActivePage={setActivePage} activePage={activePage} />;
      case "task":
        return <Task setActivePage={setActivePage} activePage={activePage} />;
      case "leave":
        return <Leave setActivePage={setActivePage} activePage={activePage} />;
      case "announcements":
        return <Announcements setActivePage={setActivePage} activePage={activePage} />;
      case "payslips":
        return <Payslip setActivePage={setActivePage} activePage={activePage} />;
      case "trainings":
        return <Training setActivePage={setActivePage} activePage={activePage} />;
      case "cards":
        return <Cards setActivePage={setActivePage} activePage={activePage} />;
      case "profile":
        return <Profile setActivePage={setActivePage} activePage={activePage} />;
      case "support":
        return <Support setActivePage={setActivePage} activePage={activePage} />;
      default:
        return <Dashboard setActivePage={setActivePage} activePage={activePage} />;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {isAuthenticated ? renderPage() : <Signin onLogin={handleLogin} />}
    </div>
  );
}

export default App;
export default function Header() {
    return (
      <header className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Good Morning Victor! 👋</h2>
          <p className="text-sm text-gray-500">Product Designer • Design Team</p>
        </div>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <div className="bg-white p-4 shadow rounded text-center">
            <p className="text-xs text-gray-500">Today's Status</p>
            <p className="text-green-600 font-bold">Clocked in: 9:05 AM</p>
          </div>
          <div className="bg-white p-4 shadow rounded text-center">
            <p className="text-xs text-gray-500">Next Payday</p>
            <p className="font-medium">Aug 30, 2025</p>
          </div>
          <img
            className="w-14 h-14 rounded-full object-cover"
            src="https://via.placeholder.com/150"
            alt="Avatar"
          />
        </div>
      </header>
    );
  }
  
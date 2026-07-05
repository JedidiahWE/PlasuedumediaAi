import {
  FaBell,
  FaUserCircle,
  FaSignOutAlt,
  FaSearch,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="bg-white border-b border-slate-200 px-8 py-5 flex items-center justify-between shadow-sm">

      {/* Left */}

      <div>

        <h1 className="text-3xl font-extrabold text-slate-800">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-1">
          Welcome back,
          <span className="font-semibold text-sky-600 ml-1">
            {user?.fullName || "User"}
          </span>
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="hidden lg:flex items-center bg-slate-100 rounded-2xl px-4 py-3 w-80">

          <FaSearch className="text-slate-400 mr-3" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full text-sm"
          />

        </div>

        {/* Notification */}

        <button className="relative w-12 h-12 rounded-2xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition">

          <FaBell className="text-slate-600 text-lg" />

          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>

        </button>

        {/* User */}

        <div className="flex items-center gap-3 bg-slate-100 rounded-2xl px-4 py-2">

          <FaUserCircle className="text-4xl text-sky-600" />

          <div className="hidden md:block">

            <h3 className="font-semibold text-slate-800">
              {user?.fullName || "User"}
            </h3>

            <p className="text-xs text-slate-500">
              Student
            </p>

          </div>

        </div>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-2xl transition shadow-md"
        >

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </div>
  );
};

export default Topbar;
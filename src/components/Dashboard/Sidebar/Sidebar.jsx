import { Link } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaChalkboardTeacher,
  FaBrain,
  FaImage,
  FaVideo,
  FaSearch,
  FaHistory,
  FaUser,
  FaCog,
  FaGraduationCap,
  FaArrowLeft,
} from "react-icons/fa";

const menu = [
  "Dashboard",
  "Lecture Notes",
  "PowerPoint",
  "Quiz Generator",
  "Image Generator",
  "Video Generator",
  "Research Assistant",
  "History",
  "Profile",
  "Settings",
];

const icons = {
  Dashboard: <FaHome />,
  "Lecture Notes": <FaFileAlt />,
  PowerPoint: <FaChalkboardTeacher />,
  "Quiz Generator": <FaBrain />,
  "Image Generator": <FaImage />,
  "Video Generator": <FaVideo />,
  "Research Assistant": <FaSearch />,
  History: <FaHistory />,
  Profile: <FaUser />,
  Settings: <FaCog />,
};

const Sidebar = ({ active, setActive }) => {
  return (
    <aside className="w-72 min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white flex flex-col shadow-2xl">

      {/* Logo */}

      <div className="px-8 py-8 border-b border-slate-700">

        <Link
          to="/"
          className="flex items-center gap-4 group"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-400 flex items-center justify-center text-2xl shadow-lg group-hover:scale-105 transition">
            <FaGraduationCap />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold">
              EduMedia AI
            </h2>

            <p className="text-slate-400 text-sm group-hover:text-sky-300 transition">
              Educational Media Platform
            </p>
          </div>
        </Link>

      </div>

      {/* Home Button */}

      <div className="px-5 pt-6">

        <Link
          to="/"
          className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-sky-600 hover:bg-cyan-500 transition font-semibold shadow-lg"
        >
          <FaArrowLeft />
          <span>Back to Homepage</span>
        </Link>

      </div>

      {/* Navigation */}

      <div className="flex-1 px-5 py-6 space-y-2">

        {menu.map((item) => (

          <button
            key={item}
            onClick={() => setActive(item)}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 font-medium ${
              active === item
                ? "bg-sky-600 shadow-lg scale-[1.02]"
                : "hover:bg-slate-700 hover:translate-x-1"
            }`}
          >

            <span className="text-lg">
              {icons[item]}
            </span>

            <span>{item}</span>

          </button>

        ))}

      </div>

      {/* Footer */}

      <div className="px-6 py-6 border-t border-slate-700">

        <div className="rounded-2xl bg-slate-800 p-4">

          <p className="text-sm text-slate-400">
            EduMedia AI
          </p>

          <h3 className="font-bold mt-1">
            AI-Powered Learning
          </h3>

          <p className="text-xs text-slate-500 mt-2">
            Version 1.0
          </p>

        </div>

      </div>

    </aside>
  );
};

export default Sidebar;
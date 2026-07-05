import { useEffect, useState } from "react";
import api from "../../api/api";
import {
  FaBook,
  FaQuestionCircle,
  FaSearch,
  FaImage,
  FaVideo,
  FaFilePowerpoint,
} from "react-icons/fa";

import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import Topbar from "../../components/Dashboard/Topbar/Topbar";

import LectureNotes from "../../components/LectureNotes/LectureNotes";
import PowerPoint from "../../components/PowerPoint/PowerPoint";
import QuizGenerator from "../../components/QuizGenerator/QuizGenerator";
import ImageGenerator from "../../components/ImageGenerator/ImageGenerator";
import VideoGenerator from "../../components/VideoGenerator/VideoGenerator";
import ResearchAssistant from "../../components/ResearchAssistant/ResearchAssistant";
import History from "../../components/History/History";
import Profile from "../../components/Profile/Profile";
import Settings from "../../components/Settings/Settings";

const Dashboard = () => {
  const [active, setActive] = useState("Dashboard");
  const [stats, setStats] = useState({
  lecture: 0,
  quiz: 0,
  research: 0,
  powerpoint: 0,
  image: 0,
  video: 0,
});

const [recent, setRecent] = useState([]);

useEffect(() => {
  loadDashboard();
}, []);

const loadDashboard = async () => {
  try {

    const res = await api.get("/dashboard", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    setStats(res.data.stats);
    setRecent(res.data.recent);

  } catch (err) {

    console.log(err);

  }
};

  const renderContent = () => {
    switch (active) {
      case "Lecture Notes":
        return <LectureNotes />;

      case "PowerPoint":
        return <PowerPoint />;

      case "Quiz Generator":
        return <QuizGenerator />;

      case "Image Generator":
        return <ImageGenerator />;

      case "Video Generator":
        return <VideoGenerator />;

      case "Research Assistant":
        return <ResearchAssistant />;

      case "History":
        return <History />;

      case "Profile":
        return <Profile />;

      case "Settings":
        return <Settings />;

      default:
        return (
          <div className="space-y-8">

            {/* Hero */}

            <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 rounded-3xl p-10 text-white shadow-xl">

              <h1 className="text-4xl font-extrabold">
                Welcome to EduMedia AI 👋
              </h1>

              <p className="mt-3 text-lg text-blue-100 max-w-3xl">
                Generate lecture notes, quizzes, presentations,
                research materials, educational images and videos
                using Artificial Intelligence.
              </p>

            </div>

            {/* Statistics */}

<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

  <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition">

    <div className="flex justify-between">

      <div>

        <p className="text-slate-500">
          Lecture Notes
        </p>

        <h2 className="text-4xl font-bold text-sky-600 mt-3">
          {stats.lecture}
        </h2>

      </div>

      <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-600 text-3xl">

        <FaBook />

      </div>

    </div>

  </div>

  <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition">

    <div className="flex justify-between">

      <div>

        <p className="text-slate-500">
          Quizzes
        </p>

        <h2 className="text-4xl font-bold text-emerald-600 mt-3">
          {stats.quiz}
        </h2>

      </div>

      <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 text-3xl">

        <FaQuestionCircle />

      </div>

    </div>

  </div>

  <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition">

    <div className="flex justify-between">

      <div>

        <p className="text-slate-500">
          Research
        </p>

        <h2 className="text-4xl font-bold text-purple-600 mt-3">
          {stats.research}
        </h2>

      </div>

      <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 text-3xl">

        <FaSearch />

      </div>

    </div>

  </div>

  <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition">

    <div className="flex justify-between">

      <div>

        <p className="text-slate-500">
          PowerPoints
        </p>

        <h2 className="text-4xl font-bold text-orange-600 mt-3">
          {stats.powerpoint}
        </h2>

      </div>

      <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 text-3xl">

        <FaFilePowerpoint />

      </div>

    </div>

  </div>

  <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition">

    <div className="flex justify-between">

      <div>

        <p className="text-slate-500">
          Images
        </p>

        <h2 className="text-4xl font-bold text-pink-600 mt-3">
          {stats.image}
        </h2>

      </div>

      <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 text-3xl">

        <FaImage />

      </div>

    </div>

  </div>

  <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition">

    <div className="flex justify-between">

      <div>

        <p className="text-slate-500">
          Videos
        </p>

        <h2 className="text-4xl font-bold text-red-600 mt-3">
          {stats.video}
        </h2>

      </div>

      <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 text-3xl">

        <FaVideo />

      </div>

    </div>

  </div>

</div>
            
            
 {/* Quick Access */}

<div>

  <div className="flex justify-between items-center mb-6">

    <h2 className="text-2xl font-bold">
      Quick Access
    </h2>

    <p className="text-slate-500">
      Start creating with AI
    </p>

  </div>

  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

    {[
      {
        title: "Lecture Notes",
        desc: "Generate detailed academic lecture notes.",
        color: "from-sky-500 to-blue-600",
        icon: <FaBook className="text-4xl" />,
      },

      {
        title: "PowerPoint",
        desc: "Create professional presentation slides.",
        color: "from-orange-500 to-red-500",
        icon: <FaFilePowerpoint className="text-4xl" />,
      },

      {
        title: "Quiz Generator",
        desc: "Generate objective and theory questions.",
        color: "from-green-500 to-emerald-600",
        icon: <FaQuestionCircle className="text-4xl" />,
      },

      {
        title: "Research Assistant",
        desc: "Generate academic research materials.",
        color: "from-purple-500 to-indigo-600",
        icon: <FaSearch className="text-4xl" />,
      },

      {
        title: "Image Generator",
        desc: "Create educational diagrams and illustrations.",
        color: "from-pink-500 to-rose-600",
        icon: <FaImage className="text-4xl" />,
      },

      {
        title: "Video Generator",
        desc: "Generate educational video storyboards.",
        color: "from-red-500 to-rose-700",
        icon: <FaVideo className="text-4xl" />,
      },

    ].map((card) => (

      <button
        key={card.title}
        onClick={() => setActive(card.title)}
        className="
          relative
          overflow-hidden
          rounded-3xl
          p-8
          text-white
          shadow-lg
          hover:scale-[1.03]
          hover:shadow-2xl
          transition-all
          duration-300
          bg-gradient-to-br
        "
      >

        <div
          className={`absolute inset-0 bg-gradient-to-br ${card.color}`}
        />

        <div className="relative z-10">

          <div className="mb-8 opacity-90">

            {card.icon}

          </div>

          <h3 className="text-2xl font-bold">

            {card.title}

          </h3>

          <p className="mt-3 text-white/90 leading-7">

            {card.desc}

          </p>

        </div>

      </button>

    ))}

  </div>

</div>

            {/* Recent Activity */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-6">
                Recent Activity
              </h2>

{recent.length === 0 ? (

  <div className="space-y-2 text-slate-500">

    <p>No activity yet.</p>

    <p>
      Your generated content will appear here.
    </p>

  </div>

) : (

  <div className="space-y-4">

    {recent.map((item) => (

      <div
        key={item._id}
        className="flex justify-between items-center border rounded-2xl p-4 hover:bg-slate-50 transition"
      >

        <div>

          <h3 className="font-bold">
            {item.title}
          </h3>

          <p className="text-slate-500">
            {item.type}
          </p>

        </div>

        <small className="text-slate-400">

          {new Date(item.createdAt).toLocaleDateString()}

        </small>

      </div>

    ))}

  </div>

)}

            </div>

          </div>
        );
    }
  };

  return (
    <div className="flex">

      <Sidebar
        active={active}
        setActive={setActive}
      />

      <div className="flex-1 bg-slate-100 min-h-screen">

        <Topbar />

        <div className="p-8">

          {renderContent()}

        </div>

      </div>

    </div>
  );
};

export default Dashboard;
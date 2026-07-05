import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaGraduationCap,
  FaRobot,
  FaFileAlt,
  FaVideo,
  FaImage,
} from "react-icons/fa";
import api from "../../api/api";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await api.post("/auth/login", formData);

      localStorage.setItem("token", response.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      toast.success("Welcome back!");
      setLoading(false);
      navigate("/dashboard");

    } catch (error) {

      setLoading(false);
      toast.error(
  error.response?.data?.message || "Login failed"
);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-cyan-50 to-white flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-6xl bg-white rounded-[32px] shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* LEFT PANEL */}

        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-sky-600 to-cyan-500 text-white p-12">

          <Link
            to="/"
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-14 h-14 rounded-2xl bg-white text-sky-600 flex items-center justify-center text-2xl">
              <FaGraduationCap />
            </div>

            <div>
              <h2 className="text-3xl font-black">
                EduMedia AI
              </h2>

              <p className="text-sky-100">
                AI-Powered Educational Platform
              </p>
            </div>
          </Link>

          <h1 className="text-5xl font-black leading-tight mb-6">
            Welcome
            <br />
            Back.
          </h1>

          <p className="text-sky-100 text-lg leading-8 mb-10">
            Continue creating lecture notes,
            presentations, quizzes, videos,
            images and research materials with
            AI.
          </p>

          <div className="space-y-5">

            <Feature
              icon={<FaRobot />}
              title="15+ AI Tools"
            />

            <Feature
              icon={<FaFileAlt />}
              title="Lecture Notes"
            />

            <Feature
              icon={<FaVideo />}
              title="Video Generator"
            />

            <Feature
              icon={<FaImage />}
              title="Image Generator"
            />

          </div>

        </div>

        {/* RIGHT PANEL */}

        <div className="p-8 md:p-12">

          {/* Mobile Logo */}

          <div className="lg:hidden text-center mb-8">

            <Link
              to="/"
              className="inline-flex flex-col items-center"
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-400 text-white flex items-center justify-center text-2xl mb-3">

                <FaGraduationCap />

              </div>

              <h2 className="text-2xl font-black text-slate-900">
                EduMedia AI
              </h2>

            </Link>

          </div>

          <h2 className="text-4xl font-black text-slate-900">
            Sign In
          </h2>

          <p className="text-slate-500 mt-2 mb-8">
            Login to continue using your AI workspace.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <div>

              <label className="block mb-2 font-semibold text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 outline-none"
                required
              />

            </div>

            <div>

              <label className="block mb-2 font-semibold text-slate-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 outline-none"
                required
              />

            </div>

            <div className="flex justify-between items-center text-sm">

              <label className="flex items-center gap-2 text-slate-600">

                <input type="checkbox" />

                Remember me

              </label>

              <Link
                to="/forgot-password"
                className="text-sky-600 font-semibold"
              >
                Forgot Password?
              </Link>

            </div>

            <button
  type="submit"
  disabled={loading}
  className="w-full bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold transition"
>
  {loading ? "Signing In..." : "Sign In"}
</button>

          </form>

          <p className="text-center mt-8 text-slate-600">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-sky-600 font-bold"
            >
              Create Account
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

const Feature = ({ icon, title }) => (
  <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-4 backdrop-blur-sm">

    <div className="text-2xl">
      {icon}
    </div>

    <span className="font-semibold">
      {title}
    </span>

  </div>
);

export default Login;
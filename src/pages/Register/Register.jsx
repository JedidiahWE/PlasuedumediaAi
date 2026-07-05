import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaGraduationCap,
  FaUserGraduate,
  FaRobot,
  FaBook,
  FaVideo,
} from "react-icons/fa";
import api from "../../api/api";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    institution: "",
    department: "",
    level: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.warning("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      await api.post("/auth/register", {
        fullName: formData.fullName,
        email: formData.email,
        institution: formData.institution,
        department: formData.department,
        level: formData.level,
        password: formData.password,
      });

      toast.success(
        "Registration successful! Redirecting to login..."
      );

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-cyan-50 to-white flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-7xl bg-white rounded-[32px] shadow-2xl overflow-hidden grid lg:grid-cols-2">

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
            Join the
            <br />
            Future of Learning.
          </h1>

          <p className="text-lg text-sky-100 leading-8 mb-10">
            Create smarter educational content with AI and boost
            teaching, learning and research.
          </p>

          <div className="space-y-5">

            <Feature
              icon={<FaRobot />}
              title="AI Content Creation"
            />

            <Feature
              icon={<FaBook />}
              title="Lecture Notes & Research"
            />

            <Feature
              icon={<FaVideo />}
              title="Educational Videos"
            />

            <Feature
              icon={<FaUserGraduate />}
              title="Designed for Students & Lecturers"
            />

          </div>

        </div>

        {/* RIGHT PANEL */}

        <div className="p-8 md:p-12 overflow-y-auto">

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
            Create Account
          </h2>

          <p className="text-slate-500 mt-2 mb-8">
            Join EduMedia AI and start creating educational content.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-5"
          >

            <Input
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              disabled={loading}
            />

            <Input
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
            />

            <Input
              label="Institution"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              disabled={loading}
            />

            <Input
              label="Department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              disabled={loading}
            />

                        <Input
              label="Level"
              name="level"
              value={formData.level}
              onChange={handleChange}
              disabled={loading}
            />

            <div></div>

            <Input
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
            />

            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              disabled={loading}
            />

            <div className="md:col-span-2 mt-2">

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-500 text-white font-bold hover:shadow-lg transition disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>

            </div>

          </form>

          <p className="text-center mt-8 text-slate-600">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-sky-600 font-bold hover:text-cyan-500 transition"
            >
              Sign In
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

const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  disabled = false,
}) => (
  <div>

    <label className="block mb-2 font-semibold text-slate-700">
      {label}
    </label>

    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500 disabled:bg-slate-100 disabled:cursor-not-allowed"
      required
    />

  </div>
);

export default Register;
import { FaGraduationCap, FaEnvelope, FaGithub } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 py-10">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Logo */}

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-400 flex items-center justify-center text-white shadow-md">

              <FaGraduationCap />

            </div>

            <div>

              <h2 className="text-xl font-bold text-slate-900">
                EduMedia AI
              </h2>

              <p className="text-sm text-slate-500">
                AI-Powered Educational Media Platform
              </p>

            </div>

          </div>

          {/* Quick Links */}

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">

            <a
              href="#features"
              className="text-slate-600 hover:text-sky-600 transition"
            >
              Features
            </a>

            <a
              href="#services"
              className="text-slate-600 hover:text-sky-600 transition"
            >
              Services
            </a>

            <a
              href="#how-it-works"
              className="text-slate-600 hover:text-sky-600 transition"
            >
              How It Works
            </a>

            <a
              href="#contact"
              className="text-slate-600 hover:text-sky-600 transition"
            >
              Contact
            </a>

          </div>

          {/* Contact */}

          <div className="flex items-center gap-5 text-slate-500">

            <a
              href="mailto:support@edumediaai.com"
              className="hover:text-sky-600 transition"
            >
              <FaEnvelope size={18} />
            </a>

            <a
              href="#"
              className="hover:text-sky-600 transition"
            >
              <FaGithub size={18} />
            </a>

          </div>

        </div>

        <div className="border-t border-slate-200 mt-8 pt-6 text-center">

          <p className="text-sm text-slate-500">
            © {year} <span className="font-semibold">EduMedia AI</span>.
            Designed and Developed for Academic Research.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
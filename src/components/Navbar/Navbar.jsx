import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl shadow-xl border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3 hover:scale-105 transition duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-400 flex items-center justify-center text-white text-xl shadow-lg">

              <FaGraduationCap />

            </div>

            <div>

              <h1 className="font-black text-2xl text-white">

                EduMedia AI

              </h1>

              <p className="text-xs text-slate-400">

                Smart Learning Platform

              </p>

            </div>

          </Link>

          {/* Desktop Menu */}

          <ul className="hidden lg:flex items-center gap-10">

            {links.map((item) => (

              <li key={item.name}>

                <a
                  href={item.href}
                  className="relative text-slate-200 hover:text-sky-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-sky-400 after:transition-all hover:after:w-full"
                >
                  {item.name}
                </a>

              </li>

            ))}

          </ul>

          {/* Buttons */}

          <div className="hidden lg:flex items-center gap-4">

            <Link
              to="/login"
              className="px-6 py-3 rounded-xl border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white transition duration-300 font-semibold"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white transition duration-300 font-semibold shadow-lg"
            >
              Get Started
            </Link>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white text-2xl"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="bg-slate-950 border-t border-slate-800 px-6 py-6 flex flex-col gap-5">

          {links.map((item) => (

            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-slate-200 hover:text-sky-400 transition"
            >
              {item.name}
            </a>

          ))}

          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="border border-sky-500 rounded-xl py-3 text-center text-sky-400 font-semibold"
          >
            Login
          </Link>

          <Link
            to="/register"
            onClick={() => setOpen(false)}
            className="bg-sky-600 rounded-xl py-3 text-center text-white font-semibold"
          >
            Get Started
          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;
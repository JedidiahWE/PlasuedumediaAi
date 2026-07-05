import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-sky-50 via-white to-cyan-50"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-sky-600 to-cyan-500 px-8 py-16 lg:px-16 lg:py-20 shadow-2xl">

          {/* Decorative Blobs */}

          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* Left */}

            <div className="max-w-2xl">

              <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white font-semibold text-sm mb-6">

                🚀 START YOUR AI LEARNING JOURNEY

              </span>

              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">

                Ready to Transform
                <br />
                Teaching & Learning?

              </h2>

              <p className="mt-6 text-lg text-sky-100 leading-8">

                Join students, lecturers and researchers using EduMedia AI
                to generate lecture notes, quizzes, presentations,
                educational videos, images and research materials in minutes.

              </p>

            </div>

            {/* Right */}

            <div className="flex flex-col sm:flex-row gap-4">

              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-3 bg-white text-sky-700 font-bold px-8 py-4 rounded-2xl hover:bg-slate-100 transition duration-300 shadow-lg"
              >
                Get Started Free
                <FaArrowRight />
              </Link>

              <a
                href="#features"
                className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white hover:text-sky-700 transition duration-300"
              >
                Learn More
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;
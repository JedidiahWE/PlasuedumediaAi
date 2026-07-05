import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import lectureNotes from "../../assets/images/lecture-notes.png";
import quizGenerator from "../../assets/images/quiz-generator.png";
import videoGenerator from "../../assets/images/video-generator.png";
import imageGenerator from "../../assets/images/image-generator.png";
import researchAssistant from "../../assets/images/research-dashboard.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50 pt-32 pb-24"
    >
      {/* Background */}

      <div className="absolute -top-40 -left-32 w-[450px] h-[450px] rounded-full bg-sky-400/20 blur-[160px]" />

      <div className="absolute -bottom-40 -right-32 w-[500px] h-[500px] rounded-full bg-cyan-300/20 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <span className="inline-flex items-center gap-2 bg-sky-100 border border-sky-200 rounded-full px-5 py-2 text-sky-700 text-sm font-semibold">

            ✨ AI Powered Educational Platform

          </span>

          <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-slate-900">

            Create

            <span className="text-sky-600">
              {" "}Educational
            </span>

            <br />

            Content

            <span className="text-cyan-600">
              {" "}With One Click
            </span>

          </h1>

          <p className="mt-8 text-slate-600 text-lg leading-8 max-w-xl">

            EduMedia AI helps students, lecturers and researchers generate lecture notes, quizzes, PowerPoint slides, educational videos, images and research materials within seconds.

          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <Link
              to="/register"
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-7 py-4 rounded-xl font-semibold transition shadow-lg"
            >
              Start Creating

              <FaArrowRight />

            </Link>

            <a
              href="#features"
              className="border border-sky-300 hover:border-sky-600 text-sky-700 px-7 py-4 rounded-xl font-semibold transition hover:bg-sky-50"
            >
              Explore Features
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div className="absolute inset-0 bg-sky-400/10 blur-3xl rounded-3xl"></div>

          <div className="relative bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl">

            <div className="flex justify-between items-center mb-8">

              <div>

                <h2 className="text-2xl font-bold text-slate-900">
                  AI Workspace
                </h2>

                <p className="text-slate-500 text-sm">
                  All AI tools in one place
                </p>

              </div>

              <span className="bg-green-500 px-3 py-1 rounded-full text-xs text-white font-semibold">
                ONLINE
              </span>

            </div>

            <div className="space-y-4">

              <Card
                image={lectureNotes}
                title="Lecture Notes"
              />

              <Card
                image={quizGenerator}
                title="Quiz Generator"
              />

              <Card
                image={videoGenerator}
                title="AI Video Generator"
              />

              <Card
                image={imageGenerator}
                title="AI Image Generator"
              />

              <Card
                image={researchAssistant}
                title="Research Assistant"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

const Card = ({ image, title }) => (
  <div className="flex items-center justify-between bg-white hover:shadow-lg transition rounded-2xl p-4 border border-slate-200">

    <div className="flex items-center gap-4">

      <img
        src={image}
        alt={title}
        className="w-16 h-16 rounded-xl object-cover border border-slate-200"
      />

      <div>

        <h3 className="font-semibold text-slate-800">
          {title}
        </h3>

        <p className="text-sm text-slate-500">
          AI Generated
        </p>

      </div>

    </div>

    <button className="text-sky-600 hover:text-sky-700 font-semibold">
      Open
    </button>

  </div>
);

export default Hero;
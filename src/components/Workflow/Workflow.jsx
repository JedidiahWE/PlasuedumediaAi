import {
  FaKeyboard,
  FaBrain,
  FaMagic,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaKeyboard />,
    title: "Enter Your Topic",
    description:
      "Type a topic, upload lecture materials, or describe what you want to generate using simple natural language.",
  },
  {
    icon: <FaBrain />,
    title: "AI Understands",
    description:
      "Our AI analyzes your request, identifies the educational context and prepares accurate academic content.",
  },
  {
    icon: <FaMagic />,
    title: "Generate Content",
    description:
      "Instantly create lecture notes, PowerPoint slides, quizzes, research documents, images and videos.",
  },
  {
    icon: <FaDownload />,
    title: "Export & Share",
    description:
      "Download your generated content or share it directly with students, lecturers and research teams.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block px-5 py-2 rounded-full bg-cyan-100 text-cyan-700 font-semibold text-sm">

            How It Works

          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-slate-900">

            Create Educational Content
            <br />
            In Four Easy Steps

          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">

            EduMedia AI simplifies educational content creation,
            allowing educators and students to focus on teaching,
            learning and research instead of repetitive work.

          </p>

        </div>

        {/* Timeline */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">

          {steps.map((step, index) => (

            <div
              key={step.title}
              className="relative group bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Number */}

              <div className="absolute top-6 right-6 text-6xl font-black text-slate-100 select-none">

                0{index + 1}

              </div>

              {/* Icon */}

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 flex items-center justify-center text-white text-2xl group-hover:scale-110 transition">

                {step.icon}

              </div>

              {/* Title */}

              <h3 className="mt-8 text-2xl font-bold text-slate-900">

                {step.title}

              </h3>

              {/* Description */}

              <p className="mt-4 text-slate-600 leading-7">

                {step.description}

              </p>

              {/* Arrow */}

              {index !== steps.length - 1 && (

                <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20">

                  <div className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-lg">

                    <FaArrowRight />

                  </div>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
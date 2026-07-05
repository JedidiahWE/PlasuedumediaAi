import { FaArrowRight } from "react-icons/fa";

import lectureNotes from "../../assets/images/lecture-notes.png";
import presentation from "../../assets/images/presentation-generator.jpg";
import quizGenerator from "../../assets/images/quiz-generator.png";
import imageGenerator from "../../assets/images/image-generator.png";
import videoGenerator from "../../assets/images/video-generator.png";
import researchAssistant from "../../assets/images/research-dashboard.png";

const services = [
  {
    title: "Lecture Notes Generator",
    description:
      "Generate comprehensive lecture notes from any topic in seconds. Perfect for lecturers preparing classes and students creating study materials.",
    image: lectureNotes,
    reverse: false,
  },
  {
    title: "PowerPoint Generator",
    description:
      "Automatically create beautiful, presentation-ready slides with titles, diagrams, images and structured content for seminars and lectures.",
    image: presentation,
    reverse: true,
  },
  {
    title: "Quiz Generator",
    description:
      "Instantly generate objective, theory and assessment questions complete with answers and marking guides.",
    image: quizGenerator,
    reverse: false,
  },
  {
    title: "AI Image Generator",
    description:
      "Create educational illustrations, scientific diagrams, infographics and learning visuals using artificial intelligence.",
    image: imageGenerator,
    reverse: true,
  },
  {
    title: "AI Video Generator",
    description:
      "Transform lecture content into engaging educational videos suitable for online learning and classroom presentation.",
    image: videoGenerator,
    reverse: false,
  },
  {
    title: "Research Assistant",
    description:
      "Summarize journal articles, analyze research papers and generate literature reviews to accelerate academic research.",
    image: researchAssistant,
    reverse: true,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-24">

          <span className="text-sky-600 font-bold uppercase tracking-widest">
            AI Services
          </span>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            One Platform.
            <br />
            Unlimited Possibilities.
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Everything required for modern teaching, learning and research
            powered by intelligent AI tools.
          </p>

        </div>

        <div className="space-y-28">

          {services.map((service) => (

            <div
              key={service.title}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                service.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >

              <div>

                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-3xl shadow-2xl border border-slate-200 hover:scale-[1.02] transition duration-500"
                />

              </div>

              <div>

                <span className="text-sky-600 font-bold uppercase tracking-widest">
                  AI Tool
                </span>

                <h3 className="mt-4 text-4xl font-black text-slate-900 leading-tight">
                  {service.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {service.description}
                </p>

                <button className="mt-10 inline-flex items-center gap-3 bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg">

                  Generate Now

                  <FaArrowRight />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;
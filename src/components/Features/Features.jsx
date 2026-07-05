import { FaArrowRight } from "react-icons/fa";

import lectureNotes from "../../assets/images/lecture-notes.png";
import quizGenerator from "../../assets/images/quiz-generator.png";
import imageGenerator from "../../assets/images/image-generator.png";
import videoGenerator from "../../assets/images/video-generator.png";
import researchAssistant from "../../assets/images/research-dashboard.png";
import presentation from "../../assets/images/presentation-generator.jpg";

const features = [
  {
    image: lectureNotes,
    title: "Lecture Notes",
    text: "Generate detailed lecture notes from any topic in seconds using advanced AI.",
  },
  {
    image: presentation,
    title: "PowerPoint Generator",
    text: "Create beautiful presentation slides automatically for teaching and seminars.",
  },
  {
    image: quizGenerator,
    title: "Quiz Generator",
    text: "Generate objective, theory and assessment questions instantly.",
  },
  {
    image: imageGenerator,
    title: "Image Generator",
    text: "Produce educational diagrams, illustrations and learning graphics.",
  },
  {
    image: videoGenerator,
    title: "Video Generator",
    text: "Convert lessons into engaging educational videos powered by AI.",
  },
  {
    image: researchAssistant,
    title: "Research Assistant",
    text: "Summarize academic papers and assist with literature review and research.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="py-28 bg-gradient-to-b from-white to-sky-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-20">

          <span className="text-sky-600 font-bold uppercase tracking-widest">
            Features
          </span>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Everything You Need
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Powerful AI tools designed to simplify teaching,
            learning and academic research.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="overflow-hidden">

                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-60 w-full object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-7">
                  {feature.text}
                </p>

                <button className="mt-8 inline-flex items-center gap-2 text-sky-600 font-bold hover:gap-3 transition-all">

                  Learn More

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

export default Features;
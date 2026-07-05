import { FaQuoteLeft, FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Dr. Michael James",
    role: "Senior Lecturer",
    text: "This platform has significantly reduced the time I spend preparing lecture materials while improving the quality of my classroom delivery.",
    color: "from-sky-500 to-cyan-400",
  },
  {
    name: "Sarah Johnson",
    role: "Postgraduate Student",
    text: "Generating lecture notes and quizzes has transformed my study routine. Everything is faster, clearer and more organized.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "David Wilson",
    role: "Researcher",
    text: "The AI research assistant helps summarize academic papers accurately and saves valuable research time.",
    color: "from-emerald-500 to-green-400",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-sky-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-16">

          <span className="text-sky-600 uppercase tracking-[4px] font-semibold">
            TESTIMONIALS
          </span>

          <h2 className="text-5xl font-black text-slate-900 mt-4">
            What Our Users Say
          </h2>

          <p className="text-slate-500 text-lg mt-5 max-w-2xl mx-auto">
            Trusted by lecturers, researchers and students for creating
            high-quality educational content with AI.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {reviews.map((review, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-sky-300"
            >

              {/* Decorative Circle */}
              <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-slate-100 group-hover:bg-sky-100 transition" />

              {/* Quote Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${review.color} flex items-center justify-center text-white text-2xl shadow-lg mb-8 group-hover:scale-110 transition`}
              >
                <FaQuoteLeft />
              </div>

              {/* Review */}
              <p className="text-slate-600 leading-8 mb-8">
                "{review.text}"
              </p>

              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 text-lg mb-6">

                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}

              </div>

              {/* User */}
              <h3 className="text-xl font-bold text-slate-900">
                {review.name}
              </h3>

              <p className="text-slate-500 mt-1">
                {review.role}
              </p>

              {/* Bottom Accent */}
              <div
                className={`mt-8 h-1 rounded-full bg-gradient-to-r ${review.color}`}
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;
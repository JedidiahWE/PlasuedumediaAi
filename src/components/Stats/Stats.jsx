import {
  FaUsers,
  FaBookOpen,
  FaRobot,
  FaGlobe,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    number: "20K+",
    title: "Active Users",
    color: "from-sky-500 to-cyan-400",
    glow: "shadow-sky-500/30",
  },
  {
    icon: <FaBookOpen />,
    number: "100K+",
    title: "Resources Generated",
    color: "from-violet-500 to-fuchsia-500",
    glow: "shadow-violet-500/30",
  },
  {
    icon: <FaRobot />,
    number: "15+",
    title: "AI Tools",
    color: "from-emerald-500 to-green-400",
    glow: "shadow-emerald-500/30",
  },
  {
    icon: <FaGlobe />,
    number: "50+",
    title: "Institutions",
    color: "from-orange-500 to-amber-400",
    glow: "shadow-orange-500/30",
  },
];

const Stats = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950">

      {/* Background Blur */}
      <div className="absolute -top-32 left-0 w-96 h-96 bg-sky-500/20 rounded-full blur-[120px]" />

      <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-16">

          <span className="text-sky-400 uppercase tracking-[4px] font-semibold">
            PLATFORM IMPACT
          </span>

          <h2 className="text-5xl font-black text-white mt-4">
            Trusted By Thousands
          </h2>

          <p className="text-slate-300 mt-5 text-lg">
            Helping educators and students create better learning experiences.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 transition duration-500 hover:-translate-y-3 hover:border-sky-400 hover:shadow-2xl"
            >

              {/* Decorative Circle */}
              <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-white/5" />

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-2xl shadow-xl ${item.glow} group-hover:scale-110 transition`}
              >
                {item.icon}
              </div>

              {/* Number */}
              <h2 className="mt-8 text-5xl font-black text-white">
                {item.number}
              </h2>

              {/* Title */}
              <p className="mt-3 text-slate-300 font-medium text-lg">
                {item.title}
              </p>

              {/* Bottom Glow Line */}
              <div
                className={`mt-8 h-1 w-full rounded-full bg-gradient-to-r ${item.color}`}
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Stats;
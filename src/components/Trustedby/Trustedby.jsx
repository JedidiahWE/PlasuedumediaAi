import {
  FaUniversity,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaFlask,
} from "react-icons/fa";

const TrustedBy = () => {
  const users = [
    {
      icon: <FaUniversity />,
      title: "Universities",
      desc: "Digital teaching and learning",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Lecturers",
      desc: "Create teaching materials instantly",
    },
    {
      icon: <FaFlask />,
      title: "Researchers",
      desc: "Accelerate academic research",
    },
    {
      icon: <FaUserGraduate />,
      title: "Students",
      desc: "Learn smarter with AI",
    },
  ];

  return (
    // Changed background to a soft, modern sky blue tint
    <section className="py-24 bg-sky-50/60">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center">

          {/* Updated badge background and text for the sky blue theme */}
          <span className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-800 font-semibold text-sm">

            Trusted Across Education

          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900">

            Built for Modern Education

          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-8">

            EduMedia AI empowers institutions, educators, researchers,
            and students with intelligent tools for creating educational
            content faster and more efficiently.

          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {users.map((user) => (

            <div
              key={user.title}
              className="group bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition">

                {user.icon}

              </div>

              <h3 className="text-2xl font-bold text-slate-900">

                {user.title}

              </h3>

              <p className="mt-3 text-slate-600 leading-7">

                {user.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default TrustedBy;
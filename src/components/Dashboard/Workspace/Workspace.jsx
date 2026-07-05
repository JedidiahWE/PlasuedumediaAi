const Workspace = () => {
  return (
    <div className="bg-white rounded-3xl shadow p-8">

      <h1 className="text-3xl font-bold text-slate-800">
        Welcome to EduMedia AI
      </h1>

      <p className="text-slate-500 mt-2">
        Select a tool from the sidebar to begin.
      </p>

      <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        <div className="border rounded-2xl p-6">
          <h2 className="font-bold text-xl">
            Lecture Notes
          </h2>
          <p className="mt-2 text-slate-500">
            Generate lecture notes instantly.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h2 className="font-bold text-xl">
            PowerPoint
          </h2>
          <p className="mt-2 text-slate-500">
            Create presentation slides.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h2 className="font-bold text-xl">
            Quiz Generator
          </h2>
          <p className="mt-2 text-slate-500">
            Build objective and theory tests.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h2 className="font-bold text-xl">
            Image Generator
          </h2>
          <p className="mt-2 text-slate-500">
            Generate educational illustrations.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h2 className="font-bold text-xl">
            Video Generator
          </h2>
          <p className="mt-2 text-slate-500">
            Produce AI educational videos.
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h2 className="font-bold text-xl">
            Research Assistant
          </h2>
          <p className="mt-2 text-slate-500">
            Research academic topics with AI.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Workspace;
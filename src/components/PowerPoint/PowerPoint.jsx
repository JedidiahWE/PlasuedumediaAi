import { useState } from "react";
import api from "../../api/api";
import {
  FaFilePowerpoint,
  FaMagic,
  FaImage,
  FaBook,
  FaPlayCircle,
  FaArrowRight,
} from "react-icons/fa";
import DocumentViewer from "../DocumentViewer/DocumentViewer";

const PowerPoint = () => {
  const [formData, setFormData] = useState({
    topic: "",
    description: "",
    slides: 10,
    theme: "Modern",
    style: "Academic",
    images: true,
    notes: true,
    references: false,
    animations: true,
  });

  const [loading, setLoading] = useState(false);
  const [presentation, setPresentation] = useState("");
  const [viewerOpen, setViewerOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleGenerate = async () => {
    if (!formData.topic.trim()) {
      alert("Please enter a presentation topic.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post(
        "/ai/powerpoint",
        formData
      );

      setPresentation(response.data.presentation);
      setViewerOpen(true);
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to generate presentation."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="space-y-8">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center">

                <FaFilePowerpoint className="text-3xl text-orange-600" />

              </div>

              <div>

                <h1 className="text-4xl font-black text-slate-900">
                  AI PowerPoint Generator
                </h1>

                <p className="text-slate-500 mt-1">
                  Create beautiful presentations with AI in seconds.
                </p>

              </div>

            </div>

          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="hidden lg:flex items-center gap-3 bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white px-7 py-4 rounded-xl font-bold transition"
          >
            <FaMagic />

            {loading ? "Generating..." : "Generate"}

          </button>

        </div>

        {/* Main Layout */}

        <div className="grid lg:grid-cols-[420px_1fr] gap-8">

          {/* LEFT */}

          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 space-y-6">

            <div>

              <label className="block font-semibold text-slate-700 mb-2">
                Presentation Topic
              </label>

              <input
                type="text"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                placeholder="Artificial Intelligence"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
              />

            </div>

            <div>

              <label className="block font-semibold text-slate-700 mb-2">
                Description
              </label>

              <textarea
                rows="4"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Briefly describe your presentation..."
                className="w-full border border-slate-300 rounded-xl px-4 py-3 resize-none focus:ring-2 focus:ring-orange-500 outline-none"
              />

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div>

                <label className="block mb-2 font-semibold">
                  Slides
                </label>

                <select
                  name="slides"
                  value={formData.slides}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3"
                >
                  {[5,8,10,12,15,20].map((n)=>(
                    <option key={n}>{n}</option>
                  ))}
                </select>

              </div>

              <div>

                <label className="block mb-2 font-semibold">
                  Theme
                </label>

                <select
                  name="theme"
                  value={formData.theme}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3"
                >
                  <option>Modern</option>
                  <option>Professional</option>
                  <option>Minimal</option>
                  <option>Creative</option>
                </select>

              </div>

            </div>

            <div>

              <label className="block mb-2 font-semibold">
                Presentation Style
              </label>

              <select
                name="style"
                value={formData.style}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              >
                <option>Academic</option>
                <option>Professional</option>
                <option>Business</option>
                <option>Conference</option>
                <option>Minimal</option>
              </select>

            </div>

            <div className="space-y-3">

              <CheckBox
                icon={<FaImage />}
                label="Include AI Images"
                name="images"
                checked={formData.images}
                onChange={handleChange}
              />

              <CheckBox
                icon={<FaBook />}
                label="Speaker Notes"
                name="notes"
                checked={formData.notes}
                onChange={handleChange}
              />

              <CheckBox
                icon={<FaPlayCircle />}
                label="Animations"
                name="animations"
                checked={formData.animations}
                onChange={handleChange}
              />

              <CheckBox
                icon={<FaBook />}
                label="References"
                name="references"
                checked={formData.references}
                onChange={handleChange}
              />

            </div>

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="lg:hidden w-full flex justify-center items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-bold"
            >
              <FaMagic />

              {loading ? "Generating..." : "Generate Presentation"}

            </button>

          </div>
                    {/* RIGHT PANEL */}

          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">

            <div className="flex items-center justify-between mb-8">

              <div>

                <h2 className="text-2xl font-bold text-slate-900">
                  Live Presentation Preview
                </h2>

                <p className="text-slate-500">
                  AI-generated slides will appear here.
                </p>

              </div>

              <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-xl font-semibold">
                {formData.slides} Slides
              </div>

            </div>

            {loading ? (

              <div className="flex flex-col items-center justify-center py-24">

                <div className="w-20 h-20 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin mb-8"></div>

                <h3 className="text-2xl font-bold text-slate-800">
                  AI is creating your presentation...
                </h3>

                <p className="text-slate-500 mt-2">
                  Designing slides, adding layouts and formatting...
                </p>

              </div>

            ) : presentation ? (

              <>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                  {Array.from(
                    { length: Number(formData.slides) },
                    (_, i) => (
                      <SlideCard
                        key={i}
                        number={i + 1}
                        topic={formData.topic}
                      />
                    )
                  )}

                </div>

                <div className="mt-10 flex flex-wrap gap-4">

                  <button
                    onClick={() => setViewerOpen(true)}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-7 py-3 rounded-xl font-semibold flex items-center gap-2"
                  >
                    Open Presentation
                  </button>

                  <button className="border border-orange-600 text-orange-600 hover:bg-orange-50 px-7 py-3 rounded-xl font-semibold">
                    Download PPTX
                  </button>

                </div>

              </>

            ) : (

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                {Array.from({ length: 6 }, (_, i) => (

                  <div
                    key={i}
                    className="aspect-[16/9] rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center bg-slate-50"
                  >

                    <div className="text-center">

                      <FaFilePowerpoint className="text-4xl text-orange-500 mx-auto mb-3" />

                      <p className="font-semibold text-slate-600">

                        Slide {i + 1}

                      </p>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>

        </div>

      </div>

      <DocumentViewer
        open={viewerOpen}
        onClose={() => setViewerOpen(false)}
        title={formData.topic}
        content={presentation}
      />

    </>
  );
};

const SlideCard = ({ number, topic }) => (
  <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 text-white shadow-xl overflow-hidden relative hover:scale-[1.03] transition">

    <div className="absolute top-0 left-0 right-0 h-10 bg-white/10"></div>

    <div className="p-6 h-full flex flex-col justify-center">

      <div className="text-sm opacity-80 mb-2">
        Slide {number}
      </div>

      <h3 className="font-bold text-xl leading-7">
        {topic || "Presentation Topic"}
      </h3>

      <p className="mt-4 text-orange-100 text-sm">
        AI generated educational presentation.
      </p>

    </div>

  </div>
);

const CheckBox = ({
  icon,
  label,
  name,
  checked,
  onChange,
}) => (

  <label className="flex items-center justify-between border rounded-xl px-4 py-3 hover:border-orange-400 cursor-pointer">

    <div className="flex items-center gap-3">

      <div className="text-orange-600">
        {icon}
      </div>

      <span className="font-medium">
        {label}
      </span>

    </div>

    <input
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
      className="w-5 h-5 accent-orange-600"
    />

  </label>

);

export default PowerPoint;
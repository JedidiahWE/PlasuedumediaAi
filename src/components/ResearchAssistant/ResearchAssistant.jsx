import { useState } from "react";
import api from "../../api/api";
import DocumentViewer from "../DocumentViewer/DocumentViewer";
import { FaSearch } from "react-icons/fa";

const ResearchAssistant = () => {

  const [formData, setFormData] = useState({
    topic: "",
    field: "Computer Science",
    level: "Undergraduate",
    type: "Literature Review",
    instructions: "",
  });

  const [loading, setLoading] = useState(false);
  const [research, setResearch] = useState("");

  const [viewerOpen, setViewerOpen] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleGenerate = async () => {

    if (!formData.topic.trim()) {
      alert("Please enter a research topic.");
      return;
    }

    try {

      setLoading(true);

      const response = await api.post(
        "/ai/research",
        formData
      );

      setResearch(response.data.research);

      setViewerOpen(true);

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Failed to generate research."
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <>

      <div className="bg-white rounded-3xl shadow p-8">

        <div className="flex items-center gap-3 mb-8">

          <FaSearch className="text-4xl text-indigo-600" />

          <div>

            <h1 className="text-3xl font-bold">
              AI Research Assistant
            </h1>

            <p className="text-slate-500">
              Generate high-quality academic research content.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div>

            <label className="font-semibold">
              Research Topic
            </label>

            <input
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="Enter research topic"
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="font-semibold">
              Academic Field
            </label>

            <select
              name="field"
              value={formData.field}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            >

              <option>Computer Science</option>
              <option>Business Administration</option>
              <option>Economics</option>
              <option>Education</option>
              <option>Engineering</option>

            </select>

          </div>

          <div>

            <label className="font-semibold">
              Academic Level
            </label>

            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            >

              <option>Undergraduate</option>
              <option>Masters</option>
              <option>PhD</option>

            </select>

          </div>

          <div>

            <label className="font-semibold">
              Research Type
            </label>

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            >

              <option>Literature Review</option>
              <option>Research Proposal</option>
              <option>Problem Statement</option>
              <option>Research Objectives</option>
              <option>Research Questions</option>
              <option>Methodology</option>
              <option>Abstract</option>
              <option>Chapter One</option>

            </select>

          </div>

        </div>

        <div className="mt-6">

          <label className="font-semibold">
            Additional Instructions
          </label>

          <textarea
            rows={4}
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            placeholder="Optional instructions..."
            className="w-full mt-2 border rounded-xl px-4 py-3 resize-none"
          />

        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="mt-8 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-8 py-3 rounded-xl font-semibold transition"
        >

          {loading ? "Generating..." : "Generate Research"}

        </button>

        <div className="mt-10 border rounded-2xl bg-slate-50 p-10 text-center">

          {loading ? (

            <div className="py-16">

              <div className="animate-pulse text-indigo-600 text-xl font-semibold">

                AI is generating your research...

              </div>

            </div>

          ) : research ? (

            <div>

              <div className="text-6xl mb-6">

                📚

              </div>

              <h2 className="text-3xl font-bold text-slate-800">

                Research Generated Successfully

              </h2>

              <p className="text-slate-500 mt-3 mb-8">

                Your research document is ready.

                Click below to open it.

              </p>

              <button
                onClick={() => setViewerOpen(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl shadow-lg transition"
              >

                Open Research

              </button>

            </div>

          ) : (

            <div className="py-14 text-slate-500">

              Your AI-generated research will appear here after generation.

            </div>

          )}

        </div>

      </div>

      <DocumentViewer
        open={viewerOpen}
        onClose={() => setViewerOpen(false)}
        title={formData.topic}
        content={research}
      />

    </>

  );

};

export default ResearchAssistant;
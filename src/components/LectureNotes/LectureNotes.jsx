import { useState } from "react";
import {
  FaBookOpen,
} from "react-icons/fa";
import api from "../../api/api";
import DocumentViewer from "../DocumentViewer/DocumentViewer";

const LectureNotes = () => {

  const [formData, setFormData] = useState({
    topic: "",
    subject: "Computer Science",
    level: "100 Level",
    length: "Medium",
    instructions: "",
  });

  const [loading, setLoading] = useState(false);

  const [generatedNotes, setGeneratedNotes] = useState("");

  const [viewerOpen, setViewerOpen] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleGenerate = async () => {

    if (!formData.topic.trim()) {
      alert("Please enter a topic.");
      return;
    }

    try {

      setLoading(true);

      const { data } = await api.post(
        "/ai/lecture-notes",
        formData
      );

      if (data.success) {

        setGeneratedNotes(data.notes);

        setViewerOpen(true);

      }

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Failed to generate lecture notes."
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <>

      <div className="bg-white rounded-3xl shadow p-8">

        <div className="flex items-center gap-3 mb-8">

          <FaBookOpen className="text-4xl text-sky-600" />

          <div>

            <h1 className="text-3xl font-bold">
              AI Lecture Notes Generator
            </h1>

            <p className="text-slate-500">
              Generate detailed lecture notes using Artificial Intelligence.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div>

            <label className="font-semibold">
              Topic
            </label>

            <input
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="e.g. Artificial Intelligence"
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="font-semibold">
              Subject
            </label>

            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            >
              <option>Computer Science</option>
              <option>Mathematics</option>
              <option>Physics</option>
              <option>Biology</option>
              <option>Chemistry</option>
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
              <option>100 Level</option>
              <option>200 Level</option>
              <option>300 Level</option>
              <option>400 Level</option>
            </select>

          </div>

          <div>

            <label className="font-semibold">
              Output Length
            </label>

            <select
              name="length"
              value={formData.length}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            >
              <option>Short</option>
              <option>Medium</option>
              <option>Long</option>
            </select>

          </div>

        </div>

        <div className="mt-6">

          <label className="font-semibold">
            Additional Instructions (Optional)
          </label>

          <textarea
            rows={4}
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            placeholder="Example: Include diagrams, practical examples and exam tips."
            className="w-full mt-2 border rounded-xl px-4 py-3 resize-none"
          />

        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="mt-8 bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 text-white px-8 py-3 rounded-xl font-semibold transition"
        >

          {loading ? "Generating..." : "Generate Notes"}

        </button>

        <div className="mt-10 border rounded-2xl bg-slate-50 p-10 text-center">

          {loading ? (

            <div className="py-16">

              <div className="animate-pulse text-sky-600 text-xl font-semibold">

                AI is generating your lecture notes...

              </div>

            </div>

          ) : generatedNotes ? (

            <div>

              <div className="text-6xl mb-6">
                📘
              </div>

              <h2 className="text-3xl font-bold text-slate-800">

                Lecture Notes Generated Successfully

              </h2>

              <p className="text-slate-500 mt-3 mb-8">

                Your document is ready.

                Click below to open the formatted version.

              </p>

              <button

                onClick={() => setViewerOpen(true)}

                className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-xl shadow-lg transition"

              >

                Open Document

              </button>

            </div>

          ) : (

            <div className="py-14 text-slate-500">

              Your AI-generated lecture notes will appear here after generation.

            </div>

          )}

        </div>

      </div>

      <DocumentViewer
        open={viewerOpen}
        onClose={() => setViewerOpen(false)}
        title={formData.topic}
        content={generatedNotes}
      />

    </>

  );

};

export default LectureNotes;
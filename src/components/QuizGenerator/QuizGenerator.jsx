import { useState } from "react";
import api from "../../api/api";

import { FaQuestionCircle } from "react-icons/fa";
import DocumentViewer from "../DocumentViewer/DocumentViewer";

const QuizGenerator = () => {

  const [formData, setFormData] = useState({
    topic: "",
    subject: "Computer Science",
    level: "100 Level",
    numberOfQuestions: 20,
    difficulty: "Medium",
    type: "Multiple Choice",
  });

  const [loading, setLoading] = useState(false);

  const [generatedQuiz, setGeneratedQuiz] = useState("");

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
        "/ai/quiz",
        formData
      );

      setGeneratedQuiz(data.quiz);

      setViewerOpen(true);

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Failed to generate quiz."
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <>

      <div className="bg-white rounded-3xl shadow p-8">

        <div className="flex items-center gap-3 mb-8">

          <FaQuestionCircle className="text-4xl text-sky-600" />

          <div>

            <h1 className="text-3xl font-bold">

              AI Quiz Generator

            </h1>

            <p className="text-slate-500">

              Generate university quizzes using AI.

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
              Number of Questions
            </label>

            <input
              type="number"
              name="numberOfQuestions"
              value={formData.numberOfQuestions}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="font-semibold">
              Difficulty
            </label>

            <select
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            >

              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>

            </select>

          </div>

          <div>

            <label className="font-semibold">
              Question Type
            </label>

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            >

              <option>Multiple Choice</option>
              <option>Theory</option>
              <option>Mixed</option>

            </select>

          </div>

        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="mt-8 bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 text-white px-8 py-3 rounded-xl font-semibold transition"
        >

          {loading ? "Generating..." : "Generate Quiz"}

        </button>

        <div className="mt-10 border rounded-2xl bg-slate-50 p-10 text-center">

          {loading ? (

            <div className="py-16">

              <div className="animate-pulse text-sky-600 text-xl font-semibold">

                AI is generating your quiz...

              </div>

            </div>

          ) : generatedQuiz ? (

            <div>

              <div className="text-6xl mb-6">

                📝

              </div>

              <h2 className="text-3xl font-bold text-slate-800">

                Quiz Generated Successfully

              </h2>

              <p className="text-slate-500 mt-3 mb-8">

                Your quiz is ready.

                Click below to open the formatted version.

              </p>

              <button

                onClick={() => setViewerOpen(true)}

                className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-xl shadow-lg transition"

              >

                Open Quiz

              </button>

            </div>

          ) : (

            <div className="py-14 text-slate-500">

              Your AI-generated quiz will appear here after generation.

            </div>

          )}

        </div>

      </div>

      <DocumentViewer
        open={viewerOpen}
        onClose={() => setViewerOpen(false)}
        title={formData.topic}
        content={generatedQuiz}
      />

    </>

  );

};

export default QuizGenerator;
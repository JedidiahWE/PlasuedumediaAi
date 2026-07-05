import { useState } from "react";
import api from "../../api/api";
import { FaVideo, FaDownload } from "react-icons/fa";

const VideoGenerator = () => {

  const [formData, setFormData] = useState({
    topic: "",
    audience: "University Students",
    duration: "5",
    style: "Educational",
    instructions: "",
  });

  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

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
      setVideoUrl("");

      // Start video generation
      const { data } = await api.post("/ai/video", formData);

      if (!data.success) {
        throw new Error("Unable to start video generation.");
      }

      const jobId = data.jobId;

      // Check every 5 seconds
      const interval = setInterval(async () => {

        try {

          const status = await api.get(`/ai/video/${jobId}`);

          console.log(status.data);

          if (status.data.status === "completed") {

            clearInterval(interval);

            setVideoUrl(
              status.data.videoUrl ||
              status.data.download_url ||
              status.data.url ||
              ""
            );

            setLoading(false);
          }

          if (status.data.status === "failed") {

            clearInterval(interval);

            setLoading(false);

            alert("Video generation failed.");

          }

        } catch (err) {

          clearInterval(interval);

          setLoading(false);

          alert("Unable to check video status.");

        }

      }, 5000);

    } catch (error) {

      setLoading(false);

      alert(
        error.response?.data?.message ||
        error.message ||
        "Failed to generate video."
      );

    }

  };

  return (

    <div className="bg-white rounded-3xl shadow p-8">

      <div className="flex items-center gap-3 mb-8">

        <FaVideo className="text-4xl text-sky-600" />

        <div>

          <h1 className="text-3xl font-bold">
            AI Video Generator
          </h1>

          <p className="text-slate-500">
            Generate educational videos with AI.
          </p>

        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <input
          name="topic"
          placeholder="Video Topic"
          value={formData.topic}
          onChange={handleChange}
          className="border rounded-xl px-4 py-3"
        />

        <select
          name="audience"
          value={formData.audience}
          onChange={handleChange}
          className="border rounded-xl px-4 py-3"
        >
          <option>University Students</option>
          <option>Secondary School</option>
          <option>Researchers</option>
        </select>

        <select
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          className="border rounded-xl px-4 py-3"
        >
          <option value="2">2 Minutes</option>
          <option value="5">5 Minutes</option>
          <option value="10">10 Minutes</option>
        </select>

        <select
          name="style"
          value={formData.style}
          onChange={handleChange}
          className="border rounded-xl px-4 py-3"
        >
          <option>Educational</option>
          <option>Animated</option>
          <option>Professional</option>
          <option>Documentary</option>
        </select>

      </div>

      <textarea
        rows={4}
        name="instructions"
        value={formData.instructions}
        onChange={handleChange}
        placeholder="Additional Instructions"
        className="w-full mt-6 border rounded-xl px-4 py-3"
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="mt-8 bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 text-white px-8 py-3 rounded-xl"
      >
        {loading ? "Generating Video..." : "Generate Video"}
      </button>

      <div className="mt-10 border rounded-2xl p-6 bg-slate-50 min-h-[400px]">

        {loading ? (

          <div className="text-center py-20">

            <div className="text-2xl font-bold text-sky-600">
              Creating your AI Video...
            </div>

            <p className="text-slate-500 mt-3">
              This may take 1–5 minutes.
            </p>

          </div>

        ) : videoUrl ? (

          <div>

            <video
              controls
              className="w-full rounded-xl"
            >
              <source
                src={videoUrl}
                type="video/mp4"
              />
            </video>

            <a
              href={videoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-green-600 text-white px-6 py-3 rounded-xl"
            >
              <FaDownload />
              Download Video
            </a>

          </div>

        ) : (

          <p className="text-slate-500">
            Generated video will appear here.
          </p>

        )}

      </div>

    </div>

  );

};

export default VideoGenerator;
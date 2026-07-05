import { useState } from "react";
import api from "../../api/api";
import { FaImage, FaDownload, FaExpand } from "react-icons/fa";

const ImageGenerator = () => {

  const [formData, setFormData] = useState({
    topic: "",
    imageType: "Educational Diagram",
    style: "Realistic",
    ratio: "1:1",
    instructions: "",
  });

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState(false);

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

      const res = await api.post("/ai/image", formData);

      setImage(res.data.image);

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Image generation failed."
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <>

      <div className="bg-white rounded-3xl shadow p-8">

        <div className="flex items-center gap-3 mb-8">

          <FaImage className="text-4xl text-sky-600" />

          <div>

            <h1 className="text-3xl font-bold">
              AI Image Generator
            </h1>

            <p className="text-slate-500">
              Generate educational images using AI.
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
              placeholder="Human Digestive System"
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="font-semibold">
              Image Type
            </label>

            <select
              name="imageType"
              value={formData.imageType}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            >

              <option>Educational Diagram</option>
              <option>Flowchart</option>
              <option>Infographic</option>
              <option>Mind Map</option>
              <option>Scientific Illustration</option>
              <option>Concept Art</option>

            </select>

          </div>

          <div>

            <label className="font-semibold">
              Style
            </label>

            <select
              name="style"
              value={formData.style}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            >

              <option>Realistic</option>
              <option>Flat Design</option>
              <option>Minimal</option>
              <option>Cartoon</option>
              <option>Sketch</option>
              <option>3D</option>

            </select>

          </div>

          <div>

            <label className="font-semibold">
              Aspect Ratio
            </label>

            <select
              name="ratio"
              value={formData.ratio}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            >

              <option>1:1</option>
              <option>16:9</option>
              <option>9:16</option>
              <option>4:3</option>

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
            placeholder="Label all parts clearly..."
            className="w-full mt-2 border rounded-xl px-4 py-3"
          />

        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="mt-8 bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 text-white px-8 py-3 rounded-xl transition"
        >

          {loading ? "Generating..." : "Generate Image"}

        </button>

        <div className="mt-10 rounded-3xl border bg-slate-100 p-8 min-h-[500px] flex items-center justify-center">

          {loading ? (

            <div className="text-center">

              <div className="animate-pulse text-sky-600 text-xl font-semibold">

                AI is generating your image...

              </div>

            </div>

          ) : image ? (

            <div className="text-center">

              <img
                src={image}
                alt="Generated"
                className="max-h-[500px] rounded-2xl shadow-xl mx-auto object-contain"
              />

              <div className="flex justify-center gap-4 mt-8">

                <button
                  onClick={() => setPreview(true)}
                  className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-xl flex items-center gap-2"
                >

                  <FaExpand />
                  Preview

                </button>

                <a
                  href={image}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl flex items-center gap-2"
                >

                  <FaDownload />
                  Download

                </a>

              </div>

            </div>

          ) : (

            <div className="text-center text-slate-500">

              <FaImage className="text-7xl mx-auto mb-6 opacity-30" />

              <h2 className="text-2xl font-bold">

                Your generated image will appear here

              </h2>

            </div>

          )}

        </div>

      </div>

      {preview && (

        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">

          <div className="relative">

            <button
              onClick={() => setPreview(false)}
              className="absolute -top-4 -right-4 bg-red-500 text-white w-10 h-10 rounded-full"
            >

              ✕

            </button>

            <img
              src={image}
              alt="Preview"
              className="max-h-[90vh] rounded-3xl shadow-2xl"
            />

          </div>

        </div>

      )}

    </>

  );

};

export default ImageGenerator;
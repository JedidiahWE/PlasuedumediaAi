import { useEffect, useState } from "react";
import api from "../../api/api";
import DocumentViewer from "../DocumentViewer/DocumentViewer";

const History = () => {

  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedDocument, setSelectedDocument] = useState(null);
  const [viewerOpen, setViewerOpen] = useState(false);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {

    try {

      const res = await api.get("/ai/history", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setHistory(res.data.history);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  const deleteHistory = async (id) => {

    try {

      await api.delete(`/ai/history/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setHistory((prev) =>
        prev.filter((item) => item._id !== id)
      );

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h1 className="text-3xl font-bold mb-8">
        Generation History
      </h1>

      {loading ? (

        <p>Loading...</p>

      ) : history.length === 0 ? (

        <p className="text-slate-500">
          No generation history yet.
        </p>

      ) : (

        <div className="space-y-5">

          {history.map((item) => (

            <div
              key={item._id}
              className="border rounded-2xl p-5 flex justify-between items-center hover:shadow-md transition"
            >

              <div>

                <h2 className="font-bold text-lg">
                  {item.title}
                </h2>

                <p className="text-slate-500">
                  {item.type}
                </p>

                <p className="text-sm text-slate-400 mt-2">
                  {new Date(item.createdAt).toLocaleString()}
                </p>

              </div>

              <div className="flex gap-3">

                <button
                  onClick={() => {

                    setSelectedDocument(item);

                    setViewerOpen(true);

                  }}
                  className="px-5 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white transition"
                >
                  Open
                </button>

                <button
                  onClick={() => deleteHistory(item._id)}
                  className="px-5 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white transition"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

      <DocumentViewer
        open={viewerOpen}
        onClose={() => setViewerOpen(false)}
        title={selectedDocument?.title || ""}
        content={selectedDocument?.content || ""}
      />

    </div>

  );

};

export default History;
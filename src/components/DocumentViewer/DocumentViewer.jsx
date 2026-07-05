import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import {
  Prism as SyntaxHighlighter,
} from "react-syntax-highlighter";

import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const DocumentViewer = ({
  open,
  onClose,
  title,
  content,
}) => {

  if (!open) return null;

  const copyContent = () => {
    navigator.clipboard.writeText(content);
    alert("Copied to clipboard.");
  };

  const printDocument = () => {
    window.print();
  };

  // Detect if content is an image URL
  const isImage =
    content &&
    (
      content.includes("image.pollinations.ai") ||
      /\.(png|jpg|jpeg|gif|webp)$/i.test(content)
    );

  return (

    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6">

      <div className="bg-white w-full max-w-6xl rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}

        <div className="sticky top-0 bg-gradient-to-r from-sky-600 to-indigo-700 text-white px-8 py-5 flex justify-between items-center">

          <div>

            <h2 className="text-3xl font-bold">
              {title}
            </h2>

            <p className="text-sky-100 text-sm mt-1">
              AI Generated Educational Content
            </p>

          </div>

          <div className="flex gap-3">

            <button
              onClick={copyContent}
              className="bg-white/20 hover:bg-white/30 transition px-4 py-2 rounded-xl"
            >
              📋 Copy
            </button>

            <button
              onClick={printDocument}
              className="bg-white/20 hover:bg-white/30 transition px-4 py-2 rounded-xl"
            >
              🖨 Print
            </button>

            <button
              onClick={onClose}
              className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-xl"
            >
              ✕ Close
            </button>

          </div>

        </div>

        {/* Document */}

        <div className="h-[80vh] overflow-y-auto bg-slate-100 p-10">

          <article
            className="
              max-w-4xl
              mx-auto
              bg-white
              rounded-3xl
              shadow-xl
              px-14
              py-14

              prose
              prose-slate
              prose-lg
              lg:prose-xl

              prose-headings:text-slate-900
              prose-headings:font-bold

              prose-h1:text-5xl
              prose-h1:border-b
              prose-h1:pb-4

              prose-h2:text-3xl
              prose-h2:mt-12

              prose-h3:text-2xl

              prose-p:text-slate-700
              prose-p:leading-9

              prose-strong:text-sky-700

              prose-li:marker:text-sky-600

              prose-blockquote:border-l-4
              prose-blockquote:border-l-sky-500
              prose-blockquote:bg-sky-50
              prose-blockquote:px-6
              prose-blockquote:py-3
              prose-blockquote:rounded-r-xl

              prose-table:border
              prose-th:bg-slate-100
              prose-th:text-slate-900
              prose-th:p-3
              prose-td:p-3
            "
          >

            {isImage ? (

              <div className="flex flex-col items-center">

                <img
                  src={content}
                  alt={title}
                  className="rounded-2xl shadow-xl max-w-full"
                />

                <a
                  href={content}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-xl transition"
                >
                  ⬇ Download Image
                </a>

              </div>

            ) : (

              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  code({
                    inline,
                    className,
                    children,
                    ...props
                  }) {

                    const match = /language-(\w+)/.exec(
                      className || ""
                    );

                    return !inline && match ? (

                      <SyntaxHighlighter
                        style={tomorrow}
                        language={match[1]}
                        PreTag="div"
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>

                    ) : (

                      <code
                        className="bg-slate-200 px-2 py-1 rounded"
                        {...props}
                      >
                        {children}
                      </code>

                    );

                  },

                }}
              >

                {content}

              </ReactMarkdown>

            )}

          </article>

        </div>

      </div>

    </div>

  );

};

export default DocumentViewer;
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ArticleViewer = ({ filePath }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(filePath)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error("Error loading markdown file:", err));
  }, [filePath]);

  return (
    <div className="content">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export default ArticleViewer;

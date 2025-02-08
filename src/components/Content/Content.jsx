import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import "./content.css";
import ArticleViewer from "../Content/ArticleViewer.jsx";
import Cards from "../main/Cards.json";

const Content = () => {
  const { path } = useParams();

  const article = useMemo(() => Cards.find((item) => item.path === path), [
    path,
  ]);

  if (!article) {
    return <p>المقال غير موجود</p>;
  }

  return (
    <div className="content">
      <ArticleViewer filePath={`/Posts/${article.mdPath}`} />
    </div>
  );
};

export default Content;

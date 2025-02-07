import "./content.css";
import ArticleViewer from "../Content/ArticleViewer.jsx";

function Content() {
  return (
    <div className="content">
      <ArticleViewer filePath="/Posts/first-post.md" />
    </div>
  );
}

export default Content;

import { Link } from "react-router-dom";
import Cards from "./Cards.json";
import "./main.css";

const Main = () => {
  return (
    <main className="flex">
      <section className="flex right-section">
        {Cards.map((item, index) => (
          <Link
            key={index}
            className="link flex"
            to={`/content/${item.path}`}
          >
            <article className="card">
              <img
                width={266}
                src={item.image || "/default.jpg"}
                alt={item.title || "صورة افتراضية"}
              />
              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.title || "عنوان افتراضي"}</h1>
                <p className="sub-title">{item.description || "وصف افتراضي"}</p>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Main;

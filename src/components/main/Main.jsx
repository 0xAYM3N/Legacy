import { Link } from "react-router-dom";
import "./main.css";

const Main = () => {
  return (
    <main className="flex">
      <section className=" flex right-section">
        {[1, 2, 3].map((item) => {
          return (
            <Link className="link flex" to="/Content">
              <article key={item} className="  card">
                <img width={266} src="./1.jpg" alt="" />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">مرحبا بك عزيزي القارئ</h1>
                  <p className="sub-title">
                    مرحبا بك عزيزي القارئ
                  </p>
                </div>
              </article>
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default Main;

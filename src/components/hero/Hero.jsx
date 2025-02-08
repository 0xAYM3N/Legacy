import { Link } from "react-router-dom";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <img src="./me.jpg" className="avatar" alt="" />
        </div>

        <h1 className="title">
          مرحبا بك عزيزي القارئ
        </h1>
        <p className="sub-title">
          مرحبًا بك في عالمي الرقمي! من خلال هذه المدونة، سأشاركك رحلتي في عالم
          البرمجة والتقنيات الحديثة، وأسلط الضوء على المشاريع، المقالات،
          والنصائح التي تهم كل محب للتطوير
        </p>

        <div className="all-icons flex">
          <Link target="_blank" to="https://instagram.com/a.aymen_dev">
            <div className="icon icon-instagram"></div>
          </Link>
          <Link target="_blank" to="https://github.com/aymenprogrammer">
            <div className="icon icon-github"></div>
          </Link>
          <Link target="_blank" to="https://x.com/aymen_dev">
            <div className="icon icon-twitter">
            </div>
          </Link>
        </div>
      </div>

      <div className="right-section animation border">
        <img src="coding.gif" />
      </div>
    </section>
  );
};

export default Hero;

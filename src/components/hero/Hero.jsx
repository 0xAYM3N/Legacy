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
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-twitter"></div>
        </div>
      </div>

      <div className="right-section animation border">
        <img src="coding.gif" />
      </div>
    </section>
  );
};

export default Hero;

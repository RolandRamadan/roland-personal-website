import data from "../../../Data/MySkill.json";
import "./MySkills.css"

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skill.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.img} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h6 className="skills--section--title">{item.title}</h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
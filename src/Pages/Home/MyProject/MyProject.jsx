import data from "../../../Data/MyProject.json";
import "./MyProject.css"

export default function MyProject() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="section--heading">Recent Projects</h2>
        </div>
        <div>
          <a href="https://github.com/RolandRamadan" target="_blank" className="btn btn-github">
            <img src="./img/github-mark.svg" alt="githubLogo.svg" />
            Visit My GitHub
          </a>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.project.map((item, index) => (
          <a href={item.link} key={index} target="_blank" className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.img} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.subtitle}</p>
              </div>
              <p className="text-sm portfolio--link">
                Check It Out
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
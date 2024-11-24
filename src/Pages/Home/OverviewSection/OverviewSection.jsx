import "./OverviewSection.css"; 

export default function OverviewSection() {
    return (
        <section id="overviewSection" className="overview--section">
            <div className="overview--section--content">
                <span className="section--title">
                    <h1>
                        <div>Hey!</div>
                        <div>My Name is Roland</div>
                    </h1>
                    <p>I am an iOS Developer</p>
                    <div className="social--media--logo">
                        <img src="./img/envelope.fill.svg" alt="email--image" />
                        <img src="./img/github-mark.svg" alt="github--image" />
                        <img src="./img/icon-linkedin.svg" alt="linkedin--image" />
                    </div>
                </span>
                <span className="section--image">
                    <img src="./img/memoji.png" alt="section--image" />
                </span>
            </div>
        </section>
    )
}
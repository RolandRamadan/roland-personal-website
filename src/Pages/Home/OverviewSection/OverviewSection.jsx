import "./OverviewSection.css"; 

export default function OverviewSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey!<br/>My Name is Roland Ramadan</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">I'm a Mobile App</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
            I am a Computer Science Student from BINUS University,
              <br />  with a focus in iOS and Android Development
            </p>
          </div>
        </div>
        <div className="hero--section--img">
          <img src="./img/memoji.png" alt="Hero Section" />
        </div>
      </section>
    );
  }

// export default function OverviewSection() {
//     return (
//         <section id="overviewSection" className="overview--section">
//             <div className="overview--section--content">
//                 <span className="section--title">
//                     <h1>
//                         <div>Hey!</div>
//                         <div>My Name is Roland</div>
//                     </h1>
//                     <p>I am an iOS Developer</p>
//                     <div className="social--media--logo">
//                         <img src="./img/envelope.fill.svg" alt="email--image" />
//                         <img src="./img/github-mark.svg" alt="github--image" />
//                         <img src="./img/icon-linkedin.svg" alt="linkedin--image" />
//                     </div>
//                 </span>
//                 <span className="section--image">
//                     <img src="./img/memoji.png" alt="section--image" />
//                 </span>
//             </div>
//         </section>
//     )
// }
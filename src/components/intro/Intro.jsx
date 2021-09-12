import "./intro.scss";

export default function intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="container">
          {/* <div className="text">KUNAL SHAH</div> */}
          About Me
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There,I'am </h2>
          <h1>KUNAL SHAH.</h1>
          <h3>
            I'm a Software Engineering student in the Co-op program at Concordia
            University in Canada. At present I'm finishing my second year at
            university. I am looking for an internship to put my skills to test
            and jumpstart my career as a developer.
          </h3>
          <a href="#projects">
        <img src="assets/down.png" alt="" ></img>
        </a>
        </div>
     
       
      </div>
    </div>
  );
}

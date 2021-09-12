import "./work.scss";

export default function work() {
  return (
    <div className="work" id="work">
      <h1>Work Experience/ Volunteer Work</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <img src="assets/hdfc.jpg" alt="" />
          </div>
          <div className="center">
            Worked as a trainee at the counter. Responsibilities: direct
            customer interactions- handling routine transactions, cashing money
            / cheques and depositing money.
          </div>
          <div className="bottom">
            <h3>Part-time Teller</h3>
            <h4>June 2019 – December 2019</h4>
          </div>
        </div>

        <div className="card">
          <div className="top">
            <img src="assets/cu.png" alt="" />
          </div>
          <div className="center">
            Uploaded notes every week for my Chemistry lecture for Students with
            Disabilities.
          </div>
          <div className="bottom">
            <h3>Note Taker- Access Centre for Students with Disabilities.</h3>
            <h4>January 2020 – April 2020</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

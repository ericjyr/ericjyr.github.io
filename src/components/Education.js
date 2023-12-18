import sait from "../assets/img/sait-logo.png";
import bv from "../assets/img/bowvalley-logo.png";

export const Education = () => {
  return (
    <section className="education" id="education">
      <div className="container">
        <div className="row education-whole-bx">
            <div className="education-header-bx">
      <h2 className="education-heading">Education</h2>
      <p className="mx-auto">Uncover my educational path in software development, offering a rich tapestry of technical skills and diverse experiences.</p>
      </div>
          <div className="col-lg-6 col-sm-12">
            <div className="education-bx">
              <div className="education-content">
                <div className="row">
                  <div className="education-logo-bx col-xl-4 col-sm-12">
                    <img src={sait} alt="sait logo" className="education-logo" />
                  </div>
                  <div className="text-content col-xl-8 col-sm-12">
                    <h3>Southern Alberta Institute of Technology</h3>
                    <p><b>Diploma in Information Technology - Software Development</b></p>
                    <p>May 2022 - December 2023</p>
                    <p>GPA: 3.87</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="education-bx">
              <div className="education-content">
                <div className="row">
                  <div className="education-logo-bx col-xl-4 col-sm-12">
                    <img src={bv} alt="sait logo" className="education-logo" />
                  </div>
                  <div className="text-content col-xl-8 col-sm-12">
                    <h3>Bow Valley College</h3>
                    <p><b>Diploma in Licensed Practical Nursing</b></p>
                    <p>May 2017 - August 2019</p>
                    <p>GPA: 3.5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

    </section>
  );
};

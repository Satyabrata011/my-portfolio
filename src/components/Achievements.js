import colorSharp from "../assets/img/color-sharp.png";

export const Achievements = () => {
  return (
    <section className="achievement" id="achievements">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="achievement-bx wow zoomIn">
              <h2>Achievements</h2>

              <div className="achievement-item">
                <div className="ach-header">
                  <h3>Hybris Lubricants Framework</h3>
                  <span className="ach-year">2025</span>
                </div>
                <p className="ach-organization">
                  Wipro Technologies
                </p>
                <p className="ach-details">
                  Implemented a self-healing mechanism within the existing Hybris Lubricants automation 
                  framework for Chevron USA, enabling dynamic identification of web elements even when original 
                  locators fail, thereby improving test reliability and reducing maintenance effort. 
                </p>
              </div>

              <div className="achievement-item">
                <div className="ach-header">
                  <h3>Vocational Training</h3>
                  <span className="ach-year">2022</span>
                </div>
                <p className="ach-organization">
                  Nalco India Pvt. Ltd.
                </p>
                <p className="ach-details">
                  1 month of vocational training program in Systems Department Conducted by HOD, Training 
                  Centre at SMELTER DIVISION unit of NALCONAGAR, ANGUL. 
                </p>
              </div>

              <div className="achievement-item">
                <div className="ach-header">
                  <h3>OS-CIT</h3>
                  <span className="ach-year">2019</span>
                </div>
                <p className="ach-organization">
                OKCL, Prateek Institute, Angul
                </p>
                <p className="ach-details">
                  3 months of OS-CIT course offered by Odisha Knowledge Corporation Limited (OKCL). 
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};

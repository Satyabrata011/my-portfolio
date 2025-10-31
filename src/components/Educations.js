import colorSharp from "../assets/img/color-sharp.png";

export const Educations = () => {
  return (
    <section className="education" id="educations">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="education-bx wow zoomIn">
              <h2>Educations</h2>

              <div className="education-item">
                <div className="edu-header">
                  <h3>Bachelor's of Computer Application (BCA)</h3>
                  <span className="edu-year">2018 - 2021</span>
                </div>
                <p className="edu-college">
                  Creative Techno College, Angul
                </p>
                <p className="edu-details">
                  Major in Computer Applications.<br />
                  Affiliated to Utkal University, Bhubaneswar, Odisha.
                </p>
              </div>

              <div className="education-item">
                <div className="edu-header">
                  <h3>Higher Secondary (12th)</h3>
                  <span className="edu-year">2017 - 2019</span>
                </div>
                <p className="edu-college">
                  Saraswati Vidya Mandir, Angul
                </p>
                <p className="edu-details">
                  Major in Science and Information Technology.<br />
                  Council of Higher Secondary Education, Odisha.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};

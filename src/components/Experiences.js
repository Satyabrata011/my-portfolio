import colorSharp from "../assets/img/color-sharp.png";

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="experience-bx wow zoomIn">
              <h2>Experience</h2>

              <div className="experience-item">
                <div className="exp-header">
                  <h3>Software Development Engineer — Wipro Limited</h3>
                  <span className="exp-year">July 2024 - Present</span>
                </div>

                <ul className="exp-details">
                  <li>
                    Developed and maintained scalable and reusable code for web-based applications, ensuring performance and responsiveness.
                  </li>
                  <li>
                    Designed and executed test cases for functional, integration, and regression testing to validate software quality.
                  </li>
                  <li>
                    Enhanced an existing Hybris-based automation framework by implementing a self-healing mechanism to improve locator resilience (Chevron USA).
                  </li>
                  <li>
                    Collaborated with cross-functional teams including developers, QA, and product owners to deliver high-quality software within agile sprints.
                  </li>
                  <li>
                    Identified, logged, and tracked bugs using defect management tools and ensured timely resolution.
                  </li>
                  <li>
                    Automated repetitive test scenarios using Selenium, Maven, Cucumber BDD, and TestNG, reducing manual effort and time.
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};

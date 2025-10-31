import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cert1 from "../assets/img/API AWS cert.png";
import cert2 from "../assets/img/Git and Github LU cert.png";
import cert3 from "../assets/img/Node JS LU cert.png";
import cert4 from "../assets/img/Colud AI ORACLE cert.png";
import cert5 from "../assets/img/Java GLA cert.jpg";
import cert6 from "../assets/img/MS Copilot SN cert.jpg";
import bgPattern from "../assets/img/color-sharp.png";

export const Certifications = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const certifications = [
    {
      img: cert1,
      title: "API Gateway Serverless Applications",
      desc: "Successfully completed the API Gateway Certification course provided by Amazon Web Services (AWS). Training and Certification by Amazon.",
    },
    {
      img: cert2,
      title: "Git & Github Bootcamp", 
      desc: "Credential ID : LUEGGAPR124928, I am excited to share that I have completed the Git & Github Bootcamp course from Letsupgrade.in.",
    },
    {
      img: cert3,
      title: "Node.js Certificate",
      desc: "Credential ID : LUENJSFEB124881, I am excited to share that I have completed the Node.js Zero to Hero in 3 Days course from Letsupgrade.in. ",
    },
    {
      img: cert4,
      title: "Oracle Cloud Infrastructure AI Associate",
      desc: "I have earned the Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate! ",
    },
    {
      img: cert5,
      title: "Java Programming",
      desc: "I have successfully completed the 'Java Programming' course offered by Great Learning Academy. ",
    },
    {
      img: cert6,
      title: "Microsoft Copilot ",
      desc: "I have Successfully completed the Certification of Live MasterClass on Microsoft Copilot. ",
    },
  ];

  return (
    <section className="certifications-section" id="certifications">
      <div className="container">
        <div className="certifications-content">
          <h2>Certifications</h2>
          <p>
            A few of the certifications I’ve earned along the way that helped me
            sharpen my skills.
          </p>

          <Carousel
            responsive={responsive}
            infinite={true}
            className="certifications-slider"
          >
            {certifications.map((cert, index) => (
              <div className="certificate-card" key={index}>
                <img src={cert.img} alt={cert.title} className="certificate-img" />
                <h5>{cert.title}</h5>
                <p>{cert.desc}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <img className="cert-bg" src={bgPattern} alt="Background" />
    </section>
  );
};

import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div 
        className="proj-imgbx" 
        style={{ position: "relative", cursor: "pointer", overflow: "hidden", borderRadius: "10px" }}
      >
        <img 
          src={imgUrl} 
          alt={title} 
          style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "10px" }} 
        />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {link && (
            <button 
              onClick={() => window.open(link, "_blank")} 
              style={{
                marginTop: "10px",
                backgroundColor: "#fff",
                color: "#000",
                border: "none",
                borderRadius: "5px",
                padding: "6px 12px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "#ffb703"}
              onMouseOut={(e) => e.target.style.backgroundColor = "#fff"}
            >
              View Project
            </button>
          )}
        </div>
      </div>
    </Col>
  );
};

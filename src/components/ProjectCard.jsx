import React from "react";

const ProjectCard = ({ imageUrl, title, description, redirectUrl }) => {
  const handleCardClick = () => {
    window.location.href = redirectUrl;
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={imageUrl} alt="Project photo" />

      <div className="title-description" style={{ maxWidth: "500px" }}>
        <a
          href="https://github.com/dannadlerp/weatherTracker/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>{title}</strong>
        </a>
        <br />
        <br />
        {description}
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";

const Feacture = ({ title, description, image }) => {
  return (
    <div className="Feacture">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Feacture;

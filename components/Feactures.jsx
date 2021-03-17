import React from "react";
import Feacture from "./Feacture";

import pageData from "../pageData.json";
const { HomeFeactures } = pageData;
const Feactures = () => {
  return (
    <div className="Section Wrapper">
      <h2 className="Section__Title">Nos diferenciamos por nuestros valores</h2>
      <div className="Feactures__Items">
        {HomeFeactures.map((feacture, i) => {
          return (
            <Feacture
              key={i}
              title={feacture.title}
              description={feacture.description}
              image={feacture.image}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Feactures;

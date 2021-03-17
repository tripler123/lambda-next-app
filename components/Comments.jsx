import React from "react";

const Comments = () => {
  return (
    <div className="Dark" style={{ margin: "5rem 0px" }}>
      <div className="Comments ">
        <div className="Comments__Left">
          <div className="Comment">
            <div className="Comment__User">
              <div className="Comment__User--avatar">
                <img
                  src="assets/images/user-comments.png"
                  alt="comentario de usuario"
                />
                <img
                  className="country"
                  src="assets/images/country.png"
                  alt="comentario de usuario"
                />
              </div>
              <div className="Comment__User--Information">
                <h3>Sergio Villanueva-Meyer</h3>
                <p>Coordinar BIM</p>
              </div>
            </div>
            <p>
              El uso de la automatización me ha ayuda a reducir tiempos de
              manera impensable en los proyectos no solo BIM que trabajo
            </p>
          </div>
        </div>
        <div className="Comments__Right">
          <h2>Ya somos +100 profesionales que impulsaron su carrera </h2>
          <p>
            Nos comprometemos cambiar la industria de la construcción de habla
            hispana
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;

import Button from "../components/Button";

const Hero = ({ title, description, image, lambda }) => {
  return (
    <div className="Hero Wrapper">
      <div className="Hero__Left">
        <h1>Elevemos la industria, Mejorando la educación</h1>
        <p>
          Creemos juntos la nueva generación de profesionales que revolucionaran
          la industria de la construcción. Caminemos juntos hacia el camino el
          éxito analizando las mejores practicas de proyectos reales.
        </p>
        <Button />
      </div>
      <div className="Hero__Right">
        <img src={image} alt="" />
      </div>
      <img className="Hero__Lambda" src={lambda} alt="" />
    </div>
  );
};

export default Hero;

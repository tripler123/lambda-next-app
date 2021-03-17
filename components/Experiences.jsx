import pageData from "../pageData.json";

const Experiences = () => {
  const { ExperiencesItems } = pageData;
  return (
    <div className="Dark" style={{ padding: "5rem 0" }}>
      <div className="Section Wrapper">
        <h2 className="Section__Title">
          Cursos cortos, prácticos y especializados
        </h2>
        <div className="Experiences__Items">
          {ExperiencesItems.map((experience, i) => {
            return (
              <div className="Experience" key={i}>
                <img src="assets/images/lambda-icon.svg" alt="lambda-icon" />
                <p>{experience}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experiences;

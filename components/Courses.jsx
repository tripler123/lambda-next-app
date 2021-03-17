import Course from "./Course";
import pageData from "../pageData.json";
import Button from "../components/Button";

const { HomeCourses } = pageData;

const Courses = () => {
  return (
    <div className="Section Wrapper">
      <h2 className="Section__Title">
        Cursos cortos, prácticos y especializados
      </h2>
      <div className="Courses__Items">
        {HomeCourses.map((item, i) => {
          return (
            i < 6 && (
              <Course
                key={i}
                autor={item.autor}
                price={item.price}
                title={item.title}
                image={item.image}
              />
            )
          );
        })}
      </div>
      <div className="Courses__Buttons">
        <Button />
        <button className="Courses__Buttons--More-course">Más Cursos</button>
      </div>
    </div>
  );
};

export default Courses;

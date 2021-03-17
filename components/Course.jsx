const Course = ({ title, autor, price, image }) => {
  return (
    <div className="Course">
      <img src={image} alt={title} />
      <div className="Course__Content">
        <div className="Course__Content--Top">
          <div className="Autor">
            <img src="assets/images/user-comments.png" alt="" />
            <p>{autor}</p>
          </div>
          <p>{price}</p>
        </div>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Course;

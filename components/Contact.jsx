import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div style={{ padding: "5rem 0" }}>
      <div className="Section Wrapper">
        <h2 className="Section__Title">Contáctanos</h2>
        <p className="Section__Subtitle">
          Registra tus datos y nos pondremos en contacto para brindarte más
          información de nuestros cursos especializados
        </p>
        <form onSubmit={handleSubmit} className="Contact__Inputs">
          <div className="form-control">
            <img src="assets/images/user-icon.svg" alt="user information" />
            <input
              name="name"
              className="Contact__Inputs--Input"
              type="text"
              placeholder="Nombres y apellidos"
              onChange={handleChange}
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: "1.2rem",
            }}
          >
            <div className="form-control">
              <img src="assets/images/email-icon.svg" alt="email information" />
              <input
                name="email"
                className="Contact__Inputs--Input"
                type="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <img src="assets/images/phone-icon.svg" alt="phone information" />
              <input
                name="phone"
                className="Contact__Inputs--Input"
                type="number"
                placeholder="Celular"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-control">
            <img
              className="text-area-image"
              src="assets/images/text-area-icon.svg"
              alt="user information"
            />
            <textarea
              name="description"
              rows="6"
              className="Contact__Inputs--Text-area"
              name=""
              placeholder="Curso de Interes"
              onChange={handleChange}
            />
          </div>
          <button className="Contact__Inputs--Button" type="submit">
            Solicita Información
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

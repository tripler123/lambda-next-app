import Link from "next/link";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__Content">
        {/* ***** Left Content ***** */}
        <div className="Footer__Content--Left">
          <img src="assets/images/lambda-white.svg" alt="" />
          <p>
            Nos comprometemos cambiar la industria de la construcción de habla
            hispana
          </p>
          <div className="Social-media">
            <a target="_blank" href="mailto:informes@lambda.com.pe">
              <img src="assets/images/email.svg" alt="email" />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/LambdaInnovacion/"
            >
              <img src="assets/images/facebook.svg" alt="facebook" />
            </a>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=51954904461&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20curso"
            >
              <img src="assets/images/whatsapp.svg" alt="whatsapp" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCB1cArVscPlRRBS7Sa-3Gqw"
            >
              <img src="assets/images/youtube.svg" alt="youtube" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/company/65832995">
              <img src="assets/images/linkedin.svg" alt="linkedin" />
            </a>
          </div>
        </div>
        {/* ***** Center Content ***** */}
        <div className="Footer__Content--Center">
          <h3>Contenido</h3>
          <Link href="/cursos">
            <a>Cursos</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <a
            href="https://www.youtube.com/channel/UCB1cArVscPlRRBS7Sa-3Gqw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
          </a>
          <Link href="/cursos/123">
            <a>★ Automatización de Procesos con la API de Revit</a>
          </Link>
        </div>
        {/* ***** Right Content ***** */}
        <div className="Footer__Content--Right">
          <img src="assets/images/albert-einstein.png" alt="" />
          <div className="Quote">
            <p>"Cualquier Momento es perfecto para aprender algo nuevo"</p>
            <br />
            <p>- Albert Eistem</p>
          </div>
        </div>
      </div>
      <div className="Make">
        <p>
          Desde Lambda con{" "}
          <span style={{ color: "#13aa52", fontSize: "18px" }}> ♥ </span> para
          profesionales de habla hispana
        </p>
      </div>
    </div>
  );
};

export default Footer;

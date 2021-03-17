import React from "react";
import Link from "next/link";
import Button from "./Button";

const Header = () => {
  return (
    <nav className="Navbar">
      <section className="Navbar__Header Wrapper">
        <img
          className="Navbar__Header--logo"
          src="/assets/images/lambda-logo.svg"
          alt="lambda logo"
        />
        <div className="Navbar__Header--links">
          <Link href="/cursos">
            <a>Cursos</a>
          </Link>
          <Link href="/curso">
            <a>Blog</a>
          </Link>
          <Link href="/curso">
            <a>Certificados</a>
          </Link>
          <Button />
        </div>
      </section>
    </nav>
  );
};

export default Header;

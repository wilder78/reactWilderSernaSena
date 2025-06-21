import React from "react";
import "./contacts.css";
import ContactDetails from "./ContactDetails";
import Advisors from "./Advisors";
import FloatingButton from "../../shared/components/floatingButton/FloatingButton";

const Contacts = () => {
  return (
    <>
      <section className="hero-section text-center">
        <div className="container position-relative">
          <h1 className="display-3 fw-bold">Nuestros Asesores</h1>
          <p className="lead">
            Expertos en relojería disponibles en todo el país para brindarte
            atención personalizada y soluciones a medida.
          </p>
        </div>
      </section>

      <Advisors />
      <ContactDetails />
      <FloatingButton />
    </>
  );
};

export default Contacts;

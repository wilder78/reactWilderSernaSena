import React from "react";
import "./Contacts.css";
import ContactDetails from "./ContactsSections/ContactDetails";
import Advisors from "./ContactsSections/Advisors";
import FloatingButton from "../../features/inventory/components/FloatingButton/FloatingButton";

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

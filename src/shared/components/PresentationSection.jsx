import "./PresentationSection.css";

function PresentationSection({ title, description }) {
  return (
    <section className="presentation">
      <div className="container one-presentation">
        <h2 className="title-presentation">{title}</h2>
        <p className="text-section">{description}</p>
      </div>
    </section>
  );
}

export default PresentationSection;

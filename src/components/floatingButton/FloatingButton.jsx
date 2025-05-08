// FloatingButton --/-- Boton flotante
import "./FloatingButton.css";

function FloatingButton() {
  return (
    <button className="floating-btn" onClick={() => alert("¡Botón flotante!")}>
      +
    </button>
  );
}

export default FloatingButton;

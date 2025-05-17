import WhatsAppContactButton from "./WhatsAppContactButton";
import "./ButtonComponents.css";

function WhatsAppPopup({ contacts, onClose }) {
  return (
    <div className="whatsapp-popup">
      <div className="whatsapp-popup-content">
        <button className="close-popup" onClick={onClose}>
          X
        </button>
        <h4>Elige una línea de atención:</h4>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              <WhatsAppContactButton
                label={contact.label}
                number={contact.number}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WhatsAppPopup;

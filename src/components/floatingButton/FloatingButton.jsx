import React, { useState } from "react";
import WhatsAppPopup from "./ButtonComponents/WhatsAppPopup";
import "./FloatingButton.css";

function FloatingButton() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const whatsappContacts = [
    { label: "Soporte Técnico", number: "573008020969" },
    { label: "Ventas", number: "573111223344" },
    { label: "Atención al Cliente", number: "573300445566" },
  ];

  return (
    <div>
      <button
        className="floating-btn"
        onClick={() => setPopupVisible(!isPopupVisible)}
      >
        <i className="bi bi-whatsapp"></i>
      </button>

      {isPopupVisible && (
        <WhatsAppPopup
          contacts={whatsappContacts}
          onClose={() => setPopupVisible(false)}
        />
      )}
    </div>
  );
}

export default FloatingButton;

// import React, { useState } from "react";
// import "./FloatingButton.css";

// function FloatingButton() {
//   const [isPopupVisible, setPopupVisible] = useState(false);

//   const openWhatsApp = (phoneNumber) => {
//     window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, "_blank");
//   };

//   const whatsappContacts = [
//     { label: "Soporte Técnico", number: "573008020969" },
//     { label: "Ventas", number: "573111223344" },
//     { label: "Atención al Cliente", number: "573300445566" },
//   ];

//   return (
//     <div>
//       <button
//         className="floating-btn"
//         onClick={() => setPopupVisible(!isPopupVisible)}
//       >
//         <i className="bi bi-whatsapp"></i>
//       </button>

//       {isPopupVisible && (
//         <div className="whatsapp-popup">
//           <div className="whatsapp-popup-content">
//             <button
//               className="close-popup"
//               onClick={() => setPopupVisible(false)}
//             >
//               <i class="bi bi-x-circle"></i>
//             </button>
//             <h4>Elige una línea de atención:</h4>
//             <ul>
//               {whatsappContacts.map((contact, index) => (
//                 <li key={index}>
//                   <button onClick={() => openWhatsApp(contact.number)}>
//                     {contact.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default FloatingButton;

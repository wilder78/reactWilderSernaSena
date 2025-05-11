import React from "react";

function WhatsAppContactButton({ label, number }) {
  const handleClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${number}`, "_blank");
  };

  return <button onClick={handleClick}>{label}</button>;
}

export default WhatsAppContactButton;

import React, { useState } from "react";
import { WhatsAppMenu } from "./ButtonComponents/WhatsAppMenu";
import { WhatsAppToggleButton } from "./ButtonComponents/WhatsAppToggleButton";
import "./FloatingButton.css";

export const FloatingButton = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible((prev) => !prev);
  const closeMenu = () => setMenuVisible(false);

  return (
    <div className="whatsapp-menu">
      <WhatsAppToggleButton onClick={toggleMenu} />
      {menuVisible && <WhatsAppMenu onClose={closeMenu} />}
    </div>
  );
};

export default FloatingButton;

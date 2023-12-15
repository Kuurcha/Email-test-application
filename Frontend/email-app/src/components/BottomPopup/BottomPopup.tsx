import React, { useState } from "react";
import "./BottomPopup.css";
interface BottomPopupProps {
  isVisible: boolean;
  onToggleVisibility: (isVisible: boolean) => void;
  content: string;
}
const BottomPopup: React.FC<BottomPopupProps> = ({ isVisible, onToggleVisibility, content }) => {
  const hidePopup = () => {
    onToggleVisibility(false);
    content = "";
  };

  return (
    <div className={`bottom-popup ${isVisible ? "visible" : ""}`}>
      <div className="popup-content">
        <p>{content}</p>
        <button onClick={hidePopup}>Close</button>
      </div>
    </div>
  );
};

export default BottomPopup;

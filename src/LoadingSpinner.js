import React from "react";
import "./loadingspinner.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner">
      </div>
      <div className="loading-text">Loading...</div>
   
    </div>
  );
}
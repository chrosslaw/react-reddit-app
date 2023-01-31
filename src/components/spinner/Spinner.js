import React from "react";

const spinnerIconUrl =
  "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/spinner.png";

export default function Spinner() {
  return (
    <div>
      <img src={spinnerIconUrl} alt="Post's loading" className="spinner" />
    </div>
  );
}

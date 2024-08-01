import { useState, useEffect } from "react";

function MainHeader() {
  const [headerText, setHeaderText] = useState("");

  useEffect(() => {
    fetch("https://fastvert.onrender.com/api/header")
      .then((response) => response.json())
      .then((data) => setHeaderText(data.text))
      .catch((err) => console.error("Error fetching header text:", err));
  }, []);

  return (
    <div className="flex-1 text-center p-10 lg:p-20">
      <h2 className="text-4xl lg:text-6xl font-bold mb-4">{headerText}</h2>
      <p className="mb-4 lg:mb-8">
        Unlock the Power of Mobile Innovation. Crafted with Precision, Designed
        for Success.
      </p>
      <button className="bg-red-500 text-white py-2 px-4 rounded lg:py-3 lg:px-6 lg:text-lg">
        CONTACT US
      </button>
    </div>
  );
}
export default MainHeader;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminPanel() {
  const [text, setText] = useState("");
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Make a POST request to update the header text
    fetch("https://fastvert.onrender.com/api/header", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }), // Send the header text in the request body
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Header text updated!"); // Show success message
        console.log(data); // Log response data
        navigate("/"); // Navigate to home page upon successful update
      })
      .catch((err) => {
        alert("Error updating header text"); // Show error message
        console.error("Error:", err); // Log error
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
      <h1 className="text-xl font-semibold text-gray-900 mb-4">Admin Panel</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter new header text"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
        >
          Update Header
        </button>
      </form>
    </div>
  );
}

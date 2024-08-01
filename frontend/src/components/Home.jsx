import MainHeader from "./Header";
import phoneImg from "../assets/fastvert1.png";

import { useNavigate } from "react-router-dom";
function Homepage() {
  const navigate = useNavigate(); // Hook to trigger navigation programmatically

  return (
    <>
      <header className="flex justify-between items-center p-5 lg:p-10">
        <h1 className="text-lg lg:text-2xl font-bold">Mariox Software</h1>
        <nav>
          <ul className="flex gap-4 lg:gap-8">
            <li>
              <button
                style={{ color: "red" }}
                onClick={() => navigate("/admin")}
              >
                Admin
              </button>
            </li>
            <li>Services</li>
            <li>About Us</li>
            <li>Case Study</li>
          </ul>
        </nav>
      </header>
      <div className="flex flex-col lg:flex-row">
        <div>
          <MainHeader />
        </div>
        <div className="flex-1 p-5 lg:p-10">
          <img
            src={phoneImg}
            alt="Mobile phone showcasing apps"
            // className="max-w-full h-auto"
          />
        </div>
      </div>
    </>
  );
}

export default Homepage;

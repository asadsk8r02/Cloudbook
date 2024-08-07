import React, { useEffect } from "react";
import Notes from "./Notes";

const Home = (props) => {
  const { showAlert } = props;

  useEffect(() => {
    document.body.style.margin = 0;
    document.body.style.padding = 0;
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.overflow = "hidden"; // Ensure no scrollbars appear

    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    `;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    document.body.style.background =
      "linear-gradient(270deg, #e0eafc, #cfdef3)";
    document.body.style.backgroundSize = "400% 400%";
    document.body.style.animation = "gradient 15s ease infinite";

    return () => {
      document.body.style.background = "";
      document.body.style.animation = "";
    };
  }, []);

  return (
    <div>
      <Notes showAlert={showAlert} />
    </div>
  );
};

export default Home;

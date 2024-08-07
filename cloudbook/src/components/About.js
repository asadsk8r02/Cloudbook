import React, { useEffect } from "react";

const About = () => {
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

  const containerStyle = {
    padding: "20px",
    background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
    borderRadius: "10px",
    maxWidth: "800px",
    margin: "50px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const headingStyle = {
    color: "#333",
    fontSize: "2.5em",
    marginBottom: "20px",
  };

  const subHeadingStyle = {
    color: "#555",
    fontSize: "1.8em",
    marginTop: "20px",
  };

  const paragraphStyle = {
    color: "#666",
    lineHeight: "1.6",
    marginBottom: "20px",
  };

  const listStyle = {
    color: "#666",
    listStyleType: "disc",
    marginLeft: "20px",
  };

  const listItemStyle = {
    marginBottom: "10px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About CloudBook</h1>
      <p style={paragraphStyle}>
        Welcome to CloudBook, your personal online note storage solution. With
        CloudBook, you can securely store and access your notes from anywhere,
        anytime. Our platform ensures that your notes are safe, easily
        retrievable, and always up-to-date.
      </p>
      <h2 style={subHeadingStyle}>Features</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}>Secure cloud storage for all your notes</li>
        <li style={listItemStyle}>
          Access your notes from any device with an internet connection
        </li>
        <li style={listItemStyle}>
          User-friendly interface for easy note management
        </li>
        <li style={listItemStyle}>
          Quick search functionality to find your notes effortlessly
        </li>
        <li style={listItemStyle}>Automatic backups to prevent data loss</li>
      </ul>
      <h2 style={subHeadingStyle}>Our Mission</h2>
      <p style={paragraphStyle}>
        At CloudBook, our mission is to provide a reliable and convenient way
        for individuals to manage their notes. We believe in the power of
        technology to simplify life, and we are dedicated to delivering a
        service that helps you stay organized and efficient.
      </p>
      <h2 style={subHeadingStyle}>Get Started</h2>
      <p style={paragraphStyle}>
        Ready to take control of your notes? Sign up today and experience the
        convenience of CloudBook.
      </p>
    </div>
  );
};

export default About;

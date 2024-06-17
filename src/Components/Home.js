import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import sh1 from "../Assets/shape-1.svg";
import sh2 from "../Assets/shape-2.svg";
import sh3 from "../Assets/shape-3.svg";
import sh6 from "../Assets/shape-6.svg";
import homeImg from "../Assets/bg.png";
import { Link } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const wrapper = {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
    position: "relative",
    backgroundColor: darkMode ? "#121212" : "#1565C0",
    color: darkMode ? "#FFFFFF" : "#000000",
    transition: "background-color 0.3s, color 0.3s",
  };

  const btnStyle = {
    backgroundColor: darkMode ? "#64B5F6" : "#0077FF",
    border: 0,
    marginTop: "20px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  };

  const shapeStyle = darkMode ? { filter: "invert(1)" } : {};

  return (
    <div>
      <div
        style={{
          backgroundColor: darkMode ? "#121212" : "#1565C0",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: "1000",
          }}
        >
          <div className="toggle" onClick={toggleDarkMode}>
            <input type="checkbox" checked={darkMode} readOnly />
            <span className="button"></span>
            <span className="label">{darkMode ? "☽" : "☼"}</span>
          </div>
        </div>
        <Container style={wrapper}>
          <img
            src={sh1}
            alt="fig1"
            style={{
              ...shapeStyle,
              left: 0,
              right: 0,
              margin: "auto",
              top: "90px",
              position: "absolute",
            }}
            className="shape"
          />
          <img
            src={sh2}
            alt="fig2"
            style={{
              ...shapeStyle,
              right: "380px",
              top: "280px",
              position: "absolute",
            }}
            className="shape"
          />
          <img
            src={sh3}
            alt="fig3"
            style={{
              ...shapeStyle,
              right: "88px",
              top: "230px",
              position: "absolute",
            }}
            className="shape"
          />
          <img
            src={sh6}
            alt="fig6"
            style={{
              ...shapeStyle,
              right: "272px",
              bottom: "0px",
              position: "absolute",
            }}
            className="shape"
          />
          <Row
            className="text-center"
            style={{
              alignItems: "center",
              paddingTop: "100px",
              paddingBottom: "50px",
            }}
          >
            <Col md={6}>
              <h2
                style={{
                  color: darkMode ? "#BBDEFB" : "#67AEFF",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Code Website From Anywhere
              </h2>
              <h5
                style={{
                  color: darkMode ? "#CFD8DC" : "#B0BEC5",
                  paddingTop: "10px",
                  marginBottom: "30px",
                }}
              >
                With this online code editor, you can edit HTML, CSS and
                JavaScript code, and live preview of the site instantly.
              </h5>
              <Button
                variant="primary"
                style={btnStyle}
                as={Link}
                to="/web"
                className="btn-hover"
              >
                Web Editor
              </Button>

              <h2
                style={{
                  color: darkMode ? "#BBDEFB" : "#67AEFF",
                  paddingTop: "50px",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Generate README in Seconds
              </h2>
              <h5
                style={{
                  color: darkMode ? "#CFD8DC" : "#B0BEC5",
                  paddingTop: "10px",
                  marginBottom: "30px",
                }}
              >
                Online markdown editor, with a custom toolbar to help you make
                your readme easily.
              </h5>
              <Button
                variant="primary"
                style={btnStyle}
                as={Link}
                to="/markdown"
                className="btn-hover"
              >
                Markdown Editor
              </Button>
            </Col>
            <Col md={6}>
              <img
                src={homeImg}
                className="img-fluid"
                alt="main img"
                style={{
                  padding: "30px",
                  borderRadius: "50%",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;

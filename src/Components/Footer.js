import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Footer() {
  var date = new Date();
  var year = date.getFullYear();
  return (
    <div>
      <Container fluid className="footer">
        {" "}
        {/* copyright © {year} |  */}
        made with <i
          className="far fa-heart"
          style={{ color: "#3ABEF9" }}
        ></i>{" "}
        <a
          href="https://ibrahimelgibran.com/"
          style={{ color: "rgba(250, 230, 194, 0.972)" }}
        >
          iegcode
        </a>
      </Container>
    </div>
  );
}

export default Footer;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bogdan Zogovic </span>
            from <span className="purple"> Podgorica, Montenegro.</span>
            <br />
            I have been developing for the past 4 years of my life.
            <br />
            I moved to Miami, Florida 6 years ago, from Montenegro.
            
            <br />
            <br />
            Apart from being a programmer, some other hobbys:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Carspotting
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            ""{" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

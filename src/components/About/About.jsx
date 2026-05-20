import "./About.css";
import headshot from "../../assets/headshot.jpeg";

function About() {
  return (
    <div className="about">
      <img className="about__image" src={headshot} />
      <div className="about__author_container">
        <h1 className="about__author_heading">About the author</h1>
        <p className="about__author_text">
          Hi, I’m David Bedoya, a software engineering student at TripleTen
          focused on frontend and full-stack development with React, JavaScript,
          HTML, CSS, and API integration.
          <br />
          <br />
          This project helped me strengthen my skills in React components,
          routing, responsive design, forms, and working with external APIs as I
          continue preparing for a career in software engineering.
        </p>
      </div>
    </div>
  );
}
export default About;

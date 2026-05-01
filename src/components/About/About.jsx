import "./About.css";

function About() {
  return (
    <div className="about">
      <img className="about__image" />
      <div className="about__author_container">
        <h1 className="about__author_heading">About the author</h1>
        <p className="about__author_text">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
          <br />
          <br />
          You can also talk about your experience with TripleTen, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </div>
  );
}
export default About;

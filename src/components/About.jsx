import styles from './About.module.css';
import aboutImage from '/about-image.webp'; 

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.imageContainer}>
        <img src={aboutImage} alt="About Me" className={styles.profileImage} />
      </div>
      <div className={styles.textContainer}>
        <h2>About Me</h2>
        <p>
          I am a Information Technology Student currently in my 2nd year at Western Institute of Technology.
           I enjoy exploring new technologies and building interesting projects.
          Beyond coding, I'm also an avid frisbee player, which teaches me teamwork and strategic thinking.
        </p>
        <h2>Skills</h2>
        <p>HTML | CSS | Back End DEVELOPER</p>
      </div>
    </section>
  );
}

export default About;
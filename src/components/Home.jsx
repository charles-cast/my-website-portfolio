import styles from './Home.module.css';
import profileImage from '/profile.jpg';

function Home() {
  return (
    <section id="home" className={styles.home}>
      <div>
        <h2>Hi, Im, </h2>
        <h1>Charles Etino Castillano</h1>
        <p>Studied at Western Institute of Technology.</p>
        <p>Information Technology Student.</p>
      </div>
      <div className={styles.imageContainer}>
        <img src={profileImage} alt="Profile" className={styles.profileImage} />
      </div>
    </section>
  );
}

export default Home;
import styles from './Project.module.css';

function Projects() {
  const projects = [
    {
      title: 'Portfolio',
      description: 'My Portfolio Website using React&Vite',
      link: 'https://charles-cast.github.io/my-website-portfolio/', 
    },
    {
      title: 'CEME',
      description: 'Campus Event Mangagement System Website.',
      link: 'https://campus-event-management--ha5ne09.gamma.site/', 
    },
    {
      title: 'TEST WEBSITE',
      description: '404 website | TEST.',
      link: 'https://mcalpinehouse.com/404', 
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectBox}>
            <div className={styles.projectDetails}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.projectActions}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.seeMoreButton}>
                  See More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
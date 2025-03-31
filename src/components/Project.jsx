import styles from './Project.module.css';

function Projects() {
  const projects = [
    {
      title: 'Portfolio',
      description: 'A web application for managing tasks.',
    },
    {
      title: 'Project 2',
      description: 'A mobile app for tracking fitness goals.',
    },
    {
      title: 'Project 3',
      description: 'An API for data analysis and visualization.',
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

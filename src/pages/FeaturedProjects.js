// import working from '../img/character 10.svg';
import github from '../img/github-brands.svg';
import link from '../img/external-link-alt-solid.svg';

const FeaturedProjects = () => {
  return (
    <section className='projects' id='projects'>
      <h2 className='section-title' data-aos='zoom-in' data-aos-duration='1500'>
        Some Things I've Built
      </h2>

      <div className='section-content'>
        {/* Project */}
        <div
          className='featured-project'
          data-aos='flip-left'
          data-aos-duration='800'
        >
          <h3>Project Explorer Web App</h3>
          <p className='section-text'>
            A web app that allows signed-in users to store, 
            search and explore projects for ease of accessibility. 
            Built both frontend and backend components with MERN technologies
          </p>
          <div className='technologies'>
            <p>React</p>
            <p>Node</p>
            <p>Express</p>
            <p>MongoDB</p>
          </div>
          <div className='project-social'>
            <a href='https://github.com/SanusiWasiu/edconnect-weekly/tree/Capstone-project'>
              <img src={github} alt='' />
            </a>
            <a href='https://solvent-project.herokuapp.com/'>
              <img src={link} alt='' />
            </a>
          </div>
        </div>
        {/* End of Project */}

        {/* Project */}
        <div
          className='featured-project'
          data-aos='flip-left'
          data-aos-duration='1000'
        >
          <h3>Arabic School Website</h3>
          <p className='section-text'>
            A responsive school website where users can enroll and enquire about the school.
            Users are also able to view the profile of the school Alumni and get motivated.
          </p>
          <div className='technologies'>
            <p>React</p>
            <p>Styled Component</p>
            <p>React-Bootstrap</p>
          </div>
          <div className='project-social'>
            <a href='https://github.com/SanusiWasiu/mumtiah-madrasah'>
              <img src={github} alt='' />
            </a>
            <a href='https://6182ea8cb6c21109ddcdd46f--ecstatic-panini-696f34.netlify.app/'>
              <img src={link} alt='' />
            </a>
          </div>
        </div>
        {/* End of Project */}

        {/* Project */}
        <div
          className='featured-project'
          data-aos='flip-left'
          data-aos-duration='1200'
        >
          <h3>Task Manager App Clone</h3>
          <p className='section-text'>
            A clone of task manager app created by John Smilga, 
            A web app that makes use of RESTAPI to create, edit and delete tasks.
          </p>
          <div className='technologies'>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>JavaScript</p>
            <p>Node</p>
            <p>Express</p>
          </div>
          <div className='project-social'>
            <a href='https://github.com/SanusiWasiu/node-express-course/tree/main/03-task-manager/starter'>
              <img src={github} alt='' />
            </a>
            <a href='https://github.com/SanusiWasiu/node-express-course/tree/main/03-task-manager/starter'>
              <img src={link} alt='' />
            </a>
          </div>
        </div>
        {/* End of Project */}
      </div>
    </section>
  );
};

export default FeaturedProjects;

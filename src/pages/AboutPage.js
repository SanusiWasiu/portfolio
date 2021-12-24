import about from '../img/drawkit-support-woman-colour.svg';
import caretright from '../img/caret-right-solid.svg';

const AboutPage = () => {
  return (
    <section className='about-page' id='about'>
      <div className='section-center'>
        <h2
          className='section-title'
          data-aos='zoom-in'
          data-aos-duration='1500'
        >
          About Me
        </h2>
        <div className='section-content'>
          <img src={about} alt='' />
          <p className='section-text'>
            I have keen interest in building web apps and websites. I am looking for my first web development role.
            <br />
            I am a self-taught front-end developer with knowledge of backend development technologies.
            <br />
            I currently possess a Bsc degree in Petroleum and Gas Engineering with 2 
            years experience in the technology industry working as Data annotator and software quality assurance Engineer
            <br />
            Here are a few technologies I've been working with:
          </p>

          <div className='technologies'>
            <div className='single-technology'>
              <img src={caretright} alt='' />
              <p>HTML5</p>
            </div>
            <div className='single-technology'>
              <img src={caretright} alt='' />
              <p>CSS3</p>
            </div>
            <div className='single-technology'>
              <img src={caretright} alt='' />
              <p>JavaScript</p>
            </div>
            <div className='single-technology'>
              <img src={caretright} alt='' />
              <p>React</p>
            </div>
            <div className='single-technology'>
              <img src={caretright} alt='' />
              <p>Python</p>
              <div className='single-technology'>
              <img src={caretright} alt='' />
              <p>Node</p>
              <div className='single-technology'>
              <img src={caretright} alt='' />
              <p>MongoDB</p>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

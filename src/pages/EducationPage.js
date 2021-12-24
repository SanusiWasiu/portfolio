import react from '../img/university-of-lagos-logo.png';
import nodejs from '../img/Edconnect-logo.png';
// import user from '../img/user-circle-solid.svg';

const EducationPage = () => {
  return (
    <section className='blogpage' id='blog'>
      <div className='section-center'>
        <h2
          className='section-title'
          data-aos='zoom-in'
          data-aos-duration='1500'
        >
          Education
        </h2>
        <article className='blog-articles'>
          {/* Single Article */}
          <div className='single-article'>
            <div className='article-title'>
              <img src={react} alt='' />
              <h4>University of Lagos</h4>
            </div>
            <div className='article-text'>
              <p>
                BSc. Petroleum and Gas Engineering (2014 - 2019)
              </p>
            </div>
          </div>
          {/* End of single article */}

          {/* Single Article */}
          <div className='single-article'>
            <div className='article-title'>
              <img src={nodejs} alt='' />
              <h4>EdConnect</h4>
            </div>
            <div className='article-text'>
              <p>Full Stack Web Development Micro-Degree</p>
            </div>
          </div>
          {/* End of single article */}

          {/* Single Article */}
          {/* <div className='single-article'>
            <div className='article-title'>
              <img src={user} alt='' />
              <h4>My Thoughts on Resumes</h4>
            </div>
            <div className='article-text'>
              <p>
                Why good resumes are hard to write, and essential to a great
                career
              </p>
            </div>
          </div> */}
          {/* End of single article */}
        </article>
        <a href='https://drive.google.com/file/d/1lHIhSBBQymiXqcSXhf9Ee3r9lD52PAE6/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
          <button className='btn btn-blog'>View my Resume</button>
        </a>
      </div>
    </section>
  );
};

export default EducationPage;

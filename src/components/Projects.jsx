export const Projects = () => {
  return (
    <div>
      <section className="text-3xl font-serif text-white text-center">
        Projects section
      </section>

      <section className="hero-section">
        <div className="card-grid">
          <a className="card" href="#">
            <div className="card__background"></div>
            <div className="card__content">
              <p className="card__category">Category</p>
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </a>
          <a className="card" href="#">
            <div className="card__background"></div>
            <div className="card__content">
              <p className="card__category">Category</p>
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </a>
          <a className="card" href="#">
            <div className="card__background"></div>
            <div className="card__content">
              <p className="card__category">Category</p>
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </a>
          <a className="card" href="#">
            <div className="card__background"></div>
            <div className="card__content">
              <p className="card__category">Category</p>
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;

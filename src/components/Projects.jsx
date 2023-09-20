export const Projects = () => {
    // useEffect(() => {
    //     const cards = document.querySelectorAll(".card")

    //     const observer = new IntersectionObserver(entries => {
    //         entries.forEach(entry => {
    //             entry.target.classList.toggle("show", entry.isIntersecting)
    //             if (entry.isIntersecting) observer.unobserve(entry.target)
    //         })
    //     }, {
    //         threshold: 0.5
    //     });
    //     cards.forEach(card => {
    //         observer.observe(card)
    //     })
    // }, [])

    return (
        <div>
            <section className="text-3xl font-serif text-white">
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
    )
}

export default Projects

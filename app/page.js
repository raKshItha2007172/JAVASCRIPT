"use client";

export default function Home() {

    const hireMe = () => {
        alert("Thank you for your interest!");
    };

    const viewWork = () => {
        alert("My work section will be available soon.");
    };

    const downloadCV = () => {
        alert("CV download started.");
    };

    return (
        <main className="page">

            <div className="portfolio-card">

                {/* NAVBAR */}
                <header className="navbar">

                    <div className="logo">
                        PORTFOLIO
                    </div>

                    <nav>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        <a href="#works">Contact</a>
                    </nav>

                    <button
                        className="hire-btn"
                        onClick={hireMe}
                    >
                        Hire me
                    </button>

                </header>


                {/* HERO SECTION */}
                <section className="hero" id="home">

                    {/* LEFT CONTENT */}
                    <div className="hero-left">

                        

                        <h1>
                            UI/UX <span>designer</span>
                        </h1>

                        <p className="intro">
                            I create meaningful digital experiences
                            through clean, modern and user-friendly
                            designs.
                        </p>

                        <div className="hero-buttons">

                            <button
                                className="main-btn"
                                onClick={viewWork}
                            >
                                View My Work
                            </button>

                            <button
                                className="outline-btn"
                                onClick={downloadCV}
                            >
                                Download CV
                            </button>

                        </div>

                    </div>


                    {/* RIGHT IMAGE */}
                    <div className="hero-right">

                        <div className="glow-circle"></div>

                        <div className="image-container">

                            <img
                                src="https://i.pinimg.com/474x/f6/61/ea/f661ea61616909838a9fbfeda0d2ea14.jpg?nii=t"
                                alt="UI UX Designer"
                            />

                        </div>

                    </div>

                </section>


                {/* BOTTOM SECTION */}
                <section className="bottom-section">

                    <div className="social">

                        <span>Follow me</span>

                        <a href="#">
                            LinkedIn
                        </a>

                        <a href="#">
                            Instagram
                        </a>

                        <a href="#">
                            Dribbble
                        </a>

                    </div>


                    <div className="stats">

                        <div className="stat">
                            <strong>02+</strong>
                            <small>Years Experience</small>
                        </div>

                        <div className="stat">
                            <strong>20+</strong>
                            <small>Projects</small>
                        </div>

                        <div className="stat">
                            <strong>30+</strong>
                            <small>Happy Clients</small>
                        </div>

                    </div>

                </section>

            </div>

        </main>
    );
}
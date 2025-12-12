import React from "react";
import "../styles/style.css";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Portfolio Website",
            desc: "A clean and responsive personal portfolio with contact form backend.",
            img: "/assets/portfolio.png",
            category: "web",
            tags: ["React", "Node.js", "MongoDB", "Vite"]
        },
        {
            id: 2,
            title: "Todo App",
            desc: "A task manager with local storage and drag & drop functionality.",
            img: "/assets/todo.png",
            category: "app",
            tags: ["React", "Tailwind", "Local Storage"]
        },
        {
            id: 3,
            title: "Memory of Place",
            desc: "Save and share memories about special places with geolocation.",
            img: "/assets/memory.png",
            category: "app",
            tags: ["React", "Maps API", "Firebase"]
        },
    ];

    return (
        <section
            id="projects"
            style={{
                padding: "6rem 2rem",
                background: "linear-gradient(160deg, var(--primary-colour) 0%, var(--secondary-colour) 100%)",
            }}
        >
            <h2
                style={{
                    fontSize: "2.5rem",
                    fontWeight: "800",
                    marginBottom: "1rem",
                    textAlign: "center",
                    color: "white",
                }}
            >
                Featured Projects
            </h2>

            <p style={{
                textAlign: "center",
                color: "rgba(255, 255, 255, 0.9)",
                marginBottom: "3rem",
                maxWidth: "600px",
                marginLeft: "auto",
                marginRight: "auto",
            }}>
                Some of my best projects in web development
            </p>

            <div
                style={{
                    display: "grid",
                    gap: "2.5rem",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                {projects.map((p) => (
                    <div
                        key={p.id}
                        className="glass"
                        style={{
                            color: "var(--dark-colour)",
                            borderRadius: "20px",
                            overflow: "hidden",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            cursor: "pointer",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            background: "var(--card-colour)", // Semi-transparent white
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-8px)";
                            e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.25)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
                        }}
                    >
                        {/* Image container with gradient overlay */}
                        <div style={{ position: "relative" }}>
                            <img
                                src={p.img}
                                alt={p.title}
                                style={{
                                    width: "100%",
                                    height: "200px",
                                    objectFit: "cover",
                                }}
                            />
                            <div style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.3))",
                            }} />
                        </div>

                        <div style={{ padding: "1.8rem" }}>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginBottom: "0.8rem"
                            }}>
                                <h3 style={{
                                    fontSize: "1.4rem",
                                    fontWeight: "700",
                                    color: "var(--dark-colour)"
                                }}>
                                    {p.title}
                                </h3>
                                <span style={{
                                    fontSize: "0.8rem",
                                    padding: "0.3rem 0.8rem",
                                    borderRadius: "20px",
                                    background: p.category === "web"
                                        ? "rgba(121, 93, 174, 0.2)"
                                        : "rgba(207, 127, 219, 0.2)",
                                    color: p.category === "web"
                                        ? "var(--primary-colour)"
                                        : "var(--secondary-colour)",
                                    border: p.category === "web"
                                        ? "1px solid var(--primary-colour)"
                                        : "1px solid var(--secondary-colour)"
                                }}>
                                    {p.category}
                                </span>
                            </div>

                            <p
                                style={{
                                    marginBottom: "1.2rem",
                                    color: "var(--dark-colour)",
                                    fontSize: "1rem",
                                    lineHeight: "1.6",
                                    opacity: 0.9
                                }}
                            >
                                {p.desc}
                            </p>

                            {/* Tags */}
                            <div style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "0.5rem",
                                marginBottom: "1.5rem"
                            }}>
                                {p.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            fontSize: "0.8rem",
                                            padding: "0.3rem 0.8rem",
                                            borderRadius: "12px",
                                            background: "rgba(121, 93, 174, 0.1)",
                                            color: "var(--primary-colour)",
                                            border: "1px solid rgba(121, 93, 174, 0.2)"
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* View button */}
                            <button
                                style={{
                                    width: "100%",
                                    padding: "0.8rem",
                                    background: "transparent",
                                    color: "var(--primary-colour)",
                                    border: "1.5px solid var(--primary-colour)",
                                    borderRadius: "10px",
                                    fontSize: "1rem",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "var(--primary-colour)";
                                    e.currentTarget.style.color = "white";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "transparent";
                                    e.currentTarget.style.color = "var(--primary-colour)";
                                }}
                            >
                                View Project
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Call to action */}
            <div style={{
                textAlign: "center",
                marginTop: "4rem",
            }}>
                <button
                    onClick={() =>
                        document.getElementById("contact")?.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                    style={{
                        padding: "1rem 2rem",
                        fontSize: "1.1rem",
                        borderRadius: "12px",
                        background: "var(--card-colour)",
                        color: "var(--primary-colour)",
                        border: "none",
                        cursor: "pointer",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
                    }}
                >
                    Want to work together?
                </button>
            </div>
        </section>
    );
}
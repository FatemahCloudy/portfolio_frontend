import React from "react";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Portfolio Website",
            desc: "A clean and responsive personal portfolio.",
            img: "/assets/images/portfolio.png",
            category: "web",
        },
        {
            id: 2,
            title: "Todo App",
            desc: "A simple task manager with local storage.",
            img: "/assets/images/todo.png",
            category: "app",
        },
        {
            id: 3,
            title: "Memory of Place",
            desc: "Save and share memories about places.",
            img: "/assets/images/memory.png",
            category: "app",
        },
    ];

    return (
        <section
            id="projects"
            style={{
                padding: "5rem 2rem",
                background: "linear-gradient(160deg, #795dae 0%, #cf7fdb 100%)",
                color: "white",
            }}
        >
            <h2
                style={{
                    fontSize: "2.2rem",
                    fontWeight: "800",
                    marginBottom: "2rem",
                    textAlign: "center",
                }}
            >
                Projects
            </h2>

            <div
                style={{
                    display: "grid",
                    gap: "2rem",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    maxWidth: "1100px",
                    margin: "0 auto",
                }}
            >
                {projects.map((p) => (
                    <div
                        key={p.id}
                        style={{
                            background: "#ffffff80",
                            color: "#333",
                            borderRadius: "16px",
                            overflow: "hidden",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.04)";
                            e.currentTarget.style.boxShadow =
                                "0 15px 40px rgba(0,0,0,0.25)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow =
                                "0 10px 30px rgba(0,0,0,0.15)";
                        }}
                    >
                        <img
                            src={p.img}
                            alt={p.title}
                            style={{
                                width: "100%",
                                height: "180px",
                                objectFit: "cover",
                            }}
                        />

                        <div style={{ padding: "1.2rem" }}>
                            <h3 style={{ fontSize: "1.2rem", fontWeight: "700" }}>
                                {p.title}
                            </h3>

                            <p
                                style={{
                                    marginTop: "0.5rem",
                                    color: "#555",
                                    fontSize: "0.95rem",
                                }}
                            >
                                {p.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

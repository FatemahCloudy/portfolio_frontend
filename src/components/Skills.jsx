import React from "react";
import "../styles/style.css";

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["HTML5", "CSS3", "JavaScript", "React", "Vite", "Responsive Design"]
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express", "REST APIs", "MongoDB", "SQL Basics", "Authentication"]
        },
        {
            title: "Tools & Others",
            skills: ["Git & GitHub", "VS Code", "Figma", "Postman", "Render/Vercel", "Problem Solving"]
        }
    ];

    return (
        <section
            id="skills"
            className="bg-root"
            style={{
                padding: "6rem 2rem",
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h2
                style={{
                    textAlign: "center",
                    fontSize: "2.5rem",
                    marginBottom: "1rem",
                    color: "var(--dark-colour)",
                }}
            >
                Skills & Technologies
            </h2>

            <p style={{
                textAlign: "center",
                color: "var(--dark-colour)",
                opacity: 0.8,
                maxWidth: "600px",
                marginBottom: "3rem",
            }}>
                Some of the technologies and tools I use for web development.
            </p>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "2.5rem",
                    maxWidth: "1200px",
                    width: "100%",
                    margin: "0 auto",
                }}
            >
                {skillCategories.map((category, catIndex) => (
                    <div
                        key={catIndex}
                        className="glass"
                        style={{
                            padding: "2rem",
                            borderRadius: "20px",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-5px)";
                            e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.1)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        <h3 style={{
                            fontSize: "1.4rem",
                            fontWeight: "700",
                            marginBottom: "1.5rem",
                            color: "var(--secondary-colour)",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem"
                        }}>
                            <span style={{
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                background: "var(--secondary-colour)",
                            }} />
                            {category.title}
                        </h3>

                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                            gap: "1rem",
                        }}>
                            {category.skills.map((skill, skillIndex) => (
                                <div
                                    key={skillIndex}
                                    style={{
                                        background: "rgba(121, 93, 174, 0.1)",
                                        color: "var(--dark-colour)",
                                        padding: "0.8rem 1rem",
                                        borderRadius: "12px",
                                        textAlign: "center",
                                        fontSize: "0.95rem",
                                        fontWeight: "500",
                                        transition: "all 0.2s ease",
                                        border: "1px solid rgba(121, 93, 174, 0.2)",
                                        cursor: "default",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "rgba(121, 93, 174, 0.2)";
                                        e.currentTarget.style.color = "var(--primary-colour)";
                                        e.currentTarget.style.transform = "scale(1.05)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "rgba(121, 93, 174, 0.1)";
                                        e.currentTarget.style.color = "var(--dark-colour)";
                                        e.currentTarget.style.transform = "scale(1)";
                                    }}
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Experience note */}
            <div style={{
                marginTop: "4rem",
                textAlign: "center",
                maxWidth: "800px",
                padding: "1.5rem",
                borderRadius: "16px",
                background: "rgba(121, 93, 174, 0.05)",
                border: "1px solid rgba(121, 93, 174, 0.1)",
            }}>
                <p style={{
                    color: "var(--dark-colour)",
                    fontSize: "1rem",
                    lineHeight: "1.6",
                }}>
                    <strong style={{ color: "var(--primary-colour)" }}>Continuous Learning:</strong>{" "}
                    I keep exploring new technologies and best practices.
                </p>
            </div>
        </section>
    );
}
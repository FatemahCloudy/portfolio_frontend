import React from "react";
import "../styles/style.css";

export default function Hero() {
    return (
        <section
            id="hero"
            className="bg-root"
            style={{
                padding: "6rem 2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "3rem",
                flexWrap: "wrap",
                // backgroundColor: "var(--bg-colour)" - REMOVED, using className instead
            }}
        >
            {/* About me */}
            <div style={{ flex: "1 1 320px" }}>
                <h1
                    style={{
                        fontSize: "2.8rem",
                        fontWeight: "800",
                        lineHeight: "1.2",
                        color: "var(--dark-colour)",
                    }}
                >
                    Hi, I'm{" "}
                    <span style={{ color: "var(--primary-colour)" }}>Fatemah</span>
                    <br />
                    Frontend Developer
                </h1>

                <p
                    style={{
                        marginTop: "1rem",
                        maxWidth: "450px",
                        color: "var(--dark-colour)",
                        fontSize: "1.1rem",
                        lineHeight: "1.6",
                    }}
                >
                    I design and build clean, modern and accessible web experiences.
                    I love turning ideas into elegant, functional interfaces.
                </p>

                {/* Buttons */}
                <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
                    <button
                        onClick={() =>
                            document.getElementById("projects")?.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                        style={{
                            padding: "0.8rem 1.6rem",
                            fontSize: "1rem",
                            borderRadius: "10px",
                            background: "linear-gradient(90deg, var(--primary-colour), var(--secondary-colour))",
                            color: "white",
                            border: "none",
                            cursor: "pointer",
                            transition: "transform 0.25s ease",
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.transform = "scale(1.05)")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "scale(1)")
                        }
                    >
                        View Projects
                    </button>

                    <button
                        onClick={() =>
                            document.getElementById("contact")?.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                        style={{
                            padding: "0.8rem 1.6rem",
                            fontSize: "1rem",
                            borderRadius: "10px",
                            border: "2px solid var(--primary-colour)",
                            background: "var(--bg-colour)",
                            color: "var(--primary-colour)",
                            cursor: "pointer",
                            transition: "transform 0.25s ease",
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.transform = "scale(1.05)")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "scale(1)")
                        }
                    >
                        Contact Me
                    </button>
                </div>
            </div>

            {/* The image */}
            <div
                style={{
                    position: "relative",
                    flex: "1 1 300px",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                {/* Colour shadow */}
                <div
                    style={{
                        position: "absolute",
                        width: "260px",
                        height: "260px",
                        background: "linear-gradient(120deg, rgba(121, 93, 174, 0.35), rgba(207, 127, 219, 0.35))",
                        borderRadius: "50%",
                        filter: "blur(40px)",
                        zIndex: 0,
                    }}
                ></div>

                {/* Image */}
                <img
                    src="src/assets/profile.jpg"
                    alt="profile"
                    style={{
                        width: "260px",
                        height: "260px",
                        objectFit: "cover",
                        borderRadius: "20px",
                        zIndex: 1,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    }}
                />
            </div>
        </section>
    );
}
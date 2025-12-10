import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    // Add a shadow when scrolling
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav
            style={{
                position: "sticky",
                top: 0,
                zIndex: 100,
                width: "100%",
                background: "linear-gradient(160deg, #795dae 0%, #cf7fdb 100%)",
                opacity: 0.8,
                backdropFilter: "blur(10px)",
                padding: "1rem 2rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: scrolled
                    ? "0 2px 12px rgba(0,0,0,0.1)"
                    : "0 0 0 rgba(0,0,0,0)",
                transition: "0.3s ease",
            }}
        >
            {/* Left side — Logo / Name */}
            <div
                style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    color: "white",
                    cursor: "pointer",
                }}
                onClick={() => scrollTo("hero")}
            >
                Fatemah Almarhoon
            </div>

            {/* Right side — Links */}
            <div style={{ display: "flex", gap: "1.2rem" }}>
                {[
                    { label: "Home", id: "hero" },
                    { label: "Projects", id: "projects" },
                    { label: "Skills", id: "skills" },
                    { label: "Contact", id: "contact" },
                ].map((item, i) => (
                    <button
                        key={i}
                        onClick={() => scrollTo(item.id)}
                        style={{
                            border: "none",
                            background: "transparent",
                            cursor: "pointer",
                            fontSize: "1rem",
                            color: "white",
                            padding: "0.3rem 0.5rem",
                            borderRadius: "6px",
                            transition: "0.2s",
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.color = "#795dae";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = "#444";
                        }}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </nav>
    );
}

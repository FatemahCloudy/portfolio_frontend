// Navbar.jsx - FIXED VERSION
import React, { useState, useEffect } from "react";
import "../styles/style.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    // Initialize theme from localStorage immediately
    const [theme, setTheme] = useState(() => {
        // Check localStorage on initial render
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;

        // Check system preference
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return systemPrefersDark ? 'dark' : 'light';
    });

    // Add a shadow when scrolling
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Apply theme to document
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

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
                background: "linear-gradient(160deg, var(--primary-colour) 0%, var(--secondary-colour) 100%)",
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
                    color: "var(--card-colour)",
                    cursor: "pointer",
                }}
                onClick={() => scrollTo("hero")}
            >
                Fatemah Almarhoon
            </div>

            {/* Right side — Links & Theme Toggle */}
            <div style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}>
                {/* Navigation Links */}
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
                            color: "var(--card-colour)",
                            padding: "0.3rem 0.5rem",
                            borderRadius: "6px",
                            transition: "0.2s",
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.color = "var(--primary-colour)";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = "var(--card-colour)";
                        }}
                    >
                        {item.label}
                    </button>
                ))}

                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    style={{
                        border: "none",
                        background: "var(--card-colour)",
                        color: "var(--primary-colour)",
                        cursor: "pointer",
                        padding: "0.5rem",
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.2rem",
                        transition: "all 0.3s ease",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)";
                    }}
                >
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
            </div>
        </nav>
    );
}
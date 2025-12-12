import React from "react";
import "../styles/style.css";

export default function Footer() {
    return (
        <footer
            style={{
                background: "var(--primary-colour)",
                color: "var(--light-color)",
                padding: "1.5rem 1rem",
                textAlign: "center",
                marginTop: "2rem",
            }}
        >
            <p style={{ margin: 0, fontSize: "1rem"}}>
                © {new Date().getFullYear()} Fatemah — All Rights Reserved
            </p>

            <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", opacity: 0.8 }}>
                Built with React + Vite
            </p>
        </footer>
    );
}

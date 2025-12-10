import React, { useState } from "react";
import "../styles/style.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("./backend/server.js", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            style={{
                padding: "4rem 1.5rem",
                background: "linear-gradient(160deg, var(--primary-colour) 0%, var(--secondary-colour) 100%)",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    background: "#ffffff80",
                    color: "var(--primary-colour)",
                    padding: "2rem",
                    borderRadius: "16px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                    width: "100%",
                    maxWidth: "500px",
                }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        fontSize: "2rem",
                        marginBottom: "1.5rem",
                        color: "var(--primary-colour)",
                    }}
                >
                    Contact Me
                </h2>

                <form onSubmit={handleSubmit}>
                    <label style={{ display: "block", marginBottom: "1rem" }}>
                        <span style={{ display: "block", marginBottom: ".5rem" }}>
                            Name
                        </span>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{
                                background: "transparent",
                                width: "100%",
                                padding: ".8rem",
                                borderRadius: "8px",
                                border: "1px solid var(--primary-colour)",
                            }}
                        />
                    </label>

                    <label style={{ display: "block", marginBottom: "1rem" }}>
                        <span style={{ display: "block", marginBottom: ".5rem" }}>
                            Email
                        </span>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                                background: "transparent",
                                width: "100%",
                                padding: ".8rem",
                                borderRadius: "8px",
                                border: "1px solid var(--primary-colour)",
                            }}
                        />
                    </label>

                    <label style={{ display: "block", marginBottom: "1rem" }}>
                        <span style={{ display: "block", marginBottom: ".5rem" }}>
                            Message
                        </span>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            required
                            style={{
                                background: "transparent",
                                width: "100%",
                                padding: ".8rem",
                                borderRadius: "8px",
                                border: "1px solid var(--primary-colour)",
                                resize: "vertical",
                            }}
                        ></textarea>
                    </label>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                            width: "100%",
                            padding: "1rem",
                            background: isSubmitting 
                                ? "#cccccc" 
                                : "linear-gradient(160deg, var(--primary-colour) 0%, var(--secondary-colour) 100%)",
                            color: "var(--card-colour)",
                            border: "none",
                            borderRadius: "8px",
                            fontSize: "1.1rem",
                            cursor: isSubmitting ? "not-allowed" : "pointer",
                            marginTop: ".5rem",
                            opacity: isSubmitting ? 0.7 : 1,
                        }}
                    >
                        {isSubmitting ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
        </section>
    );
}

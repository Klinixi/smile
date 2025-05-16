import React from "react";

const Header: React.FC = () => (
    <header style={{
        background: "#fff8f0",
        padding: "24px 0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        textAlign: "center"
    }}>
        <h1 style={{
            margin: 0,
            fontFamily: "'Playfair Display', serif",
            fontSize: "2.5rem",
            color: "#b76e79"
        }}>
            Salon de Coiffure Smile
        </h1>
        <p style={{
            margin: "8px 0 0 0",
            fontSize: "1.1rem",
            color: "#555"
        }}>
            Beauté, élégance et bien-être pour vos cheveux
        </p>
    </header>
);

export default Header;
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Package, ClipboardList } from "lucide-react";
import logoImg from "../img/cash-register.png"; // Logo
import heroImg from "../img/hamburguesa.png";   // Imagen hero
import "./Home.css";

export default function Home() {
    return (
        <div className="home-background">
            {/* Header con logo */}
            <header className="home-header">
                <div className="logo">
                    <img src={logoImg} alt="POS" className="logo-icon" />
                    <span>POS-ting</span>
                </div>
            </header>

            {/* Hero */}
            <section className="hero">
                <div className="hero-text animate-fade-in">
                    <h1>Bienvenido a POS-ting</h1>
                    <p>Controla tu negocio de manera rápida, moderna y profesional.</p>
                    <Link to="/login" className="btn-start">
                        Comenzar ahora
                    </Link>
                </div>
                <img src={heroImg} alt="Hamburguesa" className="hero-image animate-fade-in-right" />
            </section>

            {/* Botones grandes estilo premium */}
            <section className="home-buttons animate-fade-in-up">
                <Link to="/productos" className="btn-card">
                    <Package size={48} />
                    <span>Productos</span>
                </Link>
                <Link to="/carrito" className="btn-card">
                    <ShoppingCart size={48} />
                    <span>Carrito</span>
                </Link>
                <Link to="/pedido" className="btn-card">
                    <ClipboardList size={48} />
                    <span>Pedido</span>
                </Link>
            </section>
        </div>
    );
}

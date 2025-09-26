import React, { useState } from "react";
import "./Productos.css";

// Importar imágenes
import pizzaImg from "../img/pizza.jpeg";
import sushiImg from "../img/sushi.jpeg";
import hamburguesaImg from "../img/hamburguesa.png";
import cocaImg from "../img/coca.jpeg";

const categorias = ["Combos", "Hamburguesas", "Papas", "Bebidas"];
const productos = [
    { id: 1, nombre: "Combo Mac", precio: 135, imagen: pizzaImg, categoria: "Combos" },
    { id: 2, nombre: "Cajita Feliz", precio: 279, imagen: pizzaImg, categoria: "Combos" }, // Ajusta si tienes imagen diferente
    { id: 3, nombre: "Big Mac", precio: 135, imagen: hamburguesaImg, categoria: "Hamburguesas" },
    { id: 4, nombre: "Family Box", precio: 299, imagen: pizzaImg, categoria: "Combos" }, // Ajusta según tu imagen
    { id: 5, nombre: "Coca Cola", precio: 25, imagen: cocaImg, categoria: "Bebidas" },
    { id: 6, nombre: "Hamburguesa Sencilla", precio: 90, imagen: hamburguesaImg, categoria: "Hamburguesas" },
    { id: 7, nombre: "Pizza Personal", precio: 120, imagen: pizzaImg, categoria: "Papas" },
    { id: 8, nombre: "Sushi Roll", precio: 150, imagen: sushiImg, categoria: "Papas" },
];

export default function Productos() {
    const [categoriaActiva, setCategoriaActiva] = useState("Combos");
    const [carrito, setCarrito] = useState([]);

    const agregarCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    const total = carrito.reduce((acc, p) => acc + p.precio, 0);

    return (
        <div className="productos-background">
            <div className="productos-card">
                {/* Lista de productos */}
                <div className="productos-lista">
                    <h2 className="productos-title">Productos</h2>

                    {/* Categorías */}
                    <div className="productos-categorias">
                        {categorias.map((cat) => (
                            <button
                                key={cat}
                                className={`categoria-btn ${categoriaActiva === cat ? "activo" : ""}`}
                                onClick={() => setCategoriaActiva(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid de productos */}
                    <div className="productos-grid">
                        {productos
                            .filter((p) => p.categoria === categoriaActiva)
                            .map((producto) => (
                                <div
                                    key={producto.id}
                                    className="producto-item"
                                    onClick={() => agregarCarrito(producto)}
                                >
                                    <img src={producto.imagen} alt={producto.nombre} className="producto-img" />
                                    <h3 className="producto-nombre">{producto.nombre}</h3>
                                    <p className="producto-precio">${producto.precio}</p>
                                </div>
                            ))}
                    </div>
                </div>

                {/* Carrito */}
                <div className="productos-carrito">
                    <h3 className="carrito-title">Carrito</h3>
                    <ul className="carrito-items">
                        {carrito.map((item, index) => (
                            <li key={index} className="carrito-item">
                                <span>{item.nombre}</span>
                                <span>${item.precio}</span>
                            </li>
                        ))}
                    </ul>
                    <hr className="carrito-separator" />
                    <p className="carrito-total">
                        <span>Total:</span> <span>${total}</span>
                    </p>
                    <button className="carrito-btn pagar">Pagar</button>
                    <button className="carrito-btn factura">Emitir Factura</button>
                </div>
            </div>
        </div>
    );
}

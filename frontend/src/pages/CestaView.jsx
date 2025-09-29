import React from "react";
import { FaShoppingCart } from "react-icons/fa";
// Ajuste de ruta: ahora apunta a components
import "../components/Carrito.css";

// Importar imágenes
import pizzaImg from "../img/pizza.jpeg";
import sushiImg from "../img/sushi.jpeg";
import hamburguesaImg from "../img/hamburguesa.png";
import cocaImg from "../img/coca.jpeg";

const productosEnCarrito = [
    { id: 1, nombre: "Pizza", precio: 135, imagen: pizzaImg },
    { id: 2, nombre: "Sushi", precio: 150, imagen: sushiImg },
    { id: 3, nombre: "Hamburguesa", precio: 60, imagen: hamburguesaImg },
    { id: 4, nombre: "Coca Cola", precio: 25, imagen: cocaImg },
];

export default function Carrito() {
    const total = productosEnCarrito.reduce((acc, p) => acc + p.precio, 0);

    return (
        <div className="carrito-container">
            {/* Header */}
            <div className="carrito-header">
                <FaShoppingCart className="carrito-icon" />
                <h2 className="carrito-title">
                    Tu Carrito
                    <span className="carrito-badge">{productosEnCarrito.length}</span>
                </h2>
            </div>

            {/* Productos */}
            {productosEnCarrito.length === 0 ? (
                <p className="carrito-empty">No tienes productos agregados aún.</p>
            ) : (
                <div className="carrito-grid">
                    {productosEnCarrito.map((producto) => (
                        <div key={producto.id} className="carrito-card">
                            <img
                                src={producto.imagen}
                                alt={producto.nombre}
                                className="carrito-img"
                            />
                            <h3 className="carrito-nombre">{producto.nombre}</h3>
                            <p className="carrito-precio">${producto.precio}</p>
                            <button className="carrito-btn-eliminar">Eliminar</button>
                        </div>
                    ))}
                </div>
            )}

            {/* Footer fijo */}
            {productosEnCarrito.length > 0 && (
                <div className="carrito-footer">
                    <span className="carrito-total">Total: ${total}</span>
                    <button className="carrito-btn-finalizar">Finalizar Compra</button>
                </div>
            )}
        </div>
    );
}

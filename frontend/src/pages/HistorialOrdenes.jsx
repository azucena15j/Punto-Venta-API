import React from "react";
import "../components/Pedido.css";

// Importar las imágenes desde la carpeta
import pizzaImg from "../img/pizza.jpeg";
import sushiImg from "../img/sushi.jpeg";

const productosEnPedido = [
    { id: 1, nombre: "Pizza", precio: 135, imagen: pizzaImg, cantidad: 2 },
    { id: 2, nombre: "Sushi", precio: 80, imagen: sushiImg, cantidad: 1 },
];

export default function Pedido() {
    return (
        <div className="pedido-container">
            <h2 className="pedido-title">Detalles de tu Pedido</h2>

            {productosEnPedido.length === 0 ? (
                <p className="pedido-empty">Aún no has realizado ningún pedido.</p>
            ) : (
                <div className="pedido-grid">
                    {productosEnPedido.map((producto) => (
                        <div key={producto.id} className="pedido-card">
                            <img src={producto.imagen} alt={producto.nombre} className="pedido-img" />
                            <div className="pedido-info">
                                <h3 className="pedido-nombre">{producto.nombre}</h3>
                                <p className="pedido-cantidad">Cantidad: {producto.cantidad}</p>
                                <p className="pedido-precio">Precio: ${producto.precio * producto.cantidad}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="pedido-footer">
                <button className="pedido-btn-finalizar">Confirmar Pedido</button>
            </div>
        </div>
    );
}

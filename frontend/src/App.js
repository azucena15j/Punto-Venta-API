import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import Productos from "./components/Productos";
import Carrito from "./components/Carrito";
import Pedido from "./components/Pedido";
import Login from "./components/Login";
import Register from "./components/Register";

export default function App() {
    return (
        <Router>
            <Routes>
                {/* Primera vista */}
                <Route path="/" element={<Home />} />          

                {/* Rutas principales */}
                <Route path="/productos" element={<Productos />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/pedido" element={<Pedido />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} /> 

                {/* Ruta comodín: cualquier ruta desconocida redirige a Home */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
// Ajuste de ruta: ahora apunta a components
import "../components/Login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login-container">
            {/* Lado izquierdo */}
            <div className="login-left">
                <h1 className="login-heading">Da el primer paso para tu próximo pedido con</h1>
                <h2 className="login-subheading">POS-ting!</h2>
                <p className="login-link">www.post-ing.com</p>
            </div>

            {/* Lado derecho */}
            <div className="login-right">
                <h2 className="login-title">Login</h2>

                <div className="login-form">
                    <div className="login-input-group">
                        <FaUser className="login-icon" />
                        <input
                            type="email"
                            placeholder="Correo"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="login-input"
                        />
                    </div>

                    <div className="login-input-group">
                        <FaLock className="login-icon" />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="login-input"
                        />
                    </div>

                    <a href="/register" className="login-register-link">
                        Registrarse
                    </a>

                    <button className="login-btn-submit">➜</button>
                </div>
            </div>
        </div>
    );
}

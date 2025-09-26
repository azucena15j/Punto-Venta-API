import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        correo: "",
        contrasena: "",
        nombre: "",
        apellido: "",
        rfc: "",
        telefono: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para registrar al usuario
        alert("¡Registro exitoso!");
        navigate("/login"); // Redirige al login después del registro
    };

    return (
        <div className="register-background">
            <div className="register-card">
                <h2 className="register-title">Crear Cuenta</h2>
                <form onSubmit={handleSubmit} className="register-form">
                    <input
                        type="email"
                        name="correo"
                        placeholder="Correo electrónico"
                        value={formData.correo}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="contrasena"
                        placeholder="Contraseña"
                        value={formData.contrasena}
                        onChange={handleChange}
                        required
                    />
                    <div className="register-name">
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="apellido"
                            placeholder="Apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <input
                        type="text"
                        name="rfc"
                        placeholder="RFC"
                        value={formData.rfc}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="telefono"
                        placeholder="Teléfono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="register-button">
                        Registrarme
                    </button>
                </form>
                <p className="register-login">
                    ¿Ya tienes cuenta?{" "}
                    <Link to="/login" className="register-link">
                        Inicia Sesión
                    </Link>
                </p>
            </div>
        </div>
    );
}

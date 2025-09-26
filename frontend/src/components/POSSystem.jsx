import React, { useState, useRef } from "react";


const POSSystem = () => {
    const [cart, setCart] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [flyImage, setFlyImage] = useState(null);
    const [pop, setPop] = useState(false); // rebote contador e ícono
    const [glow, setGlow] = useState(false); // brillo parpadeante
    const cartRef = useRef(null);

    const categories = ["Todos", "Bebidas", "Comida", "Snacks"];
    const products = [
        { id: 1, name: "Coca Cola", price: 25, category: "Bebidas", image: "https://i.ibb.co/1sYjRzC/coca-cola.png" },
        { id: 2, name: "Pepsi", price: 25, category: "Bebidas", image: "https://i.ibb.co/jf0rSgX/pepsi.png" },
        { id: 3, name: "Hamburguesa", price: 80, category: "Comida", image: "https://i.ibb.co/z6T6wFm/hamburguesa.png" },
        { id: 4, name: "Papas Fritas", price: 35, category: "Snacks", image: "https://i.ibb.co/Qc8ZRgP/papas.png" },
        { id: 5, name: "Agua", price: 15, category: "Bebidas", image: "https://i.ibb.co/M2tVZ3G/agua.png" },
        { id: 6, name: "Pizza", price: 90, category: "Comida", image: "https://i.ibb.co/mCkqGZ6/pizza.png" },
    ];

    const filteredProducts =
        selectedCategory === "Todos"
            ? products
            : products.filter((p) => p.category === selectedCategory);

    const handleAddToCart = (product, e) => {
        const rect = e.target.getBoundingClientRect();
        const cartRect = cartRef.current.getBoundingClientRect();

        setFlyImage({
            image: product.image,
            startX: rect.left,
            startY: rect.top,
            endX: cartRect.left + cartRect.width / 2 - 25,
            endY: cartRect.top + cartRect.height / 2 - 25,
        });

        const btn = e.target;
        btn.style.transform = "scale(1.2)";
        setTimeout(() => (btn.style.transform = "scale(1)"), 200);

        // Rebote y brillo parpadeante
        setPop(true);
        setGlow(true);
        setTimeout(() => {
            setPop(false);
            setGlow(false);
        }, 500); // un poquito más largo para el parpadeo elegante

        setTimeout(() => {
            setFlyImage(null);
            setCart((prev) => [...prev, product]);
        }, 500);
    };

    const clearCart = () => setCart([]);
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Punto de Venta</h1>

            <div style={styles.categories}>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        style={{
                            ...styles.categoryButton,
                            background: selectedCategory === cat ? "#007bff" : "transparent",
                            color: selectedCategory === cat ? "#fff" : "#007bff",
                        }}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div style={styles.main}>
                <div style={styles.products}>
                    {filteredProducts.map((product) => (
                        <div key={product.id} style={styles.card}>
                            <img src={product.image} alt={product.name} style={styles.image} />
                            <h3>{product.name}</h3>
                            <p>${product.price}</p>
                            <button
                                style={styles.addButton}
                                onClick={(e) => handleAddToCart(product, e)}
                            >
                                Añadir al carrito
                            </button>
                        </div>
                    ))}
                </div>

                <div
                    style={{
                        ...styles.cart,
                        boxShadow: glow
                            ? "0 0 20px 8px rgba(255, 193, 7, 0.8)" // brillo parpadeante elegante
                            : "0 4px 12px rgba(0,0,0,0.1)",
                        transition: "box-shadow 0.5s ease-in-out",
                    }}
                    ref={cartRef}
                >
                    <h2 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span
                            style={{
                                fontSize: "24px",
                                display: "inline-block",
                                animation: pop ? "popElastic 0.3s" : "none",
                            }}
                        >
                            🛒
                        </span>
                        Carrito
                        {cart.length > 0 && (
                            <span
                                style={{
                                    ...styles.cartCounter,
                                    animation: pop ? "popElastic 0.3s" : "none",
                                }}
                            >
                                {cart.length}
                            </span>
                        )}
                    </h2>

                    {cart.length === 0 && <p>El carrito está vacío</p>}
                    {cart.map((item, index) => (
                        <div key={index} style={styles.cartItem}>
                            {item.name} - ${item.price}
                        </div>
                    ))}
                    {cart.length > 0 && <h3>Total: ${total}</h3>}
                    {cart.length > 0 && (
                        <div style={styles.cartButtons}>
                            <button style={styles.clearButton} onClick={clearCart}>
                                Vaciar Carrito
                            </button>
                            <button style={styles.checkoutButton}>Facturar</button>
                        </div>
                    )}
                </div>
            </div>

            {flyImage && (
                <img
                    src={flyImage.image}
                    alt=""
                    style={{
                        position: "fixed",
                        width: "50px",
                        height: "50px",
                        left: flyImage.startX,
                        top: flyImage.startY,
                        borderRadius: "10px",
                        transition: "all 0.5s ease-in-out",
                        transform: `translate(${flyImage.endX - flyImage.startX}px, ${flyImage.endY - flyImage.startY
                            }px) scale(0.1)`,
                        zIndex: 1000,
                    }}
                />
            )}

            <style>
                {`
          @keyframes popElastic {
            0% { transform: scale(1); }
            30% { transform: scale(1.5); }
            50% { transform: scale(0.9); }
            70% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
        `}
            </style>
        </div>
    );
};

const styles = {
    container: { fontFamily: "Arial, sans-serif", padding: "20px", background: "#f0f4f8", minHeight: "100vh" },
    title: { textAlign: "center", color: "#007bff", marginBottom: "20px" },
    categories: { display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" },
    categoryButton: { padding: "10px 20px", borderRadius: "20px", border: "2px solid #007bff", cursor: "pointer", transition: "0.3s", fontWeight: "bold" },
    main: { display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" },
    products: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "20px", flex: 2 },
    card: { background: "#fff", padding: "15px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", textAlign: "center", transition: "0.3s" },
    image: { width: "100px", height: "100px", objectFit: "contain", marginBottom: "10px" },
    addButton: { marginTop: "10px", padding: "8px 12px", borderRadius: "5px", border: "none", background: "#28a745", color: "#fff", cursor: "pointer", transition: "0.3s" },
    cart: { flex: 1, background: "#fff", padding: "20px", borderRadius: "10px", maxHeight: "500px", overflowY: "auto", position: "relative" },
    cartItem: { padding: "5px 0", borderBottom: "1px solid #ddd" },
    cartButtons: { marginTop: "15px", display: "flex", flexDirection: "column", gap: "10px" },
    clearButton: { padding: "10px", borderRadius: "5px", border: "none", background: "#dc3545", color: "#fff", cursor: "pointer", fontWeight: "bold" },
    checkoutButton: { padding: "10px", borderRadius: "5px", border: "none", background: "#ffc107", color: "#fff", fontWeight: "bold", cursor: "pointer" },
    cartCounter: { background: "#dc3545", color: "#fff", borderRadius: "50%", padding: "3px 8px", fontSize: "14px", marginLeft: "10px" },
};

export default POSSystem;

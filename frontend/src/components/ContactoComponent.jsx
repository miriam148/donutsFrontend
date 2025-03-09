import React from "react";

const ContactoComponent = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contacto</h1>
      
      <p style={styles.text}><strong>Nombre:</strong> Bernal</p>
      <p style={styles.text}><strong>Dirección:</strong> Calle Dulce nombre 8, Tarifa</p>
      <p style={styles.text}><strong>Teléfono:</strong> +34 600 88 77 33</p>
      <p style={styles.text}><strong>Email:</strong> chuparselosdeos@gmail.com</p>
      <h2 style={styles.title2}>Pedidos a domicilio a partir de los 30€</h2>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#800080",
  },
    title2: {
      fontSize: "12px",
      marginBottom: "20px",
      color: " #ff4081",
  },
  text: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "black"
  },
};

export default ContactoComponent

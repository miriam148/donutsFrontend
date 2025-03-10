import React from "react";
import { useNavigate } from "react-router-dom";
import donutImage2 from '../images/glazed-donut-with-sprinkles-pink-surface.jpg'

const ContactoComponent = () => {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <div><img src={donutImage2} style={{ width: '200px', height: 'auto', gap: '10', borderRadius: 20}} alt="Imagen de un donuts" /></div>
      <h1 style={styles.title}>Contacto</h1>
      
      <p style={styles.text}><strong>Nombre:</strong> Bernal</p>
      <p style={styles.text}><strong>Dirección:</strong> Calle Dulce nombre 8, Tarifa</p>
      <p style={styles.text}><strong>Teléfono:</strong> +34 600 88 77 33</p>
      <p style={styles.text}><strong>Email:</strong> chuparselosdeos@gmail.com</p>
      <h2 style={styles.title2}>*Pedidos a domicilio a partir de los 30€</h2>
      <div><button style={styles.button} onClick={backHandler}>Volver</button></div>

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
    backgroundColor: "#f4c2c2",
    textAlign: "center",
  },
  title: {
    fontSize: "30px",
    marginBottom: "20px",
    color: "#000",
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

  button: {
     backgroundColor: "black"
  }
};

export default ContactoComponent

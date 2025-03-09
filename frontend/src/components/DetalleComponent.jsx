import React from 'react'
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetalleComponent = () => {
  const { id } = useParams(); // Obtiene el ID del donut desde la URL
  const navigate = useNavigate();
  const [donut, setDonut] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/donuts/${id}`)
      .then((response) => response.json())
      .then((data) => setDonut(data))
      .catch((error) => console.error("Error al obtener el donut:", error));
  }, [id]);

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:3000/api/donuts/${id}`, { method: "DELETE" });
      navigate("/"); // 🔴 Redirige a HomePage después de eliminar
    } catch (error) {
      console.error("Error al eliminar el donut:", error);
    }
  };

  const handleEdit = () => {
    navigate(`/editar/${id}`); // 🔴 Lleva al formulario de edición
  };

  const handleBack = () => {
    navigate("/"); // 🔴 Regresa a HomePage
  };

  if (!donut) return <p>Cargando...</p>;
  return (
    <div style={styles.container}>
    <h2 style={styles.title}>Donut: {donut.name}</h2>
    <p style={styles.description}><strong>Descripción:</strong> {donut.description}</p>
    <p style={styles.price}><strong>Precio:</strong> €{donut.price}</p>
    <img src={donut.imageUrl || "https://via.placeholder.com/150"} alt={donut.name} style={styles.image} />
    <div style={styles.buttonContainer}>
      <button style={styles.editButton} onClick={handleEdit}>Editar</button>
      <button style={styles.deleteButton} onClick={handleDelete}>Eliminar</button>
      <button style={styles.backButton} onClick={handleBack}>Volver</button>
    </div>
  </div>
  )
}


const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: "22px",
    marginBottom: "10px",
    color: "grey",
  },
  description: {
    fontSize: "16px",
    marginBottom: "5px",
  },
  price: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#ff4081",
    marginBottom: "10px",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  buttonContainer: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "space-around",
  },
  editButton: {
    backgroundColor: "#ff4081",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "purple",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  backButton: {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default DetalleComponent

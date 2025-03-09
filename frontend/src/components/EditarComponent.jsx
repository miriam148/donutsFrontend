import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditarComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/api/donuts/${id}`)
      .then((response) => response.json())
      .then((data) => setForm(data))
      .catch((error) => console.error("Error al obtener el donut:", error));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/donuts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Error al actualizar el donut");

      navigate(`/detalle/${id}`); // 🔴 Redirige al detalle del donut actualizado
    } catch (error) {
      console.error("Error al actualizar el donut:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Editar Donut</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Nombre del donut"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Descripción"
          value={form.description}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Precio (€)"
          value={form.price}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="URL de la imagen"
          value={form.imageUrl}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Guardar Cambios</button>
        <button type="button" style={styles.backButton} onClick={() => navigate(`/detalle/${id}`)}>Cancelar</button>
      </form>
    </div>
  );
};

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
    marginBottom: "15px",
    color: "#ff4081",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    margin: "8px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#28a745",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  backButton: {
    backgroundColor: "#ccc",
    color: "black",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default EditarComponent;

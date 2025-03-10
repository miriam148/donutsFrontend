import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDonut } from "../core/redux/actions/donutActions";
import { useNavigate } from "react-router-dom";
import donutImage1 from '../images/pexels-tijana-drndarski-449691-3338681.jpg'

const CrearDonutComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/donuts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Error al guardar el donut");

      const newDonut = await response.json();
      dispatch(addDonut(newDonut)); 
      setForm({ name: "", description: "", price: "", imageUrl: "" });
      navigate("/listado"); 
    } catch (error) {
      console.error(error);
    }
  };

  const backHandler = () => {
    navigate("/");
  };

 

  return (
    <div style={styles.container}>
      <div><img src={donutImage1} alt="" style={{ width: '200px', height: 'auto', gap: '10', borderRadius: 20}}/></div>
      <h2 style={styles.title}>Crear Nuevo Donut</h2>
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
        {/* <input
          type="text"
          name="imageUrl"
          placeholder="URL de la imagen"
          value={form.imageUrl}
          onChange={handleChange}
          style={styles.input}
        /> */}
        <button type="submit" style={styles.button} >Agregar Donut</button>
        <button type="button" style={styles.backButton} onClick={backHandler}>Volver</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "60px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f4c2c2",
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
    backgroundColor: "#ff4081",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  backButton: {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default CrearDonutComponent;

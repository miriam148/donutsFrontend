import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ListadoComponent = () => {
  const [donuts, setDonuts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/api/donuts")
      .then((response) => response.json())
      .then((data) => {
        console.log("Donuts recibidos:", data); 
        setDonuts(data);
      })
      .catch((error) => console.error("Error al cargar los donuts:", error));
  }, []);
  

  const handleDetail = (id) => {
    navigate(`/detalle/${id}`);
  };

  const handlerBack = () => {
    navigate('/')
  }

  return (
    <div style={styles.container}>
    <h2 style={styles.title}>Lista de Donuts</h2>

    {donuts.length > 0 ? (
      <div style={styles.grid}>
        {donuts.map((donut) => (
          <div key={donut._id} style={styles.card}>
            <img
              src={donut.imageUrl || "https://via.placeholder.com/150"}
              alt={donut.name}
              style={styles.image}
            />
            <h3 style={styles.donutName}>{donut.name}</h3>
            <p style={styles.description}>{donut.description}</p>
            <p style={styles.price}>€{donut.price}</p>
            <button
              style={styles.button}
              onClick={() => handleDetail(donut._id)}
            >
              Ver Detalles
            </button>
          </div>
        ))}
      </div>
    ) : (
      <p style={styles.noDonutsMessage}> Nos hemos quedado sin existencias. ¡ crea tu propio Donut !</p>
    )}

    <div>
      <button onClick={handlerBack} style={styles.button1}>Volver</button>
    </div>
  </div>
);
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    fontSize: "30px",
    marginBottom: "20px",
    color: "#ff4081",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  donutName: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#555",
    margin: "10px 0",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "8px",
  },
  price: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#ff4081",
  },
  button: {
    backgroundColor: "#ff4081",
    color: "white",
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  button1: {
    backgroundColor: "black",
    color: "white",
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  noDonutsMessage: {
    fontSize: "18px",
    color: "#888",
    textAlign: "center",
    marginTop: "20px",
    fontWeight: "bold",

},
}


export default ListadoComponent
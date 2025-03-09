import React from "react";
import { useNavigate } from "react-router-dom";
import donutImage from '../images/pexels-fotios-photos-1785852.jpg'


const HomePage = () => {
  const navigate = useNavigate();

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <img src={donutImage} alt="donut"   style={{ width: '300px', height: 'auto', gap: '10' }} />
      <h1 className="text-4xl font-bold text-pink-600 mb-6" style={{color: "#ff4081"}}>Pastelería Bernal</h1>
      
      <div className="flex flex-col gap-4"  style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} >
        <button 
          onClick={() => navigate("/crear-donut")} 
          className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-700, "
        >
          Crea tu Donut
        </button>
        <button 
          onClick={() => navigate("/listado")} 
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700"
        >
          Donuts
        </button>
        <button 
          onClick={() => navigate("/contacto")} 
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700"
        >
          ¿Quiénes somos?
        </button>
      </div>
    </div>
  );
};

export default HomePage;


export const ADD_DONUT = "ADD_DONUT";
export const SET_DONUTS = "SET_DONUTS";


export const addDonut = (donut) => ({
  type: ADD_DONUT,
  payload: donut,
});


export const setDonuts = (donuts) => ({
  type: SET_DONUTS,
  payload: donuts,
});


export const fetchDonuts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3000/api/donuts");
      const data = await response.json();
      dispatch(setDonuts(data));
    } catch (error) {
      console.error("Error al obtener los donuts:", error);
    }
  };
};


export const createDonut = (donut) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3000/api/donuts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donut),
      });
      const newDonut = await response.json();
      dispatch(addDonut(newDonut));
    } catch (error) {
      console.error("Error al agregar el donut:", error);
    }
  };
};

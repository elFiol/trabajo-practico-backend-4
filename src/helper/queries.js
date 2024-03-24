const URL_COLORES = import.meta.env.VITE_API_COLORES;

export const leerColoresAPI = async () => {
    try {
      const respuesta = await fetch(`${URL_COLORES}/api/colores`);
      const recetas = await respuesta.json();
      return recetas;
    } catch (error) {
      console.log(error);
    }
}

export const obtenerColorAPI = async (id) => {
    try {
      const respuesta = await fetch(URL_COLORES + "/api/color/" + id);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
};

export const editarColorAPI = async (colorModificado, id) => {
    try {
      const respuesta = await fetch(`${URL_COLORES}/api/color/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(colorModificado),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
};

export const CrearColorAPI = async (colorNuevo) => {
  try {
    const respuesta = await fetch(`${URL_COLORES}/api/colores`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(colorNuevo),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarColorAPI = async (id) => {
    try {
      const respuesta = await fetch(`${URL_COLORES}/api/color/${id}`, {
        method: "DELETE",
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };
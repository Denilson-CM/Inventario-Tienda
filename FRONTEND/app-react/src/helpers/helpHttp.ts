import { RequestInit } from "../interfaces/types";

export const helpHttp = () => {
  const customFetch = async (endPoint: string, options: RequestInit) => {
    //? definir los headers por defecto
    const defaultHeader = {
      accept: "application/json",
    };

    //? crear un abortControler para cancelar la peticion en un  determinado tiempo
    let controller = new AbortController();
    options.signal = controller.signal;
    //? asiganr el metodo GET por defecto en caso de que la peticion no venga con metodo
    options.method = options?.method || "GET";

    //? Asignar las cabeceras en caso de recibir
    options.headers = options?.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    //? convertir el cuerpo de la peticion a json y en caso de no venir cuerpo, eliminar la propiedad body
    options.body = JSON.stringify(options.body);
    // if (!options.body) delete options.body;

    //? abortar la peticion pasado 3 segundos
    setTimeout(() => {
      controller.abort();
    }, 3000);

    //? realizar la peticion
    let res = await fetch(endPoint, options);
    if (!res.ok) {
      return Promise.reject({
        err: true,
        status: res.status || "00",
        statusMessage: res.statusText || "Ocurrio un error",
      });
    }
    return res.json();
  };

  const get = (endPoint: string, options?: RequestInit) => {
    let request = {};
    return customFetch(endPoint, request);
  };

  const post = (endPoint: string, options: RequestInit) => {
    options.method = "POST";
    return customFetch(endPoint, options);
  };

  const put = (endPoint: string, options: RequestInit) => {
    options.method = "PUT";
    return customFetch(endPoint, options);
  };

  const del = (endPoint: string, options: RequestInit) => {
    options.method = "DELETE";
    return customFetch(endPoint, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};

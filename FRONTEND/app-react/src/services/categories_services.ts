import { urlGuardarC, urlEliminarC, urlListaC } from "../endpoints";
import { helpHttp } from "../helpers/helpHttp";
import { Categories } from "../interfaces/types";

export const getFromCategories = async () => {
  try {
    return await helpHttp().get(urlListaC);
  } catch (error) {
    return error;
  }
};

export const postFromCategories = async (
  listNewCategories: Array<Categories>
) => {
  try {
    const listCategorie = listNewCategories.map((categorie) => {
      let newObject: Categories = {
        nombre: "",
        descripcion: "",
      };
      newObject.nombre = categorie.nombre;
      newObject.descripcion = categorie.descripcion;
      return newObject;
    });
    let listPostCategories = {
      registroCategoria: listCategorie,
    };

    let options = {
      body: listPostCategories,
      headers: { "content-type": "application/json" },
    };
    let res = await helpHttp().post(urlGuardarC, options);

    return res;
  } catch (error) {
    return error;
  }
};

export const delFromCategories = async (idCategorie: string | undefined) => {
  try {
    let options = {
      headers: { "content-type": "application/json" },
    };
    if (idCategorie === undefined) {
      throw new Error("el id de la categoria no funciona");
    }
    let uri = `${urlEliminarC}/${idCategorie}`;
    let res = await helpHttp().del(uri, options);
    return res;
  } catch (error) {
    return error;
  }
};

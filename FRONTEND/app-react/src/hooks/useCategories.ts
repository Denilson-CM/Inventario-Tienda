import { useEffect, useState } from "react";
import { urlListaC } from "../endpoints";
import { helpHttp } from "../helpers/helpHttp";
import { Categories } from "../interfaces/types";

export const useCategories = () => {
  const [listApiCategories, setListApiCategories] = useState<Array<Categories>>(
    []
  );
  const [listNewCategories, setListNewCategories] = useState<Array<Categories>>(
    []
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Object>({});

  useEffect(() => {
    getCategoriesFromApi();
  }, []);

  const getCategoriesFromApi = async () => {
    try {
      setLoading(true);
      let resApi = await helpHttp().get(urlListaC);
      setListApiCategories(resApi);
      setError({});
    } catch (error: any) {
      setListApiCategories([]);
      setError(error);
      setLoading(false);
    }
  };

  const addNewCategorie = (newCategorie: Categories) => {
    setListNewCategories([...listNewCategories, newCategorie]);
  };

  const postCategorie = () => {
    const listPostCategorie = listNewCategories.map((categorie) => {
      let newObject: Categories = {
        nombre: "",
        descripcion: "",
      };
      newObject.nombre = categorie.nombre;
      newObject.descripcion = categorie.descripcion;
      return newObject;
    });
    console.log(listPostCategorie);
  };

  return {
    listApiCategories,
    loading,
    error,
    addNewCategorie,
    postCategorie,
    listNewCategories,
  };
};

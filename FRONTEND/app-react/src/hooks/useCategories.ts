import React, { useEffect, useState } from "react";
import { urlListaC, urlGuardarC } from "../endpoints";
import { helpHttp } from "../helpers/helpHttp";
import { Categories, eventsForm } from "../interfaces/types";

export const useCategories = () => {
  const [listApiCategories, setListApiCategories] = useState<Array<Categories>>(
    []
  );
  const [listNewCategories, setListNewCategories] = useState<Array<Categories>>(
    []
  );
  const [filterCategorie, setFilterCategorie] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Object | null>({});

  useEffect(() => {
    getCategoriesFromApi();
  }, []);

  const getCategoriesFromApi = async () => {
    setLoading(true);
    let resApi = await helpHttp().get(urlListaC);
    if (!resApi.err) {
      setListApiCategories(resApi);
      setError(null);
    } else {
      setListApiCategories([]);
      setError(error);
    }
    setLoading(false);
  };

  const setFilterStateCategorie = (e: eventsForm["change"]) => {
    setFilterCategorie(e.target.value);
  };

  let listCategories = !filterCategorie
    ? listApiCategories
    : listApiCategories.filter((categorie) =>
        categorie.nombre
          .toLocaleLowerCase()
          .includes(filterCategorie.toLocaleLowerCase())
      );

  const addNewCategorie = (newCategorie: Categories) => {
    setListNewCategories([...listNewCategories, newCategorie]);
  };

  const postCategorie = async () => {
    const listPostCategorie = listNewCategories.map((categorie) => {
      let newObject: Categories = {
        nombre: "",
        descripcion: "",
      };
      newObject.nombre = categorie.nombre;
      newObject.descripcion = categorie.descripcion;
      return newObject;
    });

    let options = {
      body: listPostCategorie,
      headers: { "content-type": "application/json" },
    };

    let res = await helpHttp().post(urlGuardarC, options);
    if (!res.err) {
      setListApiCategories([...listApiCategories, res]);
    } else {
      setError(res);
    }
  };

  return {
    listCategories,
    loading,
    error,
    addNewCategorie,
    postCategorie,
    listNewCategories,
    setFilterStateCategorie,
    filterCategorie,
  };
};

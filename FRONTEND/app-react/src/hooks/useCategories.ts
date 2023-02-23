import { useEffect, useState } from "react";
import { urlListaC, urlGuardarC } from "../endpoints";
import { helpHttp } from "../helpers/helpHttp";
import { Categories, eventsForm } from "../interfaces/types";

const INITIAL_CATEGORIE_SELECTED: Categories = {
  id: "",
  nombre: "",
  descripcion: "",
};
export const useCategories = () => {
  const [listApiCategories, setListApiCategories] = useState<Array<Categories>>(
    []
  );
  const [listNewCategories, setListNewCategories] = useState<Array<Categories>>(
    []
  );
  const [filterCategorie, setFilterCategorie] = useState("");

  const [categorieSelected, setcategorieSelected] = useState<Categories>(
    INITIAL_CATEGORIE_SELECTED
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Object | null>({});

  let urlGet = urlListaC;

  useEffect(() => {
    getCategoriesFromApi();
  }, [urlGet]);

  const getCategoriesFromApi = async () => {
    setLoading(true);
    try {
      let resApi = await helpHttp().get(urlListaC);

      setListApiCategories(resApi);
      setError(null);
    } catch (error: any) {
      setListApiCategories([]);
      setError(error);
      setLoading(false);
    }
    setLoading(false);
  };

  const addNewCategorie = (newCategorie: Categories) => {
    console.log(newCategorie);
    setListNewCategories([...listNewCategories, newCategorie]);
  };

  const selectCategorie = (categorieSelect: Categories) => {
    setcategorieSelected(categorieSelect);
  };

  //?Métodos HTTP
  const postCategorie = async () => {
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
    console.log(res);
    if (!res.err) {
      if (res.success) {
        setError(res.success);
      }
      setListApiCategories([...listApiCategories, res]);
    } else {
      setError(res);
    }
  };
  const updateCategorie = () => {
    console.log(categorieSelected);
  };
  const deleteCategorie = () => {
    console.log(categorieSelected);
    let listNewCategories = listApiCategories.filter(
      (categorie) => categorie.id !== categorieSelected.id
    );
    setListApiCategories(listNewCategories);
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
  return {
    listCategories,
    loading,
    error,
    addNewCategorie,
    selectCategorie,
    postCategorie,
    updateCategorie,
    deleteCategorie,
    listNewCategories,
    setFilterStateCategorie,
    categorieSelected,
    filterCategorie,
  };
};

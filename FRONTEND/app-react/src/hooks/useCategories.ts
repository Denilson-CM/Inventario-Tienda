import { useEffect, useMemo, useState } from "react";
import { Categories, eventsForm } from "../interfaces/types";
import {
  delFromCategories,
  getFromCategories,
  postFromCategories,
} from "../services/categories_services";

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

  useEffect(() => {
    getCategoriesFromApi();
  }, []);

  const addNewCategorie = (newCategorie: Categories) => {
    setListNewCategories([...listNewCategories, newCategorie]);
  };

  const selectCategorie = (categorieSelect: Categories) => {
    setcategorieSelected(categorieSelect);
  };

  //?Métodos HTTP
  const getCategoriesFromApi = async () => {
    setLoading(true);

    try {
      let resApi = await getFromCategories();
      setListApiCategories(resApi);
      setError(null);
    } catch (error: any) {
      setListApiCategories([]);
      setError(error);
      setLoading(false);
    }
    setLoading(false);
  };
  const postCategorie = async () => {
    let res = await postFromCategories(listNewCategories);
    if (!res.err) {
      if (res.success) {
        setError(res.success);
      }
      setListNewCategories([]);
      getCategoriesFromApi();
    } else {
      setError(res);
    }
  };
  const updateCategorie = () => {
    console.log(categorieSelected);
  };
  const deleteCategorie = async () => {
    let idCategorie = categorieSelected.id;

    let res = await delFromCategories(idCategorie);

    if (!res.err) {
      let listNewCategories = listApiCategories.filter(
        (categorie) => categorie.id !== categorieSelected.id
      );
      setListApiCategories(listNewCategories);
    } else {
      return null;
    }
  };

  const setFilterStateCategorie = (e: eventsForm["change"]) => {
    setFilterCategorie(e.target.value);
  };

  let listCategories = useMemo(() => {
    if (listApiCategories.length > 0) {
      return listApiCategories.filter((item) =>
        item.nombre
          .toLocaleLowerCase()
          .includes(filterCategorie.toLocaleLowerCase())
      );
    } else {
      return listApiCategories;
    }
  }, [listApiCategories, filterCategorie]);

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

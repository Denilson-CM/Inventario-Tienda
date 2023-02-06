import { useEffect, useState } from "react";
import { urlEliminarC, urlGuardarC, urlListaC, urlListaP } from "../endpoints";
import { Categories } from "../interfaces/types";

export const useFormCategory = () => {
  const [categories, setCategories] = useState<Array<Categories>>([]);

  const loadCategorys = async () => {
    try {
      const responseCategories = await fetch(urlListaC);
      const jsonCategories = await responseCategories.json();
      setCategories(jsonCategories);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadCategorys();
  }, []);

  const saveNewCategory = () => {};
  const deleteCategory = async (id: number) => {
    // const response = await fetch(urlCEliminar + {id}, {
    //     method: "DELETE"
    // })
    // if (response.ok) {
    //     await cargarCategorias();
    // }
  };
  return { saveNewCategory, deleteCategory, categories };
};

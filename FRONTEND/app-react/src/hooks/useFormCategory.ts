import { useEffect, useRef, useState } from "react";
// import { urlEliminarC, urlGuardarC, urlListaC, urlListaP } from "../endpoints";
import { Categories, eventsForm, PropsFormCategory } from "../interfaces/types";

const INITIAL_STATE_LIST_NEW_CATEGORIES: Categories = {
  id: "",
  nombre: "",
  descripcion: "",
  fecha_Creacion: "",
};

export const useFormCategory = (props: PropsFormCategory) => {
  const { methodsFormCategorie, categorieSelected } = props;
  const { addNewCategorie, updateCategorie } = methodsFormCategorie;

  const [newCategorie, setNewCategorie] = useState<Categories>(
    INITIAL_STATE_LIST_NEW_CATEGORIES
  );

  const nameCategorie = useRef<HTMLInputElement>(null);

  useEffect (() => {
    if(categorieSelected){
      setNewCategorie (categorieSelected);
    }
    else{
      setNewCategorie (INITIAL_STATE_LIST_NEW_CATEGORIES);
    }
  }, [categorieSelected])

  const handleChange = (e: eventsForm["change"]) => {
    setNewCategorie({
      ...newCategorie,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    if (!newCategorie.nombre || !newCategorie.descripcion) {
      alert("Datos Incompletos");
      return;
    }

    newCategorie.id = String(new Date().getMilliseconds());
    newCategorie.fecha_Creacion = new Date().toLocaleDateString();
    addNewCategorie(newCategorie);

    nameCategorie.current?.focus();
    handleReset();
  };

  const handleSubmit = (e: eventsForm["submit"]) => {
    e.preventDefault();
    if (newCategorie.id === ""){
      handleAdd();
    }
    else{
      updateCategorie(newCategorie);
    }
  };

  const handleReset = () => {
    setNewCategorie(INITIAL_STATE_LIST_NEW_CATEGORIES);
  };

  return { handleChange, handleSubmit, newCategorie, nameCategorie };
};

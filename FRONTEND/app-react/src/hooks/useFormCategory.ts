import { useRef, useState } from "react";
// import { urlEliminarC, urlGuardarC, urlListaC, urlListaP } from "../endpoints";
import { Categories, eventsForm, PropsFormCategory } from "../interfaces/types";

const INITIAL_STATE_LIST_NEW_CATEGORIES: Categories = {
  id: "",
  nombre: "",
  descripcion: "",
  fecha_Creacion: "",
};

export const useFormCategory = (props: PropsFormCategory) => {
  const { methodsFormCategorie } = props;
  const { addNewCategorie } = methodsFormCategorie;

  const [newCategorie, seNewCategorie] = useState<Categories>(
    INITIAL_STATE_LIST_NEW_CATEGORIES
  );

  const nameCategorie = useRef<HTMLInputElement>(null);

  const handleChange = (e: eventsForm["change"]) => {
    seNewCategorie({
      ...newCategorie,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = (e: eventsForm["submit"]) => {
    e.preventDefault();
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

  const handleReset = () => {
    seNewCategorie(INITIAL_STATE_LIST_NEW_CATEGORIES);
  };

  return { handleChange, handleAdd, newCategorie, nameCategorie };
};

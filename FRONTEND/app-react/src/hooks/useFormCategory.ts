import { useState } from "react";
// import { urlEliminarC, urlGuardarC, urlListaC, urlListaP } from "../endpoints";
import { Categories, PropsFormCategory } from "../interfaces/types";

const INITIAL_STATE_LIST_NEW_CATEGORIES: Categories = {
  id: "",
  nombre: "",
  descripcion: "",
  createdAt: "",
};
interface eventsForm {
  change:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>;
  submit: React.FormEvent<HTMLFormElement>;
}

export const useFormCategory = (props: PropsFormCategory) => {
  const { methodsFormCategorie } = props;
  const { addNewCategorie } = methodsFormCategorie;
  const [newCategorie, seNewCategorie] = useState<Categories>(
    INITIAL_STATE_LIST_NEW_CATEGORIES
  );

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
    newCategorie.createdAt = new Date().toLocaleDateString();
    addNewCategorie(newCategorie);

    handleReset();
  };

  const handleReset = () => {
    seNewCategorie(INITIAL_STATE_LIST_NEW_CATEGORIES);
  };

  return { handleChange, handleAdd, newCategorie };
};

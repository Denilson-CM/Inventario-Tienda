import { useEffect, useState } from "react";
import { BtnShowModal } from "../../components/BtnShowModal/BtnShowModal";
import { FormProductCategory } from "../../components/FormProductCategory/FormProductCategory";
import { ModalInfo } from "../../components/ModalInfo/ModalInfo";
import { TableCategory } from "../../components/TableCategory/TableCategory";
import { urlListaC } from "../../endpoints";
import { useFormCategory } from "../../hooks/useFormCategory";

import { Categories } from "../../interfaces/types";
export const NewCategoryPage = () => {
  const { categories } = useFormCategory();

  const [listApiCategories, setListApiCategories] = useState<Array<Categories>>(
    []
  );
  const getCategories = async () => {
    let resApi = await fetch(urlListaC);
    let jsonListCategories = await resApi.json();
    setListApiCategories(jsonListCategories);
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <section className="container">
      <section className="row mb-3 ">
        <article className="col-6 d-flex justify-content-start">
          <input
            type="email"
            className="form-control "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Nombre de la categoria"
          />
        </article>
        <article className="col-6 d-flex justify-content-end">
          <BtnShowModal titleBtnModal="Agregar Categorias" />
        </article>
      </section>
      <article className="row ">
        <section className="col-12 d-flex justify-content-center align-items-center border ">
          <TableCategory listApiCategories={listApiCategories} />
        </section>
      </article>
      <ModalInfo titleModal="Agregar Categorias">
        <section>
          <FormProductCategory />
          <TableCategory listApiCategories={[]} />
        </section>
      </ModalInfo>
    </section>
  );
};

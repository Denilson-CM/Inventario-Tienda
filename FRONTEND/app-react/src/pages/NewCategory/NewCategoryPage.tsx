import { BtnShowModal } from "../../components/BtnShowModal/BtnShowModal";
import { FormProductCategory } from "../../components/FormProductCategory/FormProductCategory";
import { InputForm } from "../../components/InputForm/InputForm";
import { Loader } from "../../components/Loader/Loader";

import { ModalInfo } from "../../components/ModalInfo/ModalInfo";
import { TableCategories } from "../../components/TableCategories/TableCategories";
import { useCategories } from "../../hooks/useCategories";

export const NewCategoryPage = () => {
  const {
    listApiCategories,
    loading,
    error,
    listNewCategories,
    addNewCategorie,
    postCategorie,
  } = useCategories();

  const methodsFormCategorie = {
    addNewCategorie,
  };

  const valuesInputForm = {};
  return (
    <section className="container">
      <section className="row mb-3 ">
        <article className="col-6 d-flex justify-content-start">
          <form>
            <InputForm />
          </form>
        </article>
        <article className="col-6 d-flex justify-content-end">
          <BtnShowModal titleBtnModal="Agregar Categorias" />
        </article>
      </section>
      <article className="row ">
        <section className="col-12 d-flex justify-content-center align-items-center border ">
          {loading ? (
            <Loader />
          ) : (
            <TableCategories
              headersTable={["Nombre", "Descripción", "Fecha de creación"]}
              list={listApiCategories}
              error={error}
            />
          )}
        </section>
      </article>
      <ModalInfo
        titleModal="Agregar Categorias"
        titleButtonSave="Guardar"
        eventSave={postCategorie}
      >
        <section>
          <FormProductCategory methodsFormCategorie={methodsFormCategorie} />
          <TableCategories
            headersTable={[
              "Nombre",
              "Descripción",
              "Fecha de creación",
              "Opciones",
            ]}
            list={listNewCategories}
            error={false}
          />
        </section>
      </ModalInfo>
    </section>
  );
};

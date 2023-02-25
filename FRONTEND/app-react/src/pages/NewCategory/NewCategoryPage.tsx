import { BtnShowModal } from "../../components/BtnShowModal/BtnShowModal";
import { FormProductCategory } from "../../components/FormProductCategory/FormProductCategory";
import { InputForm } from "../../components/InputForm/InputForm";
import { Loader } from "../../components/Loader/Loader";

import { ModalInfo } from "../../components/ModalInfo/ModalInfo";
import { TableCategories } from "../../components/TableCategories/TableCategories";

import { TableCategoriesLocal } from "../../components/TableCategoriesLocal/TableCategoriesLocal";
import { useCategories } from "../../hooks/useCategories";

export const NewCategoryPage = () => {
  const {
    listCategories,
    loading,
    listNewCategories,
    addNewCategorie,
    postCategorie,
    updateCategorie,
    deleteCategorie,
    setFilterStateCategorie,
    filterCategorie,
    selectCategorie,
    categorieSelected,
  } = useCategories();

  const methodsFormCategorie = {
    addNewCategorie,
  };

  return (
    <section className="container min-vh-100">
      <section className="row mt-3">
        <article className="col-12 text-center">
          <h2>Regitro de Categorias</h2>
        </article>
      </section>
      <section className="container">
        <section className="row ">
          <article className="col-12 d-flex justify-content-end">
            <BtnShowModal
              idTargetModal="modal-add-categories"
              bgColor="bg-primary"
              colorText="white"
            >
              Agregar Categorias
            </BtnShowModal>
          </article>
        </section>
        <section className="row">
          <article className="col-12 p-0 my-4 d-flex justify-content-md-center">
            <InputForm
              id="filter-categories"
              titleInput="Filtrar Categorias"
              name="nombre"
              value={filterCategorie}
              handleChange={setFilterStateCategorie}
            />
          </article>
        </section>
        <article className="row min-vh-100">
          <section className="col-12 d-flex justify-content-center align-items-start  ">
            {loading ? (
              <Loader />
            ) : (
              <TableCategories
                listCategories={listCategories}
                selectCategorie={selectCategorie}
              />
            )}
          </section>
        </article>
        {/* //? modal AGREGAR CATEGORIAS */}
        <ModalInfo
          titleModal="Agregar Categoria"
          titleButtonSave="Enviar"
          titleButtonClose="Cerrar"
          eventSave={postCategorie}
          id="modal-add-categories"
        >
          <section>
            <FormProductCategory methodsFormCategorie={methodsFormCategorie} />
            <TableCategoriesLocal listNewCategories={listNewCategories} />
          </section>
        </ModalInfo>

        {/* //? modal EDITAR CATEGORIAS */}
        <ModalInfo
          titleButtonSave="Editar"
          titleButtonClose="Cérrar"
          titleModal="Editar Categorias"
          id="modal-update-item-categorie"
          eventSave={() => updateCategorie()}
        >
          <form>
            <InputForm
              id="nombre"
              titleInput="Actualizar nombre"
              name="nombre"
            />
          </form>
        </ModalInfo>

        {/* //? modal ELIMINAR CATEGORIAS */}
        <ModalInfo
          titleButtonSave="Si"
          titleButtonClose="No"
          titleModal="Eliminar Categoria"
          id="modal-delete-item-categorie"
          eventSave={() => deleteCategorie()}
        >
          <p>Estas seguro de eliminar {categorieSelected.nombre}?</p>
        </ModalInfo>
      </section>
    </section>
  );
};

import { BtnShowModal } from "../../components/BtnShowModal/BtnShowModal";
import { FormProductCategory } from "../../components/FormProductCategory/FormProductCategory";
import { InputForm } from "../../components/InputForm/InputForm";
import { Loader } from "../../components/Loader/Loader";

import { ModalInfo } from "../../components/ModalInfo/ModalInfo";
import { TableInfo } from "../../components/TableCategories/TableInfo";
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
      <section className="row bg-success">
        <article className="col-12">aqui va a ir algo</article>
      </section>
      <section className="container">
        <section className="row">
          <article className="col-12 p-0 my-4 d-flex justify-content-md-between">
            <InputForm
              id="filter-categories"
              titleInput="Filtrar Categorias"
              name="nombre"
              value={filterCategorie}
              handleChange={setFilterStateCategorie}
            />
            <BtnShowModal
              titleBtnModal="Agregar Categorias"
              idTargetModal="modal-add-categories"
              bgColor="bg-primary"
              colorText="white"
            />
          </article>
        </section>
        <article className="row min-vh-100">
          <section className="col-12 d-flex justify-content-center align-items-start  ">
            {loading ? (
              <Loader />
            ) : (
              <TableInfo
                headersTable={[
                  "Nombre",
                  "Comentarios",
                  "Fecha de creación",
                  "Opciones",
                ]}
              >
                {listCategories.length > 0 ? (
                  listCategories.map((categorie, index) => (
                    <tr key={categorie?.id}>
                      <td>{categorie["nombre"]}</td>
                      <td>{categorie?.descripcion}</td>
                      <td>{categorie?.fecha_Creacion}</td>
                      <td>
                        <BtnShowModal
                          titleBtnModal="Actualizar"
                          idTargetModal="modal-update-item-categorie"
                          bgColor="yellow"
                          className="me-3"
                          event={() => selectCategorie(categorie)}
                        />
                        <BtnShowModal
                          titleBtnModal="Eliminar"
                          idTargetModal="modal-delete-item-categorie"
                          bgColor="red"
                          colorText="white"
                          event={() => selectCategorie(categorie)}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="bg-danger p-2 text-white bg-opacity-75 text-center"
                    >
                      <h2>Sin Datos</h2>
                    </td>
                  </tr>
                )}
              </TableInfo>
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
            <TableInfo headersTable={["Nombre", "Descripción"]}>
              {listNewCategories.length > 0 ? (
                listNewCategories.map((categorie) => (
                  <tr key={categorie?.id}>
                    <td>{categorie?.nombre}</td>
                    <td>{categorie?.descripcion}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="bg-danger p-2 text-white bg-opacity-75 text-center"
                  >
                    <h2>Sin Datos</h2>
                  </td>
                </tr>
              )}
            </TableInfo>
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

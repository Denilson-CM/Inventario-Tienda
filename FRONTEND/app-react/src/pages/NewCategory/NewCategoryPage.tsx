import { BtnShowModal } from "../../components/BtnShowModal/BtnShowModal";
import { FormProductCategory } from "../../components/FormProductCategory/FormProductCategory";
import { InputForm } from "../../components/InputForm/InputForm";
import { Loader } from "../../components/Loader/Loader";

import { ModalInfo } from "../../components/ModalInfo/ModalInfo";
import { TableCategories } from "../../components/TableCategories/TableCategories";
import { useCategories } from "../../hooks/useCategories";

export const NewCategoryPage = () => {
  const {
    listCategories,
    loading,
    listNewCategories,
    addNewCategorie,
    postCategorie,
    setFilterStateCategorie,
    filterCategorie,
  } = useCategories();

  const methodsFormCategorie = {
    addNewCategorie,
  };

  // const valuesInputForm = {};
  return (
    <section className="container">
      <section className="row bg-success">
        <article className="col-12">aqui va a ir algo</article>
      </section>
      <section className="container">
        <section className="row  border">
          <article className="col-12 p-0 my-4 d-flex justify-content-md-between">
            <InputForm
              id="filter-categories"
              titleInput="Filtrar Categorias"
              name="nombre"
              value={filterCategorie}
              handleChange={setFilterStateCategorie}
            />
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
              >
                {listCategories.length > 0 ? (
                  listCategories.map((categorie, index) => (
                    <tr key={categorie?.id}>
                      <td>{categorie["nombre"]}</td>
                      <td>{categorie?.descripcion}</td>
                      <td>{categorie?.fecha_Creacion}</td>
                      <td>
                        <div>
                          <button
                            type="button"
                            className="btn btn-warning me-3"
                          >
                            Actualizar
                          </button>
                          <button type="button" className="btn btn-danger">
                            Eliminar
                          </button>
                        </div>
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
              </TableCategories>
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
              headersTable={["Nombre", "Descripción", "Opciones"]}
            >
              {listNewCategories.length > 0 ? (
                listNewCategories.map((categorie) => (
                  <tr key={categorie?.id}>
                    <td>{categorie?.nombre}</td>
                    <td>{categorie?.descripcion}</td>
                    <td>
                      <div>
                        <button type="button" className="btn btn-warning me-3">
                          Actualizar
                        </button>
                        <button type="button" className="btn btn-danger">
                          Eliminar
                        </button>
                      </div>
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
            </TableCategories>
          </section>
        </ModalInfo>
      </section>
    </section>
  );
};

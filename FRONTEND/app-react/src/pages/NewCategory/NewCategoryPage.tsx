import { BtnShowModal } from "../../components/BtnShowModal/BtnShowModal";
import { FormProductCategory } from "../../components/FormProductCategory/FormProductCategory";
import { Loader } from "../../components/Loader/Loader";
import { ModalInfo } from "../../components/ModalInfo/ModalInfo";
import { TableCategory } from "../../components/TableCategory/TableCategory";
import { useCategories } from "../../hooks/useCategories";

export const NewCategoryPage = () => {
  const { listApiCategories, loading, error } = useCategories();
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
          {loading ? (
            <Loader />
          ) : (
            <TableCategory>
              <thead>
                <tr>
                  <th scope="col">Categoria</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Fecha de registro</th>
                </tr>
              </thead>
              <tbody>
                {!error ? (
                  listApiCategories.map((categorie) => (
                    <tr key={categorie?.id}>
                      {/* <th scope="row">{categorie?.id}</th> */}
                      <td>{categorie?.nombre}</td>
                      <td>{categorie?.descripcion}</td>
                      <td>{categorie?.createdAt.slice(0, 10)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="bg-danger text-center">
                      <h2>Sin datos</h2>
                    </td>
                  </tr>
                )}
              </tbody>
            </TableCategory>
          )}
        </section>
      </article>
      <ModalInfo titleModal="Agregar Categorias">
        <section>
          <FormProductCategory />
          <TableCategory>
            <thead>
              <tr>
                <th scope="col">Categoria</th>
                <th scope="col">Descripción</th>
                <th scope="col">Fecha de registro</th>
              </tr>
            </thead>
            <tbody>
              {listApiCategories.map((categorie) => (
                <tr key={categorie?.id}>
                  {/* <th scope="row">{categorie?.id}</th> */}
                  <td>{categorie?.nombre}</td>
                  <td>{categorie?.descripcion}</td>
                  <td>{categorie?.createdAt.slice(0, 10)}</td>
                </tr>
              ))}
            </tbody>
          </TableCategory>
        </section>
      </ModalInfo>
    </section>
  );
};

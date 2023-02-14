import { BtnShowModal } from "../../components/BtnShowModal/BtnShowModal";
import { FormProductCategory } from "../../components/FormProductCategory/FormProductCategory";
import { Loader } from "../../components/Loader/Loader";
import { ModalInfo } from "../../components/ModalInfo/ModalInfo";
import { MyTable } from "../../components/MyTable/MyTable";
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
            <MyTable list={listApiCategories} error={error} />
          )}
        </section>
      </article>
      <ModalInfo titleModal="Agregar Categorias">
        <section>
          <FormProductCategory />
          <MyTable list={[]} />
        </section>
      </ModalInfo>
    </section>
  );
};

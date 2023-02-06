import { FormProductCategory } from "../../components/FormProductCategory/FormProductCategory";
import { TableCategory } from "../../components/TableCategory/TableCategory";
import { useFormCategory } from "../../hooks/useFormCategory";
export const NewCategoryPage = () => {
  const { categories } = useFormCategory();

  return (
    <section className="container bg-danger">
      <article className="row">
        <section className="col-8">
          <TableCategory />
        </section>
        <section className="col-4">
          <FormProductCategory />
        </section>
      </article>
    </section>
  );
};

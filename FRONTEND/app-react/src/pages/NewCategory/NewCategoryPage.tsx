import { useEffect, useState } from "react";
import { FormProductCategory } from "../../components/FormProductCategory/FormProductCategory";
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
    <section className="container bg-danger">
      <article className="row">
        <section className="col-8">
          <TableCategory listApiCategories={listApiCategories} />
        </section>
        <section className="col-4">
          <FormProductCategory />
        </section>
      </article>
    </section>
  );
};

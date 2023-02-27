import React from "react";
import { Categories } from "../../interfaces/types";
interface Props {
  listNewCategories: Categories[];
}
export const TableCategoriesLocal = (props: Props) => {
  const { listNewCategories } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Descripción</th>
        </tr>
      </thead>
      <tbody>
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
      </tbody>
    </table>
  );
};

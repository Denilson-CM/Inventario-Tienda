import { Categories } from "../../interfaces/types";

interface Props {
  headersTable: Array<string>;
  list: Array<Categories>;
  error?: Object;
}
export const TableCategories = (props: Props) => {
  const { headersTable, list, error } = props;

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {headersTable.map((header) => (
            <th key={header} scope="col">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {!error ? (
          list.map((categorie) => (
            <tr key={categorie?.id}>
              <td>{categorie?.nombre}</td>
              <td>{categorie?.descripcion}</td>
              <td>{categorie?.createdAt?.slice(0, 10)}</td>
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

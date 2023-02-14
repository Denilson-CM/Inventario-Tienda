import { Categories } from "../../interfaces/types";

interface Props {
  list: Array<Categories>;
  error?: object;
}
export const MyTable = (props: Props) => {
  const { list, error } = props;
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Categoria</th>
          <th scope="col">Descripción</th>
          <th scope="col">Fecha de registro</th>
        </tr>
      </thead>
      <tbody>
        {!error ? (
          list.map((categorie) => (
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
    </table>
  );
};

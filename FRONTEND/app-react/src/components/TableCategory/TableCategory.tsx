import { Categories } from "../../interfaces/types";
interface Props {
  listApiCategories: Array<undefined | Categories>;
}
export const TableCategory = (props: Props) => {
  const { listApiCategories } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Producto</th>
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
    </table>
  );
};

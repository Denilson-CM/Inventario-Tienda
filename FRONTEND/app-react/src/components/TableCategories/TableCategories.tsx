import { Categories } from "../../interfaces/types";
import { BtnShowModal } from "../BtnShowModal/BtnShowModal";

interface Props {
  listCategories: Categories[];
  selectCategorie: (categorieSelect: Categories) => void;
}
export const TableCategories = (props: Props) => {
  const { listCategories, selectCategorie } = props;

  return (
    <table className="table  table-hover">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Comentarios</th>
          <th scope="col">Fecha de creación</th>
          <th scope="col">Fecha de actualización</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>
        {listCategories.length > 0 ? (
          listCategories.map((categorie, index) => (
            <tr key={categorie?.id}>
              <td>{categorie["nombre"]}</td>
              <td>{categorie?.descripcion}</td>
              <td>{categorie?.fecha_Creacion}</td>
              <td></td>
              <td>
                <BtnShowModal
                  idTargetModal="modal-update-item-categorie"
                  bgColor="yellow"
                  className="me-3"
                  event={() => selectCategorie(categorie)}
                >
                  Actualizar
                </BtnShowModal>
                <BtnShowModal
                  idTargetModal="modal-delete-item-categorie"
                  bgColor="red"
                  colorText="white"
                  event={() => selectCategorie(categorie)}
                >
                  Eliminar
                </BtnShowModal>
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
      </tbody>
    </table>
  );
};

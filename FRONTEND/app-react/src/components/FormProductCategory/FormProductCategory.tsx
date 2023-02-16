import { useFormCategory } from "../../hooks/useFormCategory";
import { PropsFormCategory } from "../../interfaces/types";

export const FormProductCategory = (props: PropsFormCategory) => {
  const { handleChange, handleAdd, newCategorie } = useFormCategory(props);

  return (
    <form onSubmit={handleAdd}>
      <div className="form-floating mb-3">
        <input
          type="text"
          id="nombre-categoria"
          className="form-control"
          name="nombre"
          value={newCategorie.nombre}
          onChange={handleChange}
          placeholder="Escribe aqui la nueva categoria"
        />
        <label htmlFor="nombre-categoria">Nueva Categoria</label>
      </div>

      <div className="form-floating mb-3" style={{ height: "8rem" }}>
        <textarea
          id="descripcion-categoria"
          className="form-control h-100"
          name="descripcion"
          onChange={handleChange}
          value={newCategorie.descripcion}
          placeholder="Escribe aqui la descripción de la categoria"
          style={{ resize: "none" }}
        ></textarea>
        <label htmlFor="descripcion-categoria">Descripción</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Agregar
      </button>
    </form>
  );
};

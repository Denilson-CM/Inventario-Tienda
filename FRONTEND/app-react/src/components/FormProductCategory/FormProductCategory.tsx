interface Props {}
export const FormProductCategory = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="nombre-categoria" className="form-label">
          Categoria
        </label>
        <input
          type="text"
          className="form-control"
          id="nombre-categoria"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descripcion-categoria" className="form-label">
          Descripcion de la categoria
        </label>
        <input
          type="text"
          className="form-control"
          id="descripcion-categoria"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Agregar
      </button>
    </form>
  );
};

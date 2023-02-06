interface Props {}
export const FormProductCategory = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="nombre-producto" className="form-label">
          Nombre del producto
        </label>
        <input
          type="email"
          className="form-control"
          id="nombre-producto"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descripcion-producto" className="form-label">
          Descripcion del producto
        </label>
        <input
          type="password"
          className="form-control"
          id="descripcion-producto"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

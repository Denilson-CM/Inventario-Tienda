interface Props {}
export const InputForm = (props: any) => {
  const { id, value, name, handleChange, titleInput } = props;
  return (
    <div className="form-floating mb-3">
      <input
        type="text"
        id={id}
        className="form-control"
        name={name}
        value={value}
        onChange={handleChange}
        placeholder="Escribe aqui la nueva categoria"
      />
      <label htmlFor="nombre-categoria">{titleInput}</label>
    </div>
  );
};

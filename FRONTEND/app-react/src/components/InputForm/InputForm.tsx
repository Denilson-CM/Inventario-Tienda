import { eventsForm } from "../../interfaces/types";

interface Props {
  id: string;
  value?: string;
  name: string;
  handleChange?: (e: eventsForm["change"]) => void;
  titleInput: string;
}
export const InputForm = (props: Props) => {
  const { id, value, name, handleChange, titleInput } = props;
  return (
    <div className="form-floating">
      <input
        type="text"
        id={id}
        className="form-control h-100"
        name={name}
        onChange={handleChange}
        value={value}
        placeholder="Escribe aqui la nueva categoria"
      />
      <label htmlFor={id}>{titleInput}</label>
    </div>
  );
};

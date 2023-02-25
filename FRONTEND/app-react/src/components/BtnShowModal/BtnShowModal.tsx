interface Props {
  idTargetModal: string;
  className?: string;
  bgColor: string;
  colorText?: string;
  children: string;
  event?: () => void;
}
export const BtnShowModal = (props: Props) => {
  const {
    idTargetModal,
    bgColor,
    className,
    children,
    colorText = "#000",
    event,
  } = props;

  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color: colorText }}
      className={`btn h-100 ${bgColor} ${className}`}
      data-bs-toggle="modal"
      data-bs-target={`#${idTargetModal}`}
      onClick={event}
    >
      {children}
    </button>
  );
};

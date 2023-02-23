interface Props {
  titleBtnModal: string;
  idTargetModal: string;
  className?: string;
  bgColor: string;
  colorText?: string;
  event?: () => void;
}
export const BtnShowModal = (props: Props) => {
  const {
    titleBtnModal,
    idTargetModal,
    bgColor,
    className,
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
      {titleBtnModal}
    </button>
  );
};

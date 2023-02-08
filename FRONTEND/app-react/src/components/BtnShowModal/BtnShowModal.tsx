interface Props {
  titleBtnModal: string;
}
export const BtnShowModal = (props: Props) => {
  const { titleBtnModal } = props;
  return (
    <button
      type="button"
      className="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      {titleBtnModal}
    </button>
  );
};

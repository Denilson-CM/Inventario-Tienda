interface Props {
  titleModal: string;
  children: JSX.Element;
}
export const ModalInfo = (props: Props) => {
  const { children, titleModal } = props;
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title fs-5" id="staticBackdropLabel">
              {titleModal}
            </h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cérrar
            </button>
            <button type="button" className="btn btn-primary">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface Props {
  titleModal: string;
  titleButtonSave: string;
  titleButtonClose: string;
  children: JSX.Element;
  eventSave?: () => void;
  id: string;
}
export const ModalInfo = (props: Props) => {
  const {
    children,
    titleModal,
    titleButtonSave = "Enviar",
    eventSave,
    id,
    titleButtonClose,
  } = props;
  return (
    <div
      className="modal fade"
      id={id}
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
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={eventSave}
            >
              {titleButtonSave}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              {titleButtonClose}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface Props {
  titleButtonSave: string;
  titleButtonClose: string;
  eventSave?: () => void;
}

export const ModalFooter = (props: Props) => {
  const { eventSave, titleButtonSave, titleButtonClose } = props;
  return (
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
  );
};

interface Props {
  children: Array<JSX.Element>;
}
export const TableCategory = (props: Props) => {
  const { children } = props;
  return <table className="table table-striped">{children}</table>;
};

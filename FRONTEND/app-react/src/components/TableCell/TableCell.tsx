interface Props {
  value: string | number;
}
export const TableCell = (props: Props) => {
  const { value } = props;
  return <td>{value}</td>;
};

interface Props {
  headersTable: Array<string>;
  children: JSX.Element | JSX.Element[];
}
export const TableCategories = (props: Props) => {
  const { headersTable, children } = props;

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {headersTable.map((header) => (
            <th key={header} scope="col">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

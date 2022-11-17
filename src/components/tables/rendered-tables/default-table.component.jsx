import { TableDiv } from "../../../styles/div/div.styles";
import { TableWithStyle } from "../../../styles/table/table.styles";

const DefaultTable = ({
  initialState,
  headerGroups,
  getTableProps,
  getTableBodyProps,
  page,
  prepareRow,
}) => {
  return (
    <TableDiv>
      <TableWithStyle initialState={initialState} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " ⬇️"
                        : " ⬆️"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </TableWithStyle>
    </TableDiv>
  );
};
export default DefaultTable;

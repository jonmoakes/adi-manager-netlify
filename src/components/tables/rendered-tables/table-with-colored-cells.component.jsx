import { useLocation } from "react-router-dom";

import { TableDiv } from "../../../styles/div/div.styles";
import {
  TableWithStyle,
  PaidCell,
  NotPaidCell,
  JanuaryCell,
  FebCell,
  MarchCell,
  AprilCell,
  MayCell,
  JuneCell,
  JulyCell,
  AugustCell,
  SeptemberCell,
  OctoberCell,
  NovemberCell,
  DecemberCell,
  BlockBookingCell,
} from "../../../styles/table/table.styles";

import { lessonsPath, incomePath } from "../../../strings/strings";

const TableWithColoredCells = ({
  initialState,
  headerGroups,
  getTableProps,
  getTableBodyProps,
  page,
  prepareRow,
}) => {
  const location = useLocation();

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
                  const cellDate = cell.row.original.date;
                  const cellPaid = cell.row.original.paid;
                  if (
                    location.pathname === incomePath &&
                    cell.row.original.blockBooking.includes("Yes")
                  ) {
                    return (
                      <BlockBookingCell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </BlockBookingCell>
                    );
                  } else if (
                    location.pathname === lessonsPath &&
                    cellPaid.includes("Yes")
                  ) {
                    return (
                      <PaidCell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </PaidCell>
                    );
                  } else if (
                    location.pathname === lessonsPath &&
                    cellPaid.includes("No")
                  ) {
                    return (
                      <NotPaidCell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </NotPaidCell>
                    );
                  } else if (cellDate.includes("-01-")) {
                    return (
                      <JanuaryCell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </JanuaryCell>
                    );
                  } else if (cellDate.includes("-02-")) {
                    return (
                      <FebCell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </FebCell>
                    );
                  } else if (cellDate.includes("-03-")) {
                    return (
                      <MarchCell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </MarchCell>
                    );
                  } else if (cellDate.includes("-04-")) {
                    return (
                      <AprilCell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </AprilCell>
                    );
                  } else if (cellDate.includes("-05-")) {
                    return (
                      <MayCell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </MayCell>
                    );
                  } else if (cellDate.includes("-06-")) {
                    return (
                      <JuneCell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </JuneCell>
                    );
                  } else if (cellDate.includes("-07-")) {
                    return (
                      <JulyCell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </JulyCell>
                    );
                  } else if (cellDate.includes("-08-")) {
                    return (
                      <AugustCell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </AugustCell>
                    );
                  } else if (cellDate.includes("-09-")) {
                    return (
                      <SeptemberCell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </SeptemberCell>
                    );
                  } else if (cellDate.includes("-10-")) {
                    return (
                      <OctoberCell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </OctoberCell>
                    );
                  } else if (cellDate.includes("-11-")) {
                    return (
                      <NovemberCell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </NovemberCell>
                    );
                  } else if (cellDate.includes("-12-")) {
                    return (
                      <DecemberCell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </DecemberCell>
                    );
                  } else {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </TableWithStyle>
    </TableDiv>
  );
};
export default TableWithColoredCells;

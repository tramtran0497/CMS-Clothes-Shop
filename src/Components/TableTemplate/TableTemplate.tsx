import React from "react";
import {
  Container,
  TableRow,
  Table,
  TableHead,
  TableDisplay,
  TitleTable,
} from "./TableStyles";
interface TableProps {
  list: Sales[];
  headers: string[];
  title: string;
}

export const TableTemplate: React.FC<TableProps> = ({ list, headers, title }) => {
  return (
    <Container>
      <TitleTable>{title}</TitleTable>
      <Table>
        <TableRow>
          {headers.map(header =>  <TableHead>{header}</TableHead>)}
        </TableRow>
        {list.map((item) => {
          return (
            <TableRow>
              <TableDisplay>{item.month}</TableDisplay>
              <TableDisplay>{item.acsSales}</TableDisplay>
              <TableDisplay>{item.manCloSales}</TableDisplay>
              <TableDisplay>{item.womanCloSales}</TableDisplay>
              <TableDisplay>{item.shoesSales}</TableDisplay>
              <TableDisplay>{item.bagsSales}</TableDisplay>
              <TableDisplay>{item.sum}</TableDisplay>
            </TableRow>
          );
        })}
      </Table>
    </Container>
  );
};

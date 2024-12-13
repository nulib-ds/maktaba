// @ts-nocheck

import { Box, Table } from "@radix-ui/themes";

function isArray(value: any): value is any[] {
  return Array.isArray(value);
}

const MDXTable = (props: HTMLTableElement) => {
  const { children } = props;
  return (
    <Box my="3" mb="6">
      <Table.Root variant="surface">
        {children.map((element) => {
          const { type, props } = element;
          if (type === "thead") return <MDXTableHeader {...props} />;
          if (type === "tbody") return <MDXTableBody {...props} />;
        })}
      </Table.Root>
    </Box>
  );
};

const MDXTableHeader = (props) => {
  const { children } = props.children.props;
  return (
    <Table.Header>
      <Table.Row>
        {children.map((element, index) => {
          const { props } = element;
          return <MDXTableHeaderCell {...props} key={index} />;
        })}
      </Table.Row>
    </Table.Header>
  );
};

const MDXTableBody = (props) => {
  const { children } = props;
  return (
    <Table.Body>
      {children.map((element, index) => {
        const { props } = element;
        return <MDXTableRow {...props} key={index} />;
      })}
    </Table.Body>
  );
};

const MDXTableRow = (props: HTMLTableRowElement) => {
  const { children } = props;
  return (
    <Table.Row>
      {isArray(children) ? (
        children.map((element, index) => {
          const { props } = element;
          return <MDXTableCell {...props} key={index} />;
        })
      ) : (
        <MDXTableCell {...props} />
      )}
    </Table.Row>
  );
};

const MDXTableCell = (props: HTMLTableCellElement) => {
  const { children } = props;
  return <Table.Cell>{children}</Table.Cell>;
};

const MDXTableHeaderCell = (props: HTMLTableCellElement) => {
  const { children } = props;
  return <Table.RowHeaderCell>{children}</Table.RowHeaderCell>;
};

export default MDXTable;

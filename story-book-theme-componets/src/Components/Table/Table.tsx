import {
  Checkbox,
  CircularProgress,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';

import { CSSProperties } from 'react';
import React from 'react';

interface Column {
  heading: React.ReactNode | string;
  dataLabel: string;
  render: (item: any, fullItem?: any, index?: number) => React.ReactNode;
  columnHeaderStyle?: React.CSSProperties;
  columnDataStyle?: React.CSSProperties;
}

export interface TableComponentProps {
  id?: string;
  data: any[];
  columns: Column[];
  selectable?: boolean;
  onSelect?: (selectedRow: any) => void;
  tableStyle?: CSSProperties;
  className?: string;
  loading?: boolean;
  paginationStyle?: CSSProperties;
  onPageChange?: (pageNumber: number) => void;
  totalCount: number;
  currentPage?: number;
  rowsPerPage?: number;
  paginationCount?: number;
  disabled?: boolean;
  showPagination?: boolean;
  selectionType?: 'checkbox' | 'radio';
}

const TableComponent: React.FC<TableComponentProps> = ({
  id,
  data,
  columns,
  selectable = false,
  onSelect,
  tableStyle,
  className,
  loading = false,
  paginationStyle,
  onPageChange,
  totalCount,
  currentPage = 0,
  rowsPerPage = 10,
  paginationCount = 5,
  disabled = false,
  showPagination = true,
  selectionType = 'checkbox',
}) => {
  const [page, setPage] = React.useState(currentPage);
  const [rowsPerPageState, setRowsPerPageState] = React.useState(rowsPerPage);
  const [selectedRow, setSelectedRow] = React.useState<number | null>(null);

  const handleSelectRow = (item: any, index: number) => {
    if (disabled) return;
    setSelectedRow(index);
    onSelect?.(item);
  };

  const handlePageChange = (_event: unknown, newPage: number) => {
    setPage(newPage);
    onPageChange?.(newPage);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPageState(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer style={tableStyle} className={className}>
      <Table id={id}>
        {/* Table Head */}
        <TableHead>
          <TableRow>
            {selectable && <TableCell />}
            {columns.map((col, colIndex) => (
              <TableCell key={colIndex} style={col.columnHeaderStyle}>
                {col.heading}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell
                colSpan={columns.length + (selectable ? 1 : 0)}
                align='center'
              >
                <CircularProgress />
              </TableCell>
            </TableRow>
          ) : (
            data
              .slice(
                page * rowsPerPageState,
                page * rowsPerPageState + rowsPerPageState
              )
              .map((item, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  onClick={() => selectable && handleSelectRow(item, rowIndex)}
                  hover
                >
                  {selectable && (
                    <TableCell padding='checkbox'>
                      {selectionType === 'checkbox' ? (
                        <Checkbox
                          checked={selectedRow === rowIndex}
                          onChange={() => handleSelectRow(item, rowIndex)}
                          disabled={disabled}
                        />
                      ) : (
                        <Radio
                          checked={selectedRow === rowIndex}
                          onChange={() => handleSelectRow(item, rowIndex)}
                          disabled={disabled}
                        />
                      )}
                    </TableCell>
                  )}
                  {columns.map((col, colIndex) => (
                    <TableCell key={colIndex} style={col.columnDataStyle}>
                      {col.render(item, data, rowIndex)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
          )}
        </TableBody>
      </Table>

      {/* Pagination */}
      {showPagination && (
        <TablePagination
          component='div'
          count={totalCount}
          page={page}
          onPageChange={handlePageChange}
          rowsPerPage={rowsPerPageState}
          onRowsPerPageChange={handleRowsPerPageChange}
          rowsPerPageOptions={[5, 10, 20, 50]}
          style={paginationStyle}
        />
      )}
    </TableContainer>
  );
};

export default TableComponent;

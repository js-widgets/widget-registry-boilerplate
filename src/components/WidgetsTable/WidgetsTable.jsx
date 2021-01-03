import React, { useState } from 'react';
import Fuse from 'fuse.js';
import PropTypes from 'prop-types';
import {
  DataTable,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableExpandedRow,
  TableExpandHeader,
  TableExpandRow,
  TableHead,
  TableHeader,
  TableRow,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
} from 'carbon-components-react';
import { Link } from 'react-router-dom';
import { ArrowRight16 } from '@carbon/icons-react';

const WidgetsTable = ({ rows, headers, descriptions }) => {
  const [filtered, setFiltered] = useState(rows);
  const [keyword, setKeyword] = useState('');

  const fuse = new Fuse(rows, {
    keys: ['name'],
  });

  return (
    <DataTable
      rows={keyword ? filtered : rows}
      headers={headers}
      render={({ rows, headers, getHeaderProps, getRowProps, getTableProps }) => (
        <TableContainer>
          <TableToolbar aria-label="data table toolbar">
            <TableToolbarContent>
              <TableToolbarSearch
                onChange={(e) => {
                  setKeyword(e.target.value);
                  setFiltered(fuse.search(e.target.value).map(({ item }) => item));
                }}
              />
            </TableToolbarContent>
          </TableToolbar>

          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                <TableExpandHeader />
                {headers.map((header) => (
                  <TableHeader
                    key={`header-${header.key}`}
                    {...getHeaderProps({
                      header,
                      isSortable: header.isSortable,
                    })}
                  >
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                const widgetId = `${getRowProps({ row }).key}`;
                return (
                  <React.Fragment key={row.id}>
                    <TableExpandRow {...getRowProps({ row })}>
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id} className={`bx--table-cell__${cell.info.header}`}>
                          {cell.value}
                        </TableCell>
                      ))}
                    </TableExpandRow>
                    <TableExpandedRow colSpan={headers.length + 1}>
                      <h6>Description</h6>
                      <div>{descriptions[widgetId]}</div>
                      <div className="bx--expandable-row--ctas">
                        <Link to={`/widget-type/${widgetId}`} className="bx--btn bx--btn--tertiary">
                          More details <ArrowRight16 className="bx--btn__icon" />
                        </Link>
                      </div>
                    </TableExpandedRow>
                  </React.Fragment>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  );
};

WidgetsTable.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      header: PropTypes.string,
    }),
  ),
  rows: PropTypes.arrayOf(PropTypes.object),
  descriptions: PropTypes.object,
};

export default WidgetsTable;

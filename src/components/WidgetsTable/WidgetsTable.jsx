import React, { useState } from 'react';
import Fuse from 'fuse.js';
import PropTypes from 'prop-types';
import {
  CodeSnippet,
  DataTable,
  Dropdown,
  Link as CarbonLink,
  ListItem,
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
  UnorderedList,
} from 'carbon-components-react';
import { Link } from 'react-router-dom';
import { ArrowRight16, UserAvatar16 } from '@carbon/icons-react';

const WidgetsTable = ({ rows, headers, descriptions }) => {
  const [filtered, setFiltered] = useState(rows);
  const [keyword, setKeyword] = useState('');

  const fuse = new Fuse(rows, {
    keys: ['name', 'owner.name', 'status'],
  });

  function renderCellValue(cell) {
    // Render some of the values in a special way.
    const id = cell.id.split(':')[1];
    switch (id) {
      case 'owner':
        return typeof cell.value === 'object' ? (
          <CarbonLink href={`mailto:${cell.value.email}`}>
            <UserAvatar16 style={{ verticalAlign: 'middle' }} /> {cell.value.name}
          </CarbonLink>
        ) : null;
      case 'translations':
        return cell.value ? (
          <UnorderedList className="bx--list__langcodes">
            {cell.value.map((langcode) => (
              <ListItem key={`item-${langcode}`}>
                <CodeSnippet type="inline">{langcode}</CodeSnippet>
              </ListItem>
            ))}
          </UnorderedList>
        ) : null;
      case 'websegments':
        return cell.value ? (
          <UnorderedList className="bx--list__websegments">
            {cell.value.map((ws, i) => (
              <ListItem key={`ws-${i}`}>
                <CodeSnippet type="inline">{ws}</CodeSnippet>
              </ListItem>
            ))}
          </UnorderedList>
        ) : null;
      case 'status':
        return cell.value ? (
          <CodeSnippet type="inline" className={`status--${cell.value}`}>
            {cell.value}
          </CodeSnippet>
        ) : null;
      case 'links':
        return cell.value ? (
          <Dropdown
            id="default"
            label="- Please select -"
            items={cell.value}
            itemToString={(item) => (item ? item.text : '')}
            onChange={({ selectedItem: { id: url } }) => {
              window.location.href = url;
            }}
          />
        ) : null;
      default:
        return cell.value;
    }
  }

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
                    {...getHeaderProps({ header, isSortable: header.isSortable })}
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
                          {renderCellValue(cell)}
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

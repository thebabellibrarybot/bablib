import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useTable, useSortBy, useGlobalFilter, usePagination, useRowSelect } from 'react-table';
import { COLUMNS } from '../components/tombcolumns';
import '../styles/table.css';
import { useEffect, useState } from "react";
import axios from "axios";
import GlobalFilter from "./globalFilter";
import { Checkbox } from './selectBox'

//import { useParams } from "react-router-dom";
//import MOCK_DATA from '../MOCK_DATA.json';





const BasicTable = () => {


    //const params = useParams();
    const [data, setData] = useState([]);
 
    useEffect(() => {
      axios('/babeltombs/')
        .then((res) => {
         setData(res.data);
        })
        .catch((err) => console.log(err))
    }, []);

    
    //console.log(data);


    const columns = useMemo(() => COLUMNS, [])
    //const datam = useMemo(() => data, [])
    
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      footerGroups,
      page,
      nextPage,
      previousPage,
      prepareRow,
      selectedFlatRows,
      canNextPage,
      canPreviousPage,
      pageOptions,
      state,
      setGlobalFilter
    } = useTable({
      columns,
      data
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />
        },
        ...columns
      ])
    },
    )

    const { globalFilter } = state
    const { pageIndex } = state
  
    return (
      <>
      <GlobalFilter filter = {globalFilter} setFilter={setGlobalFilter} />
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render('Header')}
                        <span>
                            {column.isSorted
                            ? column.isSortedDesc
                                ? ' 🔽'
                                : ' 🔼'
                            : ''}
                        </span>
                    </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  
                  {row.cells.map(cell => {
                    //console.log(cell, 'row cell log')
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}

          </tbody>
          <tfoot>
            {footerGroups.map(footerGroup => (
              <tr {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map(column => (
                  <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
        <pre>
          <Link to = {`/babeltombs/${selectedFlatRows.map(row => row.original._id)}`} key=
            {
              selectedFlatRows.map(row => row.original._id)
            }>
            <h2>
              view tomb:  {selectedFlatRows.map(row => row.original.book_title)}
            </h2>
            <p>location: {selectedFlatRows.map(row => row.original.location)}</p>
          </Link>
        
      </pre>
        <div>
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
          <button onClick = {() => previousPage()} disabled = {!canPreviousPage}>back</button>
          <button onClick={() => nextPage()} disabled = {!canNextPage}>next</button>
        </div>
      </>
    )
  }

export default BasicTable 
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useTable, useSortBy, useGlobalFilter, usePagination, useRowSelect } from 'react-table';
import { COLUMNS } from '../components/tombcolumns';
//import '../styles/table.css';
import { useEffect, useState } from "react";
import axios from "axios";
import GlobalFilter from "../components/globalFilter";
import useCurTomb from "../hooks/useCurTomb";


const BasicTable = (prop) => {

    const url = prop.prop.url;
    const style = prop.prop.style;
    const endpoint = prop.prop.endpoint;
    const {curTombArray} = useCurTomb();

    const [data, setData] = useState([]);
    
 
    useEffect(() => {
      console.log(curTombArray)
      axios(`${url}`)
        .then((res) => {
         setData(res.data);
        })
        .catch((err) => console.log(err))
    }, [curTombArray, url]);

    


    const columns = useMemo(() => COLUMNS, [])
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      footerGroups,
      page,
      nextPage,
      previousPage,
      prepareRow,
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
    useRowSelect
    )
    const { globalFilter } = state
    const { pageIndex } = state

  
    return (
    <div className={style}>
      <div className="tabllz">
      
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
                    return (
                    <td {...cell.getCellProps()}><Link className = 'rows' to = {`/babeltombs/${row.original._id}/${endpoint}`}>{cell.render('Cell')}</Link></td>
                    )
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

        <div className="table-buttons">
          <span className="span">
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
          <button onClick = {() => previousPage()} disabled = {!canPreviousPage}>back</button>
          <button onClick={() => nextPage()} disabled = {!canNextPage}>next</button>
        </div>
      
      </div>

      </div>
    )
  };

export default BasicTable;
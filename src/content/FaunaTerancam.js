import './FaunaTerancam.css'
import fakeData from "./FaunaTerancam.json";
import React, { useState } from 'react'
import { Outlet, Navigate } from "react-router-dom";
import { useTable } from "react-table";
import { AiFillHome } from 'react-icons/ai';
import Navbar from '../Navbar';

function FaunaTerancam() {
  const [OrangUtan, setOrangUtan] = useState(false);
  const [HarimauSumatra, setHarimauSumatra] = useState(false);
  const [BadakJawa, setBadakJawa] = useState(false);
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Nama Ilmiah",
        accessor: "nama_ilmiah",
      },
      {
        Header: "Nama Umum",
        accessor: "nama_umum",
      },
      {
        Header: "Grup Spesies",
        accessor: "grup_spesies",
      },
      {
        Header: "Daerah Asal",
        accessor: "daerah_asal",
      },
      {
        Header: "Jumlah Populasi",
        accessor: "jumlah_populasi",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  function testSet(value){
    if(value == "Orang Utan"){
      setOrangUtan(true)
    }
    if(value == "Harimau Sumatra"){
      setHarimauSumatra(true)
    }
    if(value == "Badak Jawa"){
      setBadakJawa(true)
    }
  }

  return (
    <div className="App">
      <Navbar/>
          <div className="container">
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead> 
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => (
                        <td {...cell.getCellProps()} onClick={() => testSet(cell.value)}
                        className={cell.column.id === "nama_umum" ? "highlighted" : ""}>
                        {cell.render("Cell")} </td>
                      ))}
                      {OrangUtan && (<Navigate to="/OrangUtan" replace={true} />)}
                      {HarimauSumatra && (<Navigate to="/HarimauSumatra" replace={true} />)}
                      {BadakJawa && (<Navigate to="/BadakJawa" replace={true} />)}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
      <div className='sl-footer'></div>
    </div>
  )
}

export default FaunaTerancam
import './FaunaTerancam.css'
import fakeData from "./FaunaEndemik.json";
import React, { useState } from 'react'
import { Outlet, Navigate } from "react-router-dom";
import { useTable } from "react-table";
import { AiFillHome } from 'react-icons/ai';
import Navbar from '../Navbar';

function FaunaEndemik() {
  const [Komodo, setKomodo] = useState(false);
  const [Maleo, setMaleo] = useState(false);
  const [Cendrawasih, setCendrawasih] = useState(false);
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
    if(value == "Komodo"){
      setKomodo(true)
    }
    if(value == "Burung Maleo"){
      setMaleo(true)
    }
    if(value == "Burung Cendrawasih"){
      setCendrawasih(true)
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
                      {Komodo && (<Navigate to="/Komodo" replace={true} />)}
                      {Maleo && (<Navigate to="/BurungMaleo" replace={true} />)}
                      {Cendrawasih && (<Navigate to="/BurungCendrawasih" replace={true} />)}
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

export default FaunaEndemik
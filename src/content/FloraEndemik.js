import './FaunaTerancam.css'
import fakeData from "./FloraEndemik.json";
import React, { useState } from 'react'
import { Outlet, Navigate } from "react-router-dom";
import { useTable } from "react-table";
import { AiFillHome } from 'react-icons/ai';
import Navbar from '../Navbar';

function FloraEndemik() {
  const [AnggrekHitam, setAnggrekHitam] = useState(false);
  const [KayuHitam, setKayuHitam] = useState(false);
  const [DaunPayung, setDaunPayung] = useState(false);
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
    if(value == "Anggrek Hitam"){
      setAnggrekHitam(true)
    }
    if(value == "Kayu Hitam Sulawesi"){
      setKayuHitam(true)
    }
    if(value == "Daun Payung"){
      setDaunPayung(true)
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
                      {AnggrekHitam && (<Navigate to="/AnggrekHitam" replace={true} />)}
                      {KayuHitam && (<Navigate to="/KayuHitam" replace={true} />)}
                      {DaunPayung && (<Navigate to="/DaunPayung" replace={true} />)}
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

export default FloraEndemik
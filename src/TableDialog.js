import React from "react";
import "./TableDialog.css";
import { useHistory } from "react-router-dom";
import data from'./data';
import {useState} from "react";
const TableDialog = () => {
  const history = useHistory();
  const [query, setQuery] = useState("")
  const handleRowClick = () => {
    history.push('/TableDetail');
  };
  return (
    <div className="dialog1">
      <center><div className="bar">
        <input type="text" placeholder="Search.." className="search" onChange={event => setQuery(event.target.value)} />
        <button type="submit" style={{borderRadius:100,padding:10}}><i class="fa fa-search"></i></button>
        </div></center>

<div className="limiter1">
  <div className="container-table1001">
    <div className="wrap-table1001">
      <div className="table100 ver10 m-b-110">
        <div className="table100-head">
          <table>
            <thead className="bg-table">
              <tr className="row100 head">
                <th className="cell100 column6">Name</th>
                <th className="cell100 column7">Category</th>
                <th className="cell100 column8">Live Ads</th>
                <th className="cell100 column9">Total Coupons</th>
                <th className="cell100 column10">Total Views</th>
              </tr>
            </thead>
          </table>
        </div>
        
        <div className="table100-body ">
          <table>
            <tbody>
            {data.storetable.filter(st => {
    if (query === '') {
      return st;
    } else if (st.name.toLowerCase().includes(query.toLowerCase())) {
      return st;
    }
  }).map((st) => {
            return (
              <tr className="row100 body"  onClick={handleRowClick}>
                <td className="cell100 column6">{st.name}</td>
                <td className="cell100 column7">{st.category}</td>
                <td className="cell100 column8">{st.ads}</td>
                <td className="cell100 column9">{st.coupons}</td>
                <td className="cell100 column10">{st.views}</td>
              </tr>
                 );
                })}
            </tbody>
          </table>
        </div>
    
      </div>
    </div></div></div>

				
    </div>
  );
};
export default TableDialog;

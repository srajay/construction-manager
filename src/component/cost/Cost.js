import React from "react";
import "./cost.css";
import { Data } from "./CostData";
import { ProgressData } from "./CostData";
import GraphData from "./GraphData";

const Cost = () => {
  return (
    <>
      <div className="cost-container">
        <div className="row">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">COO</th>
                <th scope="col">S.No.</th>
                <th scope="col">Description</th>
                <th scope="col">Initial Date</th>
                <th scope="col">Completion Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Balance</th>
                <th scope="col">Remarks</th>
              </tr>
            </thead>
            {Data.map((items) => (
              <tbody key={items.costid}>
                <tr>
                  <th scope="row">{items.costid}</th>
                  <td>{items.symbolnum}</td>
                  <td>{items.description}</td>
                  <td>{items.initialdate}</td>
                  <td>{items.completiondate}</td>
                  <td>{items.amount}</td>
                  <td>{items.balance}</td>
                  <td>{items.remarks}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="row mt-5">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">S.No.</th>
                <th scope="col">Progress</th>
                <th scope="col">Schedule</th>
                <th scope="col">Accural</th>
                <th scope="col">Cum. Accural</th>
                <th scope="col">Actual Invoice</th>
                <th scope="col">Cum. Act</th>
              </tr>
            </thead>
            {ProgressData.map((items) => (
              <tbody key={items.symbolnum}>
                <tr>
                  <th scope="row">{items.symbolnum}</th>
                  <td>{items.progress}</td>
                  <td>{items.schedule}</td>
                  <td>{items.accural}</td>
                  <td>{items.cum_accural}</td>
                  <td>{items.actual_invoice}</td>
                  <td>{items.cum_act}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="row mt-5 mb-5">
          <GraphData />
        </div>
      </div>
    </>
  );
};

export default Cost;

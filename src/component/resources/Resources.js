import React, { useState } from "react";
import "./resources.css";
import { Data } from "./ResourcesData";
import { myDate } from "./ResourcesData";

const Resources = () => {
  const [currentDate, setCurrentDate] = useState(myDate());

  return (
    <>
      <div className="resources-container">
        <div className="row">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Position</th>
                <th scope="col">Nos.</th>
                <th scope="col">Initial Date</th>
                <th scope="col">Finish Date</th>
                <th scope="col">Unit Rate</th>
                <th scope="col">Possium Number</th>
                <th scope="col">CNI Pass</th>
                <th scope="col">Medical Due Date</th>
                <th scope="col">Passport Due Date</th>
                <th scope="col">Visa Due Date</th>
              </tr>
            </thead>
            {Data.map((items) => (
              <tbody key={items.resourceid}>
                <tr>
                  <th scope="row">{items.position}</th>
                  <td>{items.nos}</td>
                  <td>{items.initialdate}</td>
                  <td>{items.finishdate}</td>
                  <td>{items.unitrate}</td>
                  <td>{items.possium_num}</td>
                  <td>{items.cnipass}</td>
                  <td>{items.medical_duedate}</td>
                  <td
                    style={{
                      color:
                        new Date(items.passport_duedate) > new Date(currentDate)
                          ? "red"
                          : "black",
                    }}
                  >
                    {items.passport_duedate}
                  </td>
                  {/* <td>{currentDate}</td> */}
                  <td>{items.visa_duedate}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default Resources;

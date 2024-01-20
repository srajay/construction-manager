import React from "react";
import "./showdocument.css";
import { Link } from "react-router-dom";
const ShowDocument = () => {
  return (
    <>
      <div className="showdocument-container">
        <div className="showdocument-content">
          <div className="create-document">
            <Link to="/newuser">
              <button type="button" className="btn btn-primary">
                Add new user
              </button>
            </Link>
            <Link to="/createdoc">
              <button type="button" className="btn btn-primary">
                Create new Document
              </button>
            </Link>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Doc ID</th>
                <th>Document</th>
                <th>Revision</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Attachment</th>
                <th>Assigned</th>
                <th>Weightage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1234-ZZZ-11-01</td>
                <td>HSE</td>
                <td>Rev 0</td>
                <td>12-31-2023</td>
                <td>01-31-2024</td>
                <td>Approve</td>
                <td>Document</td>
                <td>ajay</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>1234-ENG-11-01</td>
                <td>Engineering package</td>
                <td>Rev 0</td>
                <td>12-31-2023</td>
                <td>01-31-2024</td>
                <td>Approve</td>
                <td>Document</td>
                <td>aavash</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>1234-ITP-11-01</td>
                <td>Qa/Qc documents</td>
                <td>Rev 0</td>
                <td>12-31-2023</td>
                <td>01-31-2024</td>
                <td>Approve</td>
                <td>Document</td>
                <td>saurab</td>
                <td>30%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ShowDocument;

import React, { useState } from "react";
import "./document.css";
import CreateDocument from "./CreateDocument";
const Document = () => {
  const [createModal, setCreateModal] = useState(false);
  const [settingModal, setSettingModal] = useState(false);

  const toggleCreateModal = () => {
    setCreateModal(!createModal);
  };
  const CreateOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleCreateModal();
    }
  };

  const toggleSettingModal = () => {
    setSettingModal(!settingModal);
  };
  const SettingOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleSettingModal();
    }
  };
  return (
    <>
      <div className="show-document">
        <div className="container-fluid">
          <div className="showdocument-content">
            <div className="create-document">
              <button
                type="button"
                className="btn btn-primary"
                onClick={toggleCreateModal}
              >
                Create new Document
              </button>

              {createModal && (
                <div className="modal" onClick={CreateOverlayClick}>
                  <div className="modal-content">
                    <span className="close" onClick={toggleCreateModal}>
                      &times;
                    </span>
                    <div className="document-input">
                      <CreateDocument />
                    </div>
                  </div>
                </div>
              )}

              <button
                type="button"
                className="btn btn-primary"
                onClick={toggleSettingModal}
              >
                <i className="bx bx-cog nav_icon"></i>
              </button>

              {settingModal && (
                <div className="modal" onClick={SettingOverlayClick}>
                  <div className="modal-content">
                    <span className="close" onClick={toggleSettingModal}>
                      &times;
                    </span>
                    <div className="document-input">
                      <CreateDocument />
                    </div>
                  </div>
                </div>
              )}
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
                  <th>Completion %</th>
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
                  <td>0.2</td>
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
                  <td>0.1</td>
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
                  <td>0.3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Document;

import React from "react";
import "./createdocument.css";
import { Link } from "react-router-dom";

const CreateDocument = () => {
  return (
    <>
      <div className="createdocument">
        <div className="container">
          <div className="createdocument-content">
            <form action="/action_page.php">
              <div className="form-content">
                <div className="docinput">
                  <label className="form-label">Doc ID</label>
                  <input
                    type="text"
                    className="form-control"
                    id="docid"
                    placeholder="Enter document ID"
                    name="docid"
                  />
                </div>
                <div className="docinput">
                  <label className="form-label">Document Category</label>
                  <input
                    type="text"
                    className="form-control"
                    id="documentcategory"
                    placeholder="Enter document category"
                    name="document"
                  />
                </div>
                <div className="docinput">
                  <label className="form-label">Document Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="documentname"
                    placeholder="Enter document name"
                    name="document"
                  />
                </div>
                <div className="docinput">
                  <label className="form-label">Revision</label>
                  <input
                    type="text"
                    className="form-control"
                    id="revision"
                    placeholder="Enter revision"
                    name="revision"
                  />
                </div>
                <div className="docinput">
                  <label class="form-label">Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="startdate"
                    placeholder="Enter starting date"
                    name="startdate"
                  />
                </div>
                <div className="docinput">
                  <label className="form-label">End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="enddate"
                    placeholder="Enter ending date"
                    name="enddate"
                  />
                </div>
                <div className="docinput">
                  <label className="form-label">Attachment</label>
                  <input className="form-control" type="file" id="formFile" />
                </div>
                <div className="docinput">
                  <label className="form-label">Status</label>
                  <input
                    type="text"
                    className="form-control"
                    id="status"
                    placeholder="Custom"
                    name="status"
                  />
                </div>
                <div className="docinput">
                  <label className="form-label">Assigned to</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Add email to assign"
                    name="email"
                  />
                </div>
                <div className="docinput">
                  <label className="form-label">CC to</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Add CC to"
                    name="email"
                  />
                </div>
                <div className="docinput">
                  <label className="form-label">Weightage</label>
                  <input
                    type="text"
                    className="form-control"
                    id="weightage"
                    placeholder="Add weightage of work"
                    name="weightage"
                  />
                </div>
              </div>

              <Link to="/document">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateDocument;

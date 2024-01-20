import React from "react";
import "../documents/createdocument.css";

const CreateTask = () => {
  return (
    <>
      <div className="createdocument">
        <div className="container">
          <div className="createdocument-content">
            <form action="/action_page.php">
              <div className="form-content">
                <div className="docinput">
                  <label className="form-label">Task num</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tasknum"
                    placeholder="Enter Task Number"
                    name="tasknum"
                  />
                </div>
                <div className="docinput">
                  <label className="form-label">Task List</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tasklist"
                    placeholder="Enter new task"
                    name="task"
                  />
                </div>
                <div className="docinput">
                  <label className="form-label">Duration</label>
                  <input
                    type="text"
                    className="form-control"
                    id="taskduration"
                    placeholder="Enter task duration"
                    name="taskduration"
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
                  <label className="form-label">Priority</label>
                  <select className="priority-select" type="button">
                    <option selected>Medium</option>
                    <option value="1">High</option>
                    <option value="2">Low</option>
                  </select>
                </div>
                <div className="docinput">
                  <label className="form-label">Status</label>
                  <select className="priority-select" type="button">
                    <option selected>Progress</option>
                    <option value="1">Todo</option>
                    <option value="2">Completed</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTask;

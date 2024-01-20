import React from "react";
import "./board.css";

const Board = () => {
  return (
    <>
      <div className="board">
        <div className="container">
          <div className="board_task-table">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Task List</th>
                  <th>Duration</th>
                  <th>Start date</th>
                  <th>Completion Date</th>
                  <th>Priority</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <b>Task Name</b>

                    <div className="sub-task">
                      <ol>
                        <li>Subtask1</li>
                        <li>Subtask2</li>
                        <li>Subtask3</li>
                      </ol>
                    </div>
                  </td>
                  <td>
                    <b>5 days</b>
                    <div className="sub-duration">
                      <ul>
                        <li>2 days</li>
                        <li>2 days</li>
                        <li>1 days</li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    <b>2024-01-20</b>
                    <div className="sub_start-date">
                      <ul>
                        <li>2024-01-20</li>
                        <li>2024-01-20</li>
                        <li>2024-01-20</li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    <b>2024-01-25</b>
                    <div className="sub_start-date">
                      <ul>
                        <li>2024-01-25</li>
                        <li>2024-01-25</li>
                        <li>2024-01-25</li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    <select className="priority-select" type="button">
                      <option selected>Medium</option>
                      <option value="1">High</option>
                      <option value="2">Low</option>
                    </select>
                    <div className="sub-priority">
                      <select className="priority-select" type="button">
                        <option selected>Medium</option>
                        <option value="1">High</option>
                        <option value="2">Low</option>
                      </select>
                    </div>
                    <div className="sub-priority">
                      <select className="priority-select" type="button">
                        <option selected>Medium</option>
                        <option value="1">High</option>
                        <option value="2">Low</option>
                      </select>
                    </div>
                    <div className="sub-priority">
                      <select className="priority-select" type="button">
                        <option selected>Medium</option>
                        <option value="1">High</option>
                        <option value="2">Low</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <select className="priority-select" type="button">
                      <option selected>Progress</option>
                      <option value="1">Todo</option>
                      <option value="2">Completed</option>
                    </select>
                    <div className="sub-priority">
                      <select className="priority-select" type="button">
                        <option selected>Progress</option>
                        <option value="1">Todo</option>
                        <option value="2">Completed</option>
                      </select>
                    </div>
                    <div className="sub-priority">
                      <select className="priority-select" type="button">
                        <option selected>Progress</option>
                        <option value="1">Todo</option>
                        <option value="2">Completed</option>
                      </select>
                    </div>
                    <div className="sub-priority">
                      <select className="priority-select" type="button">
                        <option selected>Progress</option>
                        <option value="1">Todo</option>
                        <option value="2">Completed</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <b>Add task</b>

                    <div className="sub-task">
                      <ol>
                        <li>Add subtask</li>
                      </ol>
                    </div>
                  </td>
                  <td>
                    <b></b>
                    <div className="sub-duration">
                      <ul>
                        <li></li>
                      </ul>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    {/* <select className="priority-select" type="button">
                      <option selected>Medium</option>
                      <option value="1">High</option>
                      <option value="2">Low</option>
                    </select> */}
                  </td>
                  <td>
                    {/* <select className="priority-select" type="button">
                      <option selected>Progress</option>
                      <option value="1">Todo</option>
                      <option value="2">Completed</option>
                    </select> */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;

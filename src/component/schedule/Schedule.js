import React, { useState } from "react";
import "./schedule.css";
import { NavLink } from "react-router-dom";
import ScheduleRoute from "./ScheduleRoute";
import CreateTask from "./Createtask";

const Schedule = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState();

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };
  return (
    <>
      <div className="schedule">
        <div className="container">
          <div className="row schedule_header">
            <div className="col-2">
              <h4>Project 1</h4>
            </div>
            <div className="col-8 schedule_mid-menu">
              <NavLink to="schedule/board">
                <p
                  className={activeNavItem === "board" ? "active" : ""}
                  onClick={() => handleNavItemClick("board")}
                >
                  Board
                </p>
              </NavLink>
              <NavLink to="schedule/gantt">
                <p
                  className={activeNavItem === "gantt" ? "active" : ""}
                  onClick={() => handleNavItemClick("gantt")}
                >
                  Gantt
                </p>
              </NavLink>
              <NavLink to="schedule/sheet">
                <p
                  className={activeNavItem === "sheet" ? "active" : ""}
                  onClick={() => handleNavItemClick("sheet")}
                >
                  Sheet
                </p>
              </NavLink>
              <NavLink to="schedule/schedule-dashboard">
                <p
                  className={
                    activeNavItem === "schedule-dashboard" ? "active" : ""
                  }
                  onClick={() => handleNavItemClick("schedule-dashboard")}
                >
                  Dashboard
                </p>
              </NavLink>
              <NavLink to="schedule/calender">
                <p
                  className={activeNavItem === "calender" ? "active" : ""}
                  onClick={() => handleNavItemClick("calender")}
                >
                  Calender
                </p>
              </NavLink>
            </div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-primary"
                onClick={toggleModal}
              >
                Add New Task
              </button>
            </div>

            {showModal && (
              <div className="modal" onClick={handleOverlayClick}>
                <div className="modal-content">
                  <span className="close" onClick={toggleModal}>
                    &times;
                  </span>
                  <p>Create new Task</p>
                  <hr />
                  <div className="schedule-input">
                    <CreateTask />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="schedule-route">
            <ScheduleRoute />
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;

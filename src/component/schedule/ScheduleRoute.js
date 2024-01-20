import React from "react";
import { Routes, Route } from "react-router-dom";
import Board from "./Board";
import Gantt from "./Gantt";
import Sheet from "./Sheet";
import ScheduleDashboard from "./ScheduleDashboard";
import Calender from "./Calender";

const ScheduleRoute = () => {
  return (
    <>
      <Routes>
        <Route path="schedule/board" exact element={<Board />}></Route>
        <Route path="schedule/gantt" exact element={<Gantt />}></Route>
        <Route path="schedule/sheet" exact element={<Sheet />}></Route>
        <Route
          path="schedule/schedule-dashboard"
          exact
          element={<ScheduleDashboard />}
        ></Route>
        <Route path="schedule/calender" exact element={<Calender />}></Route>
      </Routes>
    </>
  );
};

export default ScheduleRoute;

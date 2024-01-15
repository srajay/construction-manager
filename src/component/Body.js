import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Document from "./documents/Document";
import Schedule from "./schedule/Schedule";
import Cost from "./cost/Cost";
import Resources from "./resources/Resources";
import Procurement from "./procurement/Procurement";
import FreeIssueMaterial from "./freeissuematerial/FreeIssueMaterial";
import MaterialStore from "./materialstore/MaterialStore";
import PreFabrication from "./prefabrication/PreFabrication";
import Equipment from "./equipment/Equipment";
import Consignment from "./consignment/Consignment";
import Scaffolding from "./scaffolding/Scaffolding";
import SiteInstallation from "./siteinstallation/SiteInstallation";
import Reports from "./reports/Reports";

const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Dashboard />}></Route>
        <Route path="/document" exact element={<Document />}></Route>
        <Route path="/schedule" exact element={<Schedule />}></Route>
        <Route path="/cost" exact element={<Cost />}></Route>
        <Route path="/resource" exact element={<Resources />}></Route>
        <Route path="/procurement" exact element={<Procurement />}></Route>
        <Route
          path="/freeissuematerial"
          exact
          element={<FreeIssueMaterial />}
        ></Route>
        <Route path="/materialstore" exact element={<MaterialStore />}></Route>
        <Route
          path="/prefabrication"
          exact
          element={<PreFabrication />}
        ></Route>
        <Route path="/equipment" exact element={<Equipment />}></Route>
        <Route path="/consignment" exact element={<Consignment />}></Route>
        <Route path="/scaffolding" exact element={<Scaffolding />}></Route>
        <Route
          path="/siteinstallation"
          exact
          element={<SiteInstallation />}
        ></Route>
        <Route path="/report" exact element={<Reports />}></Route>
      </Routes>
    </>
  );
};

export default Body;

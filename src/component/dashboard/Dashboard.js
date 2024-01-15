import React from "react";
import "./dashboard.css";
import ProgressBar from "@ramonak/react-progress-bar";
import ProjectSite from "../../asset/project-site.jpg";
import ProjectLocation from "../../asset/project-location.jpg";

const ProjectData = {
  projectid: 1,
  project_name: "Turnaround Antwerp 2025",
  project_desc: "Gasoline Hydrotreating Unit",
  country: "Belgium",
  project_lead: "A. White",
  number_of_incidents: "0",
  oil_in_date: "2023-04-07",
  oil_out_date: "2023-04-07",
};

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard-cleopatra">
          <div className="row align-items-start text-center">
            <h3>Cleopatra</h3>
            <div className="col mx-3">
              <i className="bx bxs-dollar-circle nav_icon"></i>
              <p> Budget Amount</p>
              <h2>Rs.25,000</h2>
              <span>Sunday</span>
            </div>
            <div className="col mx-3">
              <i className="bx bxs-component nav_icon"></i>
              <p> Contract Value</p>
              <h2>Rs.25,000</h2>
              <span>Month: January</span>
            </div>
            <div className="col mx-3">
              <i className="bx bx-money nav_icon"></i>
              <p>Margin</p>
              <h2>Rs.25,000</h2>
              <span>Sunday</span>
            </div>
            <div className="col mx-3">
              <i className="bx bxs-wallet nav_icon"></i>
              <p> Monthly Expenses</p>
              <h2>Rs.25,000</h2>
              <span>Month: January</span>
            </div>
          </div>
        </div>
        <div className="dashboard-project">
          <div className="row align-items-start text-center mt-5">
            <div className="col-6 project-left">
              <h3>Project Information</h3>
              <div className="info-content">
                <div className="info-detail">
                  <p>Project Name</p>
                  <span>{ProjectData.project_name}</span>
                </div>

                <div className="info-detail">
                  <p>Description</p>
                  <span>{ProjectData.project_desc}</span>
                </div>

                <div className="info-detail">
                  <p>Country</p>
                  <span>{ProjectData.country}</span>
                </div>

                <div className="info-detail">
                  <p>Project Lead</p>
                  <span>{ProjectData.project_lead}</span>
                </div>

                <div className="info-detail">
                  <p>Number of incidents</p>
                  <span>{ProjectData.number_of_incidents}</span>
                </div>

                <div className="info-detail">
                  <p>Oil in Date</p>
                  <span>{ProjectData.oil_in_date}</span>
                </div>

                <div className="info-detail">
                  <p>Oil out Date</p>
                  <span>{ProjectData.oil_out_date}</span>
                </div>
              </div>
            </div>
            <div className="col-6 project-right">
              <div className="row-top">
                <div className="img-container">
                  <img src={ProjectSite} alt="Project site" />
                </div>
                <div className="img-container">
                  <img src={ProjectLocation} alt="Project location" />
                </div>
              </div>
              <div className="row-bottom mt-4">
                <h3>Float</h3>
                <div className="float-detail mt-3">
                  <p>Activities without free float</p>
                  <ProgressBar
                    className="wrapper"
                    completed={60}
                    bgColor="#4723d9"
                    animateOnRender={true}
                  />
                </div>
                <div className="float-detail mt-3">
                  <p>Activities without total float</p>
                  <ProgressBar
                    className="wrapper"
                    completed={30}
                    bgColor="#4723d9"
                    animateOnRender={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

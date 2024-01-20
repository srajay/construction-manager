import React, { useState } from "react";
import "./portfolio.css";

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
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
      <div className="portfolio">
        <div className="container">
          <div className="portfolio-header">
            <h2>Portfolio</h2>
            <button
              type="button"
              className="btn btn-primary"
              onClick={toggleModal}
            >
              Create Project
            </button>
            {showModal && (
              <div className="modal" onClick={handleOverlayClick}>
                <div className="modal-content">
                  <span className="close" onClick={toggleModal}>
                    &times;
                  </span>
                  <h4>Create new project</h4>
                  <hr />
                  <div className="project-input"></div>
                </div>
              </div>
            )}
          </div>
          <div className="search-project">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search project"
              aria-label="Search"
            />
          </div>
          <div className="project-list">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Project Name</th>
                  <th scope="col">Country</th>
                  <th scope="col">Lead By</th>
                  <th scope="col">More actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Project 1</td>
                  <td>Nepal</td>
                  <td>@Rajiv</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary mx-3"
                      onClick={toggleModal}
                    >
                      Edit
                    </button>

                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Project 2</td>
                  <td>India</td>
                  <td>@Aavash</td>
                  <td>
                    <button type="button" className="btn btn-primary mx-3">
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
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

export default Portfolio;

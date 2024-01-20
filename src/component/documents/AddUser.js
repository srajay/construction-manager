import React from "react";
import "./adduser.css";
import { Link } from "react-router-dom";

const AddUser = () => {
  return (
    <>
      <div className="adduser">
        <form action="/action_page.php">
          <div className="loginform">
            <label for="email" class="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="loginform">
            <label for="pwd" class="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
            />
          </div>
          <div className="form-check mb-3">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
              />
              Remember me
            </label>
          </div>
          <Link to="/document">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default AddUser;

import React from "react";
import "./Template.css";
// import addIcon from "../public/addIcon.png"
import blank from "../Images/addIcon.png";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";

const Template = () => {
  const navigate = useNavigate();

  const createForm = () => {
    const id = uuid();
    navigate("/form/" + id);
  };
  return (
    <div className="template">
      <div className="template_top">
        <p style={{ fontSize: "30px" }}>Forms</p>
        <hr></hr>
        <span style={{ fontSize: "16px" }}>Create New Form</span>
      </div>
      <div className="template_body">
        <div className="card" onClick={createForm}>
          <img src={blank} alt="no pic" className="card_image" />
          <p className="card_title"> Blank</p>
        </div>
      </div>
    </div>
  );
};

export default Template;

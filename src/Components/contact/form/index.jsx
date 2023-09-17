import React from "react";
import "./style.scss";
const Form = () => {
  return (
    <div className="query-form">
      <form id="queryForm">
        <div className="input-field">
          <input type="text" name="from_name" placeholder="Name" />
        </div>
        <div className="input-field">
          <input type="tel" name="from_name" placeholder="Phone" />
        </div>
        <div className="input-field">
          <input type="email" name="from_name" placeholder="Email" />
        </div>
        <div className="input-field">
          <textarea
            type="text"
            name="from_name"
            placeholder="Write your Message...."
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

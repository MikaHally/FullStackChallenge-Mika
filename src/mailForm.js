import React from "react";
import "./mailForm.css";

export default class MailForm extends React.Component {
  render() {
    return (
      <div className="mail-form">
        <div className="navbar_wrapper">
          <p>Neue Nachricht</p>
        </div>
        <input className="input" />
        <input className="input" />
      </div>
    );
  }
}

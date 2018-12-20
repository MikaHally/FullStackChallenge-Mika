import React from "react";
import "./mailForm.css";

export default class MailForm extends React.Component {
  submitMail() {
    alert("Your e-mail has been sent.");
  }
  render() {
    return (
      <div className="mail-form">
        <div className="navbar_wrapper">
          <p>Neue Nachricht</p>
        </div>
        <form>
          <input placeholder="An" className="input" />
          <input placeholder="Betreff" className="input" />
          <textarea className="textarea" />
          <button className="submit-button" onClick={this.submitMail}>
            Senden
          </button>
          <i className="fa fa-paperclip" />
          <i className="fa fa-trash" />
        </form>
      </div>
    );
  }
}

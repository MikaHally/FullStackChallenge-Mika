import React from "react";
import "./mailForm.css";

export default class MailForm extends React.Component {
  submitMail() {
    alert("Your e-mail has been sent.");
  }
  reset() {
    document.getElementById("mail-inputs").reset();
  }
  render() {
    return (
      <div className="mail-form">
        <div className="navbar_wrapper">
          <p>Neue Nachricht</p>
        </div>
        <form id="mail-inputs">
          <input placeholder="An" className="input" type="email" required />
          <input placeholder="Betreff" className="input" />
          <textarea className="textarea" required />
          <button className="submit-button" onClick={this.submitMail}>
            Senden
          </button>
        </form>
        <div className="attachement">
          <div className="image-upload">
            <label for="file-input">
              <i className="fa fa-paperclip" />
            </label>
            <input id="file-input" type="file" />
          </div>
        </div>
        <i className="fa fa-trash" onClick={this.reset} />
      </div>
    );
  }
}

import React from "react";
import "./mailForm.css";

export default class MailForm extends React.Component {
  state = {
    mails: [],
    mail: {
      recipient: "mika.hally",
      subject: "Xmas",
      content: "Hello everyone"
    }
  };

  /*
  componentDidMount() {
    this.getInformation();
  }

  getInformation = () => {
    fetch("http://localhost:5000/products")
      .then(response => response.json())
      .then(({ data }) => {
        console.log(data);
      })
      .catch(err => console.error(err));
  };
  */

  // Sending out request
  sendMail = () => {
    const { mail } = this.state;
    fetch(
      `http://localhost:5000/add?recipient=${mail.recipient}&subject=${
        mail.subject
      }&content=${mail.content}`
    )
      .then(response => response.json())
      .then(this.getInformation)
      .catch(err => console.error(err));
  };
  // Resetting all input values to undefined
  reset = function() {
    document.getElementById("mail-inputs").reset();
  };
  render() {
    const { mails, mail } = this.state;
    return (
      <div className="mail-form">
        <div className="navbar_wrapper">
          <p>Neue Nachricht</p>
        </div>
        <div id="mail-inputs">
          <input
            placeholder="An"
            className="input"
            type="email"
            required
            value={mail.recipient}
            onChange={e =>
              this.setState({ mail: { ...mail, recipient: e.target.value } })
            }
          />
          <input
            placeholder="Betreff"
            className="input"
            value={mail.subject}
            onChange={e =>
              this.setState({ mail: { ...mail, subject: e.target.value } })
            }
          />
          <textarea
            className="textarea"
            required
            value={mail.content}
            onChange={e =>
              this.setState({ mail: { ...mail, content: e.target.value } })
            }
          />
          <button className="submit-button" onClick={this.sendMail}>
            Senden
          </button>
        </div>
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

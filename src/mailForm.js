import React from "react";
import "./mailForm.css";

export default class MailForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipient: "",
      subject: "",
      content: "",
      cc: "",
      bcc: ""
    };
  }

  // Sending out request
  sendMail = () => {
    fetch(
      `http://localhost:5000/add?recipient=${this.state.recipient}&subject=${
        this.state.subject
      }&content=${this.state.content}`
    )
      .then(response => response.json())
      .then(this.getInformation)
      .catch(err => console.error(err));
    this.delete();
  };

  delete = () => {
    const { recipient } = this.state;
    const { cc } = this.state;
    const { bcc } = this.state;
    const { subject } = this.state;
    const { content } = this.state;
    this.setState({
      recipient: "",
      cc: "",
      bcc: "",
      subject: "",
      content: ""
    });
  };

  render() {
    return (
      <div className="mail-form">
        <div className="navbar_wrapper">
          <p>Neue Nachricht</p>
        </div>
        <div>
          <div>
            <input
              placeholder="An"
              type="email"
              required
              value={this.state.recipient}
              onChange={e => this.setState({ recipient: e.target.value })}
            />
            <input
              placeholder="Cc"
              value={this.state.cc}
              onChange={e => this.setState({ cc: e.target.value })}
            />
            <input
              placeholder="Bcc"
              value={this.state.bcc}
              onChange={e => this.setState({ bcc: e.target.value })}
            />
            <input
              placeholder="Betreff"
              value={this.state.subject}
              onChange={e => this.setState({ subject: e.target.value })}
            />
            <textarea
              required
              value={this.state.content}
              onChange={e => this.setState({ content: e.target.value })}
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
          <i className="fa fa-trash" onClick={this.delete} />
        </div>
      </div>
    );
  }
}

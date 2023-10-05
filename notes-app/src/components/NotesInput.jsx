import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      maxInputLeft: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(ev) {
    const maxInputLeft = ev.target.maxLength - ev.target.value.length;
    this.setState(() => {
      return {
        title: ev.target.value,
        maxInputLeft: maxInputLeft,
      };
    });
  }

  onBodyChangeEventHandler(ev) {
    this.setState(() => {
      return { body: ev.target.value };
    });
  }

  onSubmitEventHandler(ev) {
    ev.preventDefault();
    this.props.addNotes(this.state);

    this.setState(() => {
      return {
        title: "",
        body: "",
        maxInputLeft: 50,
      };
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitEventHandler}>
        <h1>Buat Catatan</h1>
        <input
          type="text"
          placeholder="Masukkan judul..."
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          maxLength={50}
          required
        />
        <p>Sisa karakter: {this.state.maxInputLeft} </p>
        <br />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Tuliskan catatanmu disini"
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
          required
        ></textarea>
        <br />
        <input type="submit" value="Buat" />
      </form>
    );
  }
}

export default NotesInput;

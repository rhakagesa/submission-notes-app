import React from "react";

class NotesSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titleSearch: "",
    };

    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  onSearchEventHandler(ev) {
    const searchField = ev.target.value;

    this.setState(() => {
      return {
        titleSearch: searchField,
      };
    });
    this.props.addSearch(searchField);
  }

  render() {
    return (
      <input
        className="notes-search"
        type="text"
        id="searchField"
        placeholder="Cari judul..."
        onChange={this.onSearchEventHandler}
      />
    );
  }
}

export default NotesSearch;

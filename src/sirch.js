import React from "react";

class Sirch extends React.Component {
  state = {
    sirch: true,
    searchTerm: "",
    placeholder: "Search for a query!",
  };

  editSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleKeyPress = (event) => {
    if (event === "spotify") {
      const something = this.state.searchTerm.replace(" ", "+");
      const myNewUrl = `https://www.youtube.com/results?search_query=${something}`;
      chrome.tabs.create({ url: myNewUrl });
    } else {
      const something = this.state.searchTerm.replace(" ", "%20");
      const myNewUrl = `https://open.spotify.com/search/${something}`;
      chrome.tabs.create({ url: myNewUrl });
    }

    console.log(event);
  };

  render() {
    return (
      <div style={{ textAlign: "center", paddingTop: "30vh" }}>
        <div>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.editSearchTerm}
            placeholder="Search something here"
          />
        </div>
        <button onClick={(e) => this.handleKeyPress("spotify")}>
          Search youtube
        </button>
        <button onClick={(e) => this.handleKeyPress("youtube")}>
          Search spotify
        </button>
        <br></br>
      </div>
    );
  }
}

export default Sirch;

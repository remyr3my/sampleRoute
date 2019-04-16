import React, { Component } from "react";
import ReactDOM from "react-dom";
import Downshift from "downshift";

import "./styles.css";

class DownshiftThree extends Component {
  constructor(props) {
    super(props);
    this.books = [
      { name: "Router 1" },
      { name: "Router 2" },
      { name: "HRouter 3" },
      { name: "HRouter 4" },
      { name: "HRouter 5" },
      { name: "HRouter 6" },
      { name: "Switch 2" },
      { name: "Switch 16" }
    ];

    this.state = {
      selectedBook: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(selectedBook) {
    this.setState({ selectedBook: selectedBook.name });
  }

  render() {
    return (
      <Downshift
        onChange={this.onChange}
        selectedItem={this.state.selectedBook}
        itemToString={books => (books ? books.name : "")}
      >
        {({
          isOpen,
          getToggleButtonProps,
          getItemProps,
          highlightedIndex,
          selectedItem: dsSelectedItem,
          getLabelProps
        }) => (
          <div>
            <h1
              style={{ marginTop: "1rem", display: "block" }}
              {...getLabelProps()}
            >
              Select your favourite Device
            </h1>{" "}
            <br />
            <button className="dropdown-button" {...getToggleButtonProps()}>
              {this.state.selectedBook !== ""
                ? this.state.selectedBook
                : "Select a Device ..."}
            </button>
            <div style={{ position: "relative" }}>
              {isOpen ? (
                <div className="downshift-dropdown">
                  {this.books.map((item, index) => (
                    <div
                      className="dropdown-item"
                      {...getItemProps({ key: index, index, item })}
                      style={{
                        backgroundColor:
                          highlightedIndex === index ? "lightgray" : "white",
                        fontWeight: dsSelectedItem === item ? "bold" : "normal"
                      }}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            <br />
            {this.state.selectedBook !== ""}
            {
              <div className={this.state.selectedBook !== "" ? "asd" : "asdd"}>
                <div className="txts">
                  <h1>
                    {" "}
                    {this.state.selectedBook !== ""
                      ? this.state.selectedBook
                      : ""}
                    {""}
                  </h1>
                </div>
                <table
                  className={this.state.selectedBook !== "" ? "asdfc" : "asdf"}
                >
                  <thead>
                    <tr>
                      <th>Features</th>
                      <th>Current</th>
                      <th>Latest</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Version</td>
                      <td>1.01</td>
                      <td>1.012</td>
                    </tr>
                    <tr>
                      <td>Size</td>
                      <td>2 MB</td>
                      <td>3.7 MB</td>
                    </tr>
                    <tr>
                      <td>Build</td>
                      <td>5.0</td>
                      <td>5.024</td>
                    </tr>
                    <tr>
                      <td>Version</td>
                      <td>1.01</td>
                      <td>1.012</td>
                    </tr>
                  </tbody>
                </table>

                {/* <div
                  className={
                    this.state.selectedBook !== "" ? "asd asf" : "asffd"
                  }
                >
                  <div
                    className={
                      this.state.selectedBook !== "" ? "asde" : "asffd"
                    }
                  >
                    <h2>
                      {this.state.selectedBook !== ""
                        ? " Current Version" + " - 1.01"
                        : ""}{" "}
                    </h2>
                  </div>

                  <div className="asde">
                    <h2>
                      {" "}
                      {this.state.selectedBook !== ""
                        ? " Latest  Version" + " - 1.310"
                        : ""}{" "}
                    </h2>
                  </div>
                </div> */}
                <br />
                <div className="bu">
                  <div
                    className={
                      this.state.selectedBook !== "" ? "button1" : " vds"
                    }
                  >
                    <font color="white">Upgrade!</font>
                  </div>
                </div>
              </div>
            }
          </div>
        )}
      </Downshift>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<DownshiftThree />, rootElement);

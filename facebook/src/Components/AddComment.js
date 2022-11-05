import React from "react";
import "../Components/FacebookStyle.scss";
import DisplayComment from "./DisplayCommnet";

class AddComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };
    this.comments = { secValue: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ secValue: this.state.value });
    console.log(this.state.value);
    this.setState({ value: "" });
  }
  handleText() {
    this.setState({ comments: this.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="d-flex justify-content-center">
            <div className="wrtitecomment">
              <div className="d-flex justify-content-start">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Add your comment here"
                    aria-describedby="button-addon2"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-start">
                {/* <button>s</button> */}
                <DisplayComment comment="dd" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default AddComment;

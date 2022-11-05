import React from "react";
import "../Components/FacebookStyle.scss";

class FacebookPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.value);
    this.setState({ value: "" });
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="add-post">
          <div className="d-flex justify-content-start">
            <form onSubmit={this.handleSubmit}>
              <div className="d-flex justify-content-start">
                <div className="write-text-area">
                  {" "}
                  <input
                    className="write-text"
                    type="text"
                    name="name"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="Add Your thouths here"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-start">
                <div className="btn-post">
                  <button className="btn-add-post">Add Post</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default FacebookPost;

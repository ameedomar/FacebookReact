import React from "react";
import "../Components/FacebookStyle.scss";

class DisplayPosts extends React.Component {
  constructor(props) {
    super(props);
    props = this.props;
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div class="row">
          <div className="post-list">
            <div className="shadow p-3 mb-5 bg-body rounded">
              <div className="post-content">
                {" "}
                <h5>{this.props.hello}</h5>
              </div>
            </div>
            <div class="row">
              <button
                type="button"
                className="btn btn-light col-6 col-md-3 m-3"
              >
                Like
              </button>
              <button
                typeA="button"
                className="btn btn-light col-6 col-md-3 m-3 "
              >
                Add comment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DisplayPosts;

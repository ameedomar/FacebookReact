import React from "react";
import "../Components/FacebookStyle.scss";

class DisplayComment extends React.Component {
  constructor(props) {
    super(props);
    props = this.props;
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div class="row">
          <h6> {this.props.comment}</h6>
        </div>
      </div>
    );
  }
}
export default DisplayComment;

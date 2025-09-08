import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="custom-footer"> {/* Add this class */}
        <div className="col-md-12">
          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy;{" "}
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : "Dhana Parupudi"}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
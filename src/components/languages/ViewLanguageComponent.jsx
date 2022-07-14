import React, { Component } from "react";
import LanguageService from "./LanguageService";

class ViewLanguageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      language: {},
    };
  }

  componentDidMount() {
    LanguageService.getLanguageById(this.state.id).then((res) => {
      this.setState({ language: res.data });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Language Details</h3>
          <div className="card-body">
            <div className="row">
              <label>Language Name: &nbsp;</label>
              <div> {this.state.language.name}</div>
            </div>
            <div className="row">
              <label>Language Code: &nbsp;</label>
              <div> {this.state.language.code}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewLanguageComponent;

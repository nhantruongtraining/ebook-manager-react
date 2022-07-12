import React, { Component } from "react";
import LanguageService from "../services/LanguageService";

class UpdateLanguageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      name: "",
      code: "",
    };
    this.changeLanguageNameHandler = this.changeLanguageNameHandler.bind(this);
    this.changeCodeHandler = this.changeCodeHandler.bind(this);
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    LanguageService.getLanguageById(this.state.id).then((res) => {
      let language = res.data;
      this.setState({
        name: language.name,
        code: language.code,
      });
    });
  }

  updateLanguage = (e) => {
    e.preventDefault();
    let language = {
      name: this.state.name,
      code: this.state.code,
    };
    console.log("language => " + JSON.stringify(language));
    console.log("id => " + JSON.stringify(this.state.id));
    LanguageService.updateLanguage(language, this.state.id).then((res) => {
      this.props.history.push("/languages");
    });
  };

  changeLanguageNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changeCodeHandler = (event) => {
    this.setState({ code: event.target.value });
  };

  cancel() {
    this.props.history.push("/languages");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Language</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Language Name: </label>
                    <input
                      placeholder="Language Name"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.changeLanguageNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Language Code: </label>
                    <input
                      placeholder="Language Code"
                      name="code"
                      className="form-control"
                      value={this.state.code}
                      onChange={this.changeCodeHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.updateLanguage}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateLanguageComponent;

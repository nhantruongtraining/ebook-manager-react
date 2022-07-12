import React, { Component } from "react";
import LanguageService from "../services/LanguageService";

class CreateLanguageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      name: "",
      code: "",
    };
    this.changeLanguageNameHandler = this.changeLanguageNameHandler.bind(this);
    this.changeCodeHandler = this.changeCode.bind(this);
    this.saveOrUpdateLanguage = this.saveOrUpdateLanguage.bind(this);
  }

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
      LanguageService.getLanguageById(this.state.id).then((res) => {
        let language = res.data;
        this.setState({
          name: language.name,
          code: language.code,
        });
      });
    }
  }
  saveOrUpdateLanguage = (e) => {
    e.preventDefault();
    let language = {
      name: this.state.name,
      code: this.state.code,
    };
    console.log("language => " + JSON.stringify(language));

    // step 5
    if (this.state.id === "_add") {
      LanguageService.createLanguage(language).then((res) => {
        this.props.history.push("/languages");
      });
    } else {
      LanguageService.updateLanguage(language, this.state.id).then((res) => {
        this.props.history.push("/languages");
      });
    }
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

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Language</h3>;
    } else {
      return <h3 className="text-center">Update Language</h3>;
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Language Name: </label>
                    <input
                      placeholder="Name"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.changeLanguageNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Language Code: </label>
                    <input
                      placeholder="Code"
                      name="code"
                      className="form-control"
                      value={this.state.code}
                      onChange={this.changeCodeHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateLanguage}
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

export default CreateLanguageComponent;

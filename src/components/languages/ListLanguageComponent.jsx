import React, { Component } from "react";
import LanguageService from "../../services/LanguageService";
// import { useNavigate } from "react-router-dom";

class ListLanguageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      languages: [],
    };
    this.addLanguage = this.addLanguage.bind(this);
    this.editLanguage = this.editLanguage.bind(this);
    this.deleteLanguage = this.deleteLanguage.bind(this);
  }

  deleteLanguage(id) {
    LanguageService.deleteLanguage(id).then((res) => {
      this.setState({
        languages: this.state.languages.filter(
          (language) => language.id !== id
        ),
      });
    });
  }

  viewLanguage(id) {
    // const history = createBrowserHistory();
    // history.push(`/view-language/${id}`);

    this.props.history.push(`/view-language/${id}`);
  }

  editLanguage(id) {
    this.props.history.push(`/add-language/${id}`);
  }

  componentDidMount() {
    LanguageService.getLanguages().then((res) => {
      this.setState({ languages: res.data });
    });
  }

  addLanguage() {
    this.props.history.push("/add-language/_add");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Language List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addLanguage}>
            {" "}
            Add Language
          </button>
        </div>
        <br></br>

        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                {/* <th> ID</th> */}
                <th> Language Name</th>
                <th> Language Code</th>
                <th> Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.languages.map((language) => (
                <tr key={language.id}>
                  {/* <td> {language.id}</td> */}
                  <td> {language.name}</td>
                  <td> {language.code}</td>
                  <td>
                    <button
                      onClick={() => this.editLanguage(language.id)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteLanguage(language.id)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                    {/* <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewLanguage(language.id)}
                      className="btn btn-info"
                    >
                      View{" "}
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListLanguageComponent;

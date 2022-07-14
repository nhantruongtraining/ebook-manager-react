import React, { Component } from "react";
import UserEbookService from "../../services/UserEbookService";
// import { useNavigate } from "react-router-dom";

class ListUserEbookService extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userEbooks: [],
    };
    this.addUserEbook = this.addUserEbook.bind(this);
    this.editUserEbook = this.editUserEbook.bind(this);
    this.deleteUserEbook = this.deleteUserEbook.bind(this);
  }

  deleteUserEbook(id) {
    UserEbookService.deleteUserEbook(id).then((res) => {
      this.setState({
        userEbooks: this.state.userEbooks.filter(
          (userEbook) => userEbook.id !== id
        ),
      });
    });
  }

  viewUserEbook(id) {
    this.props.history.push(`/view-userebook/${id}`);
  }

  editUserEbook(id) {
    this.props.history.push(`/add-userebook/${id}`);
  }

  componentDidMount() {
    UserEbookService.getUserEbooks().then((res) => {
      this.setState({ userEbooks: res.data });
    });
  }

  addUserEbook() {
    this.props.history.push("/add-userebook/_add");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">UserEbook List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addUserEbook}>
            {" "}
            Add UserEbook
          </button>
        </div>
        <br></br>

        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                {/* <th> ID</th> */}
                <th> Ebook Title</th>
                <th> Owner</th>
                <th> Favorite</th>
                <th> Status</th>
                <th> Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.userEbooks.map((userEbook) => (
                <tr key={userEbook.id}>
                  {/* <td> {userEbook.id}</td> */}
                  <td> {userEbook.name}</td>
                  <td> {userEbook.code}</td>
                  <td>
                    <button
                      onClick={() => this.editUserEbook(userEbook.id)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteUserEbook(userEbook.id)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewUserEbook(userEbook.id)}
                      className="btn btn-info"
                    >
                      View{" "}
                    </button>
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

export default ListUserEbookService;

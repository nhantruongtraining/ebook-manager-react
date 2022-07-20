import React, { Component } from "react";
import EbookService from "../../services/EbookService";
// import { useNavigate } from "react-router-dom";

class ListEbookComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ebooks: [],
    };
    this.addEbook = this.addEbook.bind(this);
    this.editEbook = this.editEbook.bind(this);
    this.deleteEbook = this.deleteEbook.bind(this);
  }

  deleteEbook(id) {
    EbookService.deleteEbook(id).then((res) => {
      this.setState({
        ebooks: this.state.ebooks.filter((ebook) => ebook.id !== id),
      });
    });
  }

  viewEbook(id) {
    this.props.history.push(`/view-ebook/${id}`);
  }

  editEbook(id) {
    this.props.history.push(`/add-ebook/${id}`);
  }

  componentDidMount() {
    EbookService.getEbooks().then((res) => {
      this.setState({ ebooks: res.data });
    });
  }

  addEbook() {
    this.props.history.push("/add-ebook/_add");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Ebook List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addEbook}>
            {" "}
            Add Ebook
          </button>
        </div>
        <br></br>

        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                {/* <th> ID</th> */}
                <th> Ebook Title</th>
                <th> Description</th>
                <th> Language</th>
                <th> Category</th>
              </tr>
            </thead>

            <tbody>
              {this.state.ebooks.map((ebook) => (
                <tr key={ebook.id}>
                  {/* <td> {ebook.id}</td> */}
                  <td> {ebook.title}</td>
                  <td> {ebook.description}</td>
                  <td> {ebook.language}</td>
                  <td> {ebook.category}</td>
                  <td>
                    <button
                      onClick={() => this.editEbook(ebook.id)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteEbook(ebook.id)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                    {/* <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewEbook(ebook.id)}
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

export default ListEbookComponent;

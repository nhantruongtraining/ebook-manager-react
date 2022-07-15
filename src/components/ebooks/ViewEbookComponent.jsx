import React, { Component } from "react";
import EbookService from "../../services/EbookService";

class ViewEbookComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      ebook: {},
    };
  }

  componentDidMount() {
    EbookService.getEbookById(this.state.id).then((res) => {
      this.setState({ ebook: res.data });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Ebook Details</h3>
          <div className="card-body">
            <div className="row">
              <label>Ebook Title: &nbsp;</label>
              <div> {this.state.ebook.title}</div>
            </div>
            <div className="row">
              <label>Ebook Description: &nbsp;</label>
              <div> {this.state.ebook.description}</div>
            </div>
            <div className="row">
              <label>Language: &nbsp;</label>
              <div> {this.state.ebook.language}</div>
            </div>
            <div className="row">
              <label>Category: &nbsp;</label>
              <div> {this.state.ebook.category}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewEbookComponent;

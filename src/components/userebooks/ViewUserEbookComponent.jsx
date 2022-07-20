import React, { Component } from "react";
import UserEbookService from "../../services/UserEbookService";

class ViewUserEbookComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      userEbook: {},
    };
  }

  componentDidMount() {
    UserEbookService.getUserEbookById(this.state.id).then((res) => {
      this.setState({ userEbook: res.data });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View UserEbook Details</h3>
          <div className="card-body">
            <div className="row">
              <label>Ebook Title: &nbsp;</label>
              <div> {this.state.userEbook.ebookTitle}</div>
            </div>
            <div className="row">
              <label>Owner: &nbsp;</label>
              <div> {this.state.userEbook.ebookOwner}</div>
            </div>
            <div className="row">
              <label>Favorite: &nbsp;</label>
              <div> {this.state.userEbook.favorite}</div>
            </div>
            <div className="row">
              <label>Status: &nbsp;</label>
              <div> {this.state.userEbook.userEbookStatus}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewUserEbookComponent;

import React, { Component } from "react";
import EbookService from "../../services/EbookService";
class CreateEbookComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      title: "",
      description: "",
      publishYear: "",
      publisherId: "",
      languageId: "",
      categoryId: "",
    };
    this.changeTitleHandler = this.changeTitleHandler.bind(this);
    this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
    this.changePublishYearHandler = this.changePublishYearHandler.bind(this);
    this.changeLanguageIdHandler = this.changeLanguageIdHandler.bind(this);
    this.changePublisherIdHandler = this.changePublisherIdHandler.bind(this);
    this.changeCategoryIdHandler = this.changeCategoryIdHandler.bind(this);
    this.saveOrUpdateEbook = this.saveOrUpdateEbook.bind(this);
  }

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
      EbookService.getEbookById(this.state.id).then((res) => {
        let ebook = res.data;
        this.setState({
          title: ebook.title,
          description: ebook.description,
          publishYear: ebook.publishYear,
          publisherId: ebook.publisherId,
          languageId: ebook.languageId,
          categoryId: ebook.categoryId,
        });
      });
    }
  }
  saveOrUpdateEbook = (e) => {
    e.preventDefault();
    let ebook = {
      title: this.state.title,
      description: this.state.description,
      publishYear: this.state.publishYear,
      publisherId: this.state.publisherId,
      languageId: this.state.languageId,
      categoryId: this.state.categoryId,
    };
    console.log("ebook => " + JSON.stringify(ebook));

    // step 5
    if (this.state.id === "_add") {
      EbookService.createEbook(ebook).then((res) => {
        this.props.history.push("/ebooks");
      });
    } else {
      EbookService.updateEbook(ebook, this.state.id).then((res) => {
        this.props.history.push("/ebooks");
      });
    }
  };

  changeTitleHandler = (event) => {
    this.setState({ title: event.target.value });
  };

  changeDescriptionHandler = (event) => {
    this.setState({ description: event.target.value });
  };

  changePublishYearHandler = (event) => {
    this.setState({ publishYear: event.target.value });
  };

  changePublisherIdHandler = (event) => {
    this.setState({ publisherId: event.target.value });
  };

  changeLanguageIdHandler = (event) => {
    this.setState({ languageId: event.target.value });
  };

  changeCategoryIdHandler = (event) => {
    this.setState({ categoryId: event.target.value });
  };

  cancel() {
    this.props.history.push("/ebooks");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Ebook</h3>;
    } else {
      return <h3 className="text-center">Update Ebook</h3>;
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
                    <label> Ebook Title: </label>
                    <input
                      placeholder="title"
                      name="title"
                      className="form-control"
                      value={this.state.title}
                      onChange={this.changeTitleHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Description: </label>
                    <input
                      placeholder=""
                      name="description"
                      className="form-control"
                      value={this.state.description}
                      onChange={this.changeDescriptionHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Publishing Year: </label>
                    <input
                      placeholder=""
                      name="publishYear"
                      className="form-control"
                      value={this.state.publishYear}
                      onChange={this.changePublishYearHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Publisher ID: </label>
                    <input
                      placeholder=""
                      name="publisherID"
                      className="form-control"
                      value={this.state.publisherId}
                      onChange={this.changePublisherIdHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Language ID: </label>
                    <input
                      placeholder=""
                      name="languageId"
                      className="form-control"
                      value={this.state.languageId}
                      onChange={this.changeLanguageIdHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Category ID: </label>
                    <input
                      placeholder=""
                      name="categoryId"
                      className="form-control"
                      value={this.state.categoryId}
                      onChange={this.changeCategoryIdHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateEbook}
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

export default CreateEbookComponent;

import React, { Component } from "react";
//import axios from "axios";

class ListView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      techNews: [],
      section: "",
      title: "",
      abstract: "",
      url: ""
    };

    this.updateNewsSection = this.updateNewsSection.bind(this);
    this.updateNewsTitle = this.updateNewsTitle.bind(this);
    this.updateNewsAbstract = this.updateNewsAbstract.bind(this);
    this.updateNewsUrl = this.updateNewsUrl.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateNewsSection(section) {
    this.setState({ section: section });
  }

  updateNewsTitle(title) {
    this.setState({ title: title });
  }
  updateNewsAbstract(abstract) {
    this.setState({ abstract: abstract });
  }
  updateNewsUrl(url) {
    this.setState({ url: url });
  }

  handleClick() {
    let { section, title, abstract, url } = this.state;
    this.props.createNews(section, title, abstract, url);
    this.setState({
      section: "",
      title: "",
      abstract: "",
      url: ""
    });
  }
  //   createNewsM(section, title, abstract, url) {
  //     let { section, title, abstract, url } = this.props;
  //   }

  render() {
    //console.log(this.state);

    let { section, title, abstract, url } = this.state;

    return (
      <section className="Create_News_Section">
        <h2>Create sensational News!</h2>
        <br />
        <input
          className="Create_News_Section"
          placeholder="Category"
          value={section}
          onChange={e => this.updateNewsSection(e.target.value)}
        />

        <input
          className="Create_News_title"
          placeholder="Title"
          value={title}
          onChange={e => this.updateNewsTitle(e.target.value)}
        />

        <input
          className="Create_News_Abstract"
          placeholder="Abstract"
          value={abstract}
          onChange={e => this.updateNewsAbstract(e.target.value)}
        />

        <input
          className="Create_News_Url"
          placeholder="URL"
          value={url}
          onChange={e => this.updateNewsUrl(e.target.value)}
        />
        <div className="Create_News">
          <button onClick={this.handleClick}>Create</button>
          <br />
        </div>
        <br />
        <br />
      </section>
    );
  }
}

export default ListView;

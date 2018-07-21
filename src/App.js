import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import ListView from "./Components/ListView";
import EditAbstract from "./Components/EditAbstract";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SectionHeading from "./Components/SectionHeading";
import SubSection from "./Components/SubSection";
import LineBreak from "./Components/LineBreak";

class App extends Component {
  constructor() {
    super();

    this.state = {
      techNews: []
    };
    this.createNews = this.createNews.bind(this);
    this.updateNews = this.updateNews.bind(this);
    this.deleteNews = this.deleteNews.bind(this);
  }

  componentDidMount() {
    axios.get("/api/news").then(res => {
      console.log(res.data);
      this.setState({ techNews: res.data });
    });
  }

  createNews(section, title, abstract, url) {
    axios.post("/api/news", { section, title, abstract, url }).then(res => {
      //console.log(res.data);
      this.setState({ techNews: res.data });
    });
  }

  updateNews(title, abstract) {
    // console.log(abstract);
    // console.log(title);
    axios.put(`/api/news/${title}`, { abstract }).then(res => {
      //console.log(res);
      this.setState({ techNews: res.data });
    });
  }

  deleteNews(title) {
    axios.delete(`/api/news/${title}`, { title }).then(res => {
      //console.log(res.data);
      this.setState({ techNews: res.data });
    });
  }

  render() {
    //console.log(this.state.techNews);
    let myTechNews = this.state.techNews.map((techNew, i) => {
      let imgUrl = techNew.imgUrl
        ? techNew.imgUrl
        : "https://s7d1.scene7.com/is/image/PETCO/puppy-090517-dog-featured-355w-200h-d";
      return (
        <div key={i} className="techNew-divs">
          <div>
            <div>{techNew.section}</div>
          </div>
          <SectionHeading />
          <p>{techNew.title}</p>
          <img src={imgUrl} alt="Pic of dog" />
          <SubSection />
          <p>{techNew.abstract}</p>
          <a href={techNew.url}> Detailed Information </a>
          <br />
          <br />
          <EditAbstract title={techNew.title} updateNews={this.updateNews} />
          <button
            className="delete_title"
            onClick={() => this.deleteNews(techNew.title)}
          >
            Delete News{" "}
          </button>
        </div>
      );
    });
    return (
      <div className="App">
        <Header />
        <LineBreak />
        {/* <header className="App-header">
          <h1 className="App-title">Hot off the Press - News</h1>
        </header> */}
        <ListView createNews={this.createNews} />
        {myTechNews}
        <LineBreak />
        <Footer />
      </div>
    );
  }
}

export default App;

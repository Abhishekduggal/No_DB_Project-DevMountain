require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
const url = `http://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${API_KEY}`;

let arrTechNews = [];
let title = "";

module.exports = {
  create: (req, res, next) => {
    let { section, title, abstract, url } = req.body;
    arrTechNews.unshift({
      section,
      title,
      abstract,
      url
    });
    res.status(200).send(arrTechNews);
  },

  read: (req, res, next) => {
    axios.get(url).then(articles => {
      let arrNews = articles.data.results.map(tech => {
        let { section, title, abstract, url } = tech;

        return {
          section,
          title,
          abstract,
          url
        };

        // return {
        //   section: tech.section,
        //   title: tech.title,
        //   abstract: tech.abstract,
        //   url: tech.url
        // };
      });

      arrTechNews = arrNews;

      //console.log(arrTechNews);
      res.status(200).send(arrTechNews);
    });
  },

  update: (req, res, next) => {
    let { title } = req.params;
    let { abstract } = req.body;

    let sectionID = arrTechNews.findIndex(heading => heading.title == title);

    let updatedAbstract = Object.assign(arrTechNews[sectionID], {
      abstract: abstract
    });

    arrTechNews[sectionID] = updatedAbstract;
    // let newsectionID = arrTechNews[sectionID];

    // arrTechNews[sectionID] = {
    //   section: section || newsectionID.section,
    //   title: newsectionID.title,
    //   abstract: abstract || newsectionID.abstract,
    //   url: newsectionID.url
    // };

    res.status(200).send(arrTechNews);
  },

  delete: (req, res, next) => {
    let { title } = req.params;

    let index = arrTechNews.findIndex(heading => heading.title == title);
    arrTechNews.splice(index, 1);

    res.status(200).send(arrTechNews);
  }
};
